import { Context, Telegraf } from 'telegraf'
import { getTelegramUser, getRecentSignals, getAllTelegramUsers } from '../utils/database'
import { getMessage } from '../utils/messages'
import { startTradingKeyboard } from '../utils/keyboard'
import { Markup } from 'telegraf'

// Активные пользователи в режиме торговли
const activeTradingUsers: Set<number> = new Set()
// Интервалы для персональных сигналов
const tradingIntervals: Map<number, NodeJS.Timeout> = new Map()

export async function handleSignalsIntro(ctx: Context) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  
  if (!user) return

  const lang = user.language || 'en'

  await ctx.reply(
    getMessage(lang, 'signals.intro'),
    Markup.inlineKeyboard([
      [Markup.button.callback('🎯 Personal Trading', 'trading_personal')],
      [Markup.button.callback('🔥 Wait for Mass Session', 'trading_mass')]
    ])
  )
}

export async function handlePersonalTradingStart(ctx: Context, bot: Telegraf) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  
  if (!user) return

  const lang = user.language || 'en'

  // Проверяем есть ли депозит
  if (!user.broker_registered) {
    await ctx.reply('❌ Please register with broker first!\n\nUse menu to register.')
    return
  }

  activeTradingUsers.add(telegramId)

  await ctx.editMessageText(
    getMessage(lang, 'signals.personal'),
    startTradingKeyboard(lang)
  )

  // Запускаем отправку сигналов каждые 3-10 минут
  startPersonalSignals(bot, telegramId, lang)
}

function startPersonalSignals(bot: Telegraf, telegramId: number, lang: string) {
  // Останавливаем предыдущий интервал если есть
  if (tradingIntervals.has(telegramId)) {
    clearInterval(tradingIntervals.get(telegramId)!)
  }

  const sendSignal = async () => {
    if (!activeTradingUsers.has(telegramId)) {
      // Пользователь остановил торговлю
      const interval = tradingIntervals.get(telegramId)
      if (interval) {
        clearInterval(interval)
        tradingIntervals.delete(telegramId)
      }
      return
    }

    const signal = generateRandomSignal()
    
    await bot.telegram.sendMessage(
      telegramId,
      getMessage(lang, 'signals.signal', signal),
      {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '✅ Trade Opened', callback_data: `trade_open_${signal.id}` },
              { text: '⏭ Skip', callback_data: `trade_skip_${signal.id}` }
            ]
          ]
        }
      }
    )

    // Через 3-5 минут отправляем результат
    setTimeout(() => {
      sendSignalResult(bot, telegramId, signal, lang)
    }, (signal.duration + Math.random() * 2) * 60 * 1000)
  }

  // Первый сигнал сразу
  sendSignal()

  // Последующие каждые 3-10 минут
  const interval = setInterval(() => {
    sendSignal()
  }, (Math.random() * 7 + 3) * 60 * 1000) // 3-10 минут

  tradingIntervals.set(telegramId, interval)
}

async function sendSignalResult(bot: Telegraf, telegramId: number, signal: any, lang: string) {
  // Генерируем результат (70% win rate)
  const isWin = Math.random() < 0.7
  const profit = isWin ? (Math.random() * 10 + 5).toFixed(2) : 0
  const loss = !isWin ? (Math.random() * 8 + 3).toFixed(2) : 0

  const resultData = {
    id: signal.id,
    pair: signal.pair,
    direction: signal.direction,
    duration: signal.duration,
    result: isWin ? 'win' : 'loss',
    profit,
    loss,
    wins: Math.floor(Math.random() * 10 + 5),
    losses: Math.floor(Math.random() * 5 + 2),
    winRate: Math.floor(Math.random() * 20 + 65),
    totalProfit: (Math.random() * 100 + 20).toFixed(2)
  }

  await bot.telegram.sendMessage(
    telegramId,
    getMessage(lang, 'signals.result', resultData),
    { parse_mode: 'Markdown' }
  )
}

export async function handleStopTrading(ctx: Context) {
  const telegramId = ctx.from!.id
  activeTradingUsers.delete(telegramId)
  
  const interval = tradingIntervals.get(telegramId)
  if (interval) {
    clearInterval(interval)
    tradingIntervals.delete(telegramId)
  }

  await ctx.reply('⏹️ Trading stopped. Use menu to start again.')
}

// Генерация случайного сигнала
function generateRandomSignal() {
  const pairs = ['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD', 'USDCAD', 'NZDUSD', 'EURGBP', 'EURJPY']
  const directions = ['LONG', 'SHORT']
  const durations = [2, 3, 4, 5]
  
  const reasons = [
    'RSI oversold at 28, breaking support at 1.0850, volume spike +34%',
    'MACD bullish crossover, breaking resistance at 1.1050, strong buying pressure',
    'Price bouncing from key support level, bullish engulfing pattern on 1H chart',
    'Trend reversal confirmed, stochastic oversold, divergence on 4H chart',
    'Breaking out of consolidation zone, high volume confirmation, momentum building'
  ]

  return {
    id: Math.floor(Math.random() * 10000),
    pair: pairs[Math.floor(Math.random() * pairs.length)],
    direction: directions[Math.floor(Math.random() * directions.length)],
    duration: durations[Math.floor(Math.random() * durations.length)],
    confidence: Math.floor(Math.random() * 10 + 88),
    reason: reasons[Math.floor(Math.random() * reasons.length)],
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
    todaySuccessRate: `${Math.floor(Math.random() * 3 + 6)}/8`
  }
}

// Массовая сессия
export async function startMassSession(bot: Telegraf) {
  console.log('🔥 Starting mass trading session...')

  const users = await getAllTelegramUsers()
  
  // Отправляем countdown всем пользователям
  const countdown = 20 * 60 // 20 минут в секундах

  for (const user of users) {
    try {
      await bot.telegram.sendMessage(
        parseInt(user.telegram_id),
        getMessage('en', 'signals.massSession', countdown),
        { parse_mode: 'Markdown' }
      )
    } catch (error) {
      console.error(`Error sending to ${user.telegram_id}:`, error)
    }
  }

  // Через 20 минут начинаем отправлять сигналы
  setTimeout(async () => {
    console.log('🚀 Mass session started! Sending signals...')

    for (const user of users) {
      try {
        await bot.telegram.sendMessage(
          parseInt(user.telegram_id),
          getMessage('en', 'signals.sessionStart'),
          { parse_mode: 'Markdown' }
        )
      } catch (error) {
        console.error(`Error sending to ${user.telegram_id}:`, error)
      }
    }

    // Отправляем сигналы каждые 3-10 минут в течение сессии
    sendMassSignals(bot, users)
  }, countdown * 1000)
}

function sendMassSignals(bot: Telegraf, users: any[]) {
  let signalCount = 0
  const maxSignals = 10 // Максимум сигналов за сессию

  const sendSignal = async () => {
    if (signalCount >= maxSignals) {
      console.log('✅ Mass session completed')
      return
    }

    const signal = generateRandomSignal()
    signalCount++

    for (const user of users) {
      try {
        await bot.telegram.sendMessage(
          parseInt(user.telegram_id),
          getMessage('en', 'signals.signal', signal),
          { parse_mode: 'Markdown' }
        )
      } catch (error) {
        console.error(`Error sending signal to ${user.telegram_id}:`, error)
      }
    }

    // Результат через несколько минут
    setTimeout(() => {
      sendMassSignalResult(bot, users, signal)
    }, signal.duration * 60 * 1000)
  }

  // Первый сигнал сразу
  sendSignal()

  // Остальные каждые 3-10 минут
  const interval = setInterval(() => {
    sendSignal()
  }, (Math.random() * 7 + 3) * 60 * 1000)

  // Останавливаем через 2 часа
  setTimeout(() => {
    clearInterval(interval)
  }, 2 * 60 * 60 * 1000)
}

async function sendMassSignalResult(bot: Telegraf, users: any[], signal: any) {
  const isWin = Math.random() < 0.7

  const resultData = {
    id: signal.id,
    pair: signal.pair,
    direction: signal.direction,
    duration: signal.duration,
    result: isWin ? 'win' : 'loss',
    profit: isWin ? (Math.random() * 10 + 5).toFixed(2) : 0,
    loss: !isWin ? (Math.random() * 8 + 3).toFixed(2) : 0,
    wins: Math.floor(Math.random() * 10 + 5),
    losses: Math.floor(Math.random() * 5 + 2),
    winRate: Math.floor(Math.random() * 20 + 65),
    totalProfit: (Math.random() * 100 + 20).toFixed(2)
  }

  for (const user of users) {
    try {
      await bot.telegram.sendMessage(
        parseInt(user.telegram_id),
        getMessage('en', 'signals.result', resultData),
        { parse_mode: 'Markdown' }
      )
    } catch (error) {
      console.error(`Error sending result to ${user.telegram_id}:`, error)
    }
  }
}