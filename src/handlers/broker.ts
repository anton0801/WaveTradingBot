import { Context } from 'telegraf'
import { getTelegramUser, updateBrokerId } from '../utils/database'
import { getMessage } from '../utils/messages'
import { brokerRegistrationKeyboard, startTradingKeyboard } from '../utils/keyboard'
import { Markup } from 'telegraf'

// Временное хранилище для ожидания broker ID
const awaitingBrokerId: Set<number> = new Set()

export async function handleBrokerIntro(ctx: Context) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  
  if (!user) return

  const lang = user.language || 'en'
  const name = user.first_name || 'Friend'

  // Получаем данные из опроса (если есть)
  const monthlyGoal = 500 // Из опроса
  const budget = 50 // Из опроса

  await ctx.reply(
    getMessage(lang, 'broker.intro', name, monthlyGoal, budget),
    brokerRegistrationKeyboard(lang)
  )
}

export async function handleBrokerHaveId(ctx: Context) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  
  if (!user) return

  const lang = user.language || 'en'

  awaitingBrokerId.add(telegramId)

  await ctx.editMessageText(getMessage(lang, 'broker.idRequest'))
}

export async function handleBrokerIdInput(ctx: Context, brokerId: string) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  
  if (!user) return

  const lang = user.language || 'en'

  // Валидация broker ID (4-12 digits)
  if (!/^\d{4,12}$/.test(brokerId)) {
    await ctx.reply(getMessage(lang, 'broker.invalidId'))
    return
  }

  // Сохраняем broker ID
  if (user.user_id) {
    const success = await updateBrokerId(user.user_id, brokerId)
    
    if (success) {
      awaitingBrokerId.delete(telegramId)
      
      await ctx.reply(
        getMessage(lang, 'broker.success', brokerId),
        { parse_mode: 'Markdown' }
      )

      // Напоминание о депозите
      setTimeout(() => {
        handleDepositReminder(ctx)
      }, 3000)
    } else {
      await ctx.reply('❌ Error saving Broker ID. Please try again.')
    }
  }
}

export async function handleDepositReminder(ctx: Context) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  
  if (!user) return

  const lang = user.language || 'en'

  const brokerUrl = 'https://po7.cash/deposit'

  await ctx.reply(
    getMessage(lang, 'broker.depositReminder'),
    Markup.inlineKeyboard([
      [Markup.button.url('💰 Deposit Now', brokerUrl)],
      [Markup.button.callback('⏰ Remind me in 1 hour', 'deposit_remind_1h')]
    ])
  )
}

export function isAwaitingBrokerId(telegramId: number): boolean {
  return awaitingBrokerId.has(telegramId)
}