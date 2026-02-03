import { Telegraf, session, Context } from 'telegraf'
import { config } from './config/config'
import { handleStart } from './handlers/start'
import { handleRegistration } from './handlers/registration'
import {
  handleSurveyStart,
  handleSurveyExperience,
  handleSurveyGoal,
  handleSurveyTime,
  handleSurveyBudget,
  handleSurveyMonthlyGoal,
  handleSurveyPriority,
  handleSurveyComplete
} from './handlers/survey'
import {
  handleBrokerIntro,
  handleBrokerHaveId,
  handleBrokerIdInput,
  isAwaitingBrokerId
} from './handlers/broker'
import {
  handleSignalsIntro,
  handlePersonalTradingStart,
  handleStopTrading
} from './handlers/signals'
import {
  handleAccountInfo,
  handleReferralInfo
} from './handlers/account'
import {
  isAdmin,
  handleAdminPanel,
  handleBroadcast,
  handleSessionStart,
  handleSessionStop,
  handleManualSignal
} from './handlers/admin'
import { getTelegramUser, upsertTelegramUser } from './utils/database'

console.log('🤖 Starting WaveTrading Telegram Bot...')

const bot = new Telegraf(config.botToken)

// Session middleware
bot.use(session())

// Error handling
bot.catch((err: any, ctx: Context) => {
  console.error('❌ Bot error:', err)
  ctx.reply('❌ An error occurred. Please try again or contact support.')
})

// ======================
// COMMANDS
// ======================

// /start
bot.command('start', async (ctx) => {
  await handleStart(ctx)
})

// /help
bot.command('help', async (ctx) => {
  const user = await getTelegramUser(ctx.from.id)
  const lang = user?.language || 'en'
  const { getMessage } = await import('./utils/messages')
  await ctx.reply(getMessage(lang, 'help'), { parse_mode: 'Markdown' })
})

// /account
bot.command('account', handleAccountInfo)

// /signals
bot.command('signals', handleSignalsIntro)

// /course
bot.command('course', async (ctx) => {
  await ctx.reply(
    `📚 FREE TRADING COURSE\n\nAccess the full course on our platform:\n${config.platformUrl}/course\n\n21 professional lessons covering:\n• Forex basics\n• Technical analysis\n• Risk management\n• Trading psychology\n• AI signals usage`
  )
})

// Admin commands
bot.command('admin', async (ctx) => {
  if (isAdmin(ctx.from.id)) {
    await handleAdminPanel(ctx)
  }
})

bot.command('broadcast', async (ctx) => {
  if (!isAdmin(ctx.from.id)) return
  
  const message = ctx.message.text.replace('/broadcast', '').trim()
  if (!message) {
    await ctx.reply('Usage: /broadcast <message>')
    return
  }
  
  await handleBroadcast(ctx, message)
})

bot.command('session_start', async (ctx) => {
  if (!isAdmin(ctx.from.id)) return
  await handleSessionStart(ctx, bot)
})

bot.command('session_stop', async (ctx) => {
  if (!isAdmin(ctx.from.id)) return
  await handleSessionStop(ctx)
})

bot.command('signal', async (ctx) => {
  if (!isAdmin(ctx.from.id)) return
  
  const args = ctx.message.text.split(' ')
  if (args.length < 4) {
    await ctx.reply('Usage: /signal <pair> <LONG|SHORT> <duration>')
    return
  }
  
  const pair = args[1]
  const direction = args[2]
  const duration = parseInt(args[3])
  
  await handleManualSignal(ctx, bot, pair, direction, duration)
})

bot.command('stats', async (ctx) => {
  if (!isAdmin(ctx.from.id)) return
  await handleAdminPanel(ctx)
})

// ======================
// CALLBACK QUERIES
// ======================

// Language selection
bot.action(/^lang_(.+)$/, async (ctx) => {
  const lang = ctx.match[1]
  const telegramId = ctx.from.id
  
  await upsertTelegramUser(telegramId, {
    telegram_id: telegramId.toString(),
    language: lang
  })
  
  await ctx.answerCbQuery()
  await ctx.editMessageText('✅ Language updated!')
  
  // Переход к регистрации
  setTimeout(() => {
    handleRegistration(ctx)
  }, 1000)
})

// Survey callbacks
bot.action(/^exp_(.+)$/, async (ctx) => {
  await ctx.answerCbQuery()
  await handleSurveyExperience(ctx, ctx.match[1])
})

bot.action(/^goal_(.+)$/, async (ctx) => {
  await ctx.answerCbQuery()
  await handleSurveyGoal(ctx, ctx.match[1])
})

bot.action(/^time_(.+)$/, async (ctx) => {
  await ctx.answerCbQuery()
  await handleSurveyTime(ctx, ctx.match[1])
})

bot.action(/^budget_(\d+)$/, async (ctx) => {
  await ctx.answerCbQuery()
  await handleSurveyBudget(ctx, parseInt(ctx.match[1]))
})

bot.action('budget_custom', async (ctx) => {
  await ctx.answerCbQuery()
  await handleSurveyBudget(ctx, 'custom')
})

bot.action(/^monthly_(\d+)$/, async (ctx) => {
  await ctx.answerCbQuery()
  await handleSurveyMonthlyGoal(ctx, parseInt(ctx.match[1]))
})

bot.action(/^priority_(.+)$/, async (ctx) => {
  await ctx.answerCbQuery()
  await handleSurveyPriority(ctx, ctx.match[1])
})

bot.action(/^profit_(.+)$/, async (ctx) => {
  await ctx.answerCbQuery()
  await handleSurveyComplete(ctx, ctx.match[1])
})

// Broker callbacks
bot.action('broker_have_id', async (ctx) => {
  await ctx.answerCbQuery()
  await handleBrokerHaveId(ctx)
})

bot.action('deposit_remind_1h', async (ctx) => {
  await ctx.answerCbQuery('⏰ I will remind you in 1 hour!')
  
  setTimeout(() => {
    ctx.reply('💰 Don\'t forget to make your deposit!\n\nGet 100% bonus now!')
  }, 60 * 60 * 1000) // 1 hour
})

// Trading callbacks
bot.action('trading_personal', async (ctx) => {
  await ctx.answerCbQuery()
  await handlePersonalTradingStart(ctx, bot)
})

bot.action('trading_mass', async (ctx) => {
  await ctx.answerCbQuery()
  await ctx.editMessageText('✅ You will be notified when the next mass session starts!\n\nUsually sessions happen 2-3 times per day.')
})

bot.action('trading_start', async (ctx) => {
  await ctx.answerCbQuery()
  await handlePersonalTradingStart(ctx, bot)
})

bot.action('trading_later', async (ctx) => {
  await ctx.answerCbQuery('⏰ Reminder set!')
  
  setTimeout(() => {
    ctx.reply('🎯 Ready to start trading? Use /signals command!')
  }, 60 * 60 * 1000) // 1 hour
})

bot.action(/^trade_open_(\d+)$/, async (ctx) => {
  await ctx.answerCbQuery('✅ Good luck with your trade!')
})

bot.action(/^trade_skip_(\d+)$/, async (ctx) => {
  await ctx.answerCbQuery('⏭ Signal skipped. Waiting for next one...')
})

// ======================
// TEXT MESSAGES
// ======================

bot.on('text', async (ctx) => {
  const telegramId = ctx.from.id
  const text = ctx.message.text

  // Проверяем если ожидается broker ID
  if (isAwaitingBrokerId(telegramId)) {
    await handleBrokerIdInput(ctx, text)
    return
  }

  // Меню кнопки
  if (text === '📝 Register on Platform' || text === '📝 Регистрация на платформе') {
    await handleRegistration(ctx)
    return
  }

  if (text === '📊 Get AI Signals' || text === '📊 Получить AI сигналы') {
    await handleSignalsIntro(ctx)
    return
  }

  if (text === '📚 Free Course' || text === '📚 Бесплатный курс') {
    await ctx.reply(
      `📚 FREE TRADING COURSE\n\nAccess on platform:\n${config.platformUrl}/course`
    )
    return
  }

  if (text === '👤 My Account' || text === '👤 Мой аккаунт') {
    await handleAccountInfo(ctx)
    return
  }

  if (text === '❓ Help' || text === '❓ Помощь') {
    const user = await getTelegramUser(telegramId)
    const lang = user?.language || 'en'
    const { getMessage } = await import('./utils/messages')
    await ctx.reply(getMessage(lang, 'help'), { parse_mode: 'Markdown' })
    return
  }

  // Default response
  await ctx.reply('Use menu buttons or /help for available commands.')
})

// ======================
// START BOT
// ======================

bot.launch()
  .then(() => {
    console.log('✅ Bot started successfully!')
    console.log(`📱 Bot username: @${bot.botInfo?.username}`)
    console.log('👥 Waiting for users...')
  })
  .catch((error) => {
    console.error('❌ Failed to start bot:', error)
    process.exit(1)
  })

// Graceful shutdown
process.once('SIGINT', () => {
  console.log('⏹️ Stopping bot...')
  bot.stop('SIGINT')
})

process.once('SIGTERM', () => {
  console.log('⏹️ Stopping bot...')
  bot.stop('SIGTERM')
})