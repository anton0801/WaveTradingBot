import { Context } from 'telegraf'
import { getTelegramUser, updateBrokerId } from '../utils/database'
import { getMessage } from '../utils/messages'
import { brokerRegistrationKeyboard, depositReminderKeyboard } from '../utils/keyboard'

// Хранилище для ожидания broker ID
const awaitingBrokerId: Record<number, boolean> = {}

export async function handleBrokerIntro(ctx: Context) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  const lang = user?.language || 'en'

  const registerUrl = `https://po4.cash/register?promo=WAVE100${telegramId}`

  // Используем getMessage() для поддержки всех 6 языков
  const messageText = getMessage(lang, 'broker.registrationInfo')

  await ctx.reply(messageText, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: getMessage(lang, 'broker.registerButton'),
            url: registerUrl
          }
        ]
      ]
    }
  })

  // Автоматически через 5 секунд просим ввести ID
  setTimeout(() => {
    handleBrokerHaveId(ctx)
  }, 5000)
}

export async function handleBrokerHaveId(ctx: Context) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  const lang = user?.language || 'en'

  awaitingBrokerId[telegramId] = true

  // Используем getMessage() для поддержки всех 6 языков
  const promptText = getMessage(lang, 'broker.idPrompt')

  await ctx.reply(promptText)
}

export async function handleBrokerIdInput(ctx: Context, brokerId: string) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  const lang = user?.language || 'en'

  // Валидация ID
  const cleanId = brokerId.replace(/[^0-9]/g, '')
  
  if (cleanId.length < 4 || cleanId.length > 12) {
    // Используем getMessage() для ошибки валидации
    await ctx.reply(getMessage(lang, 'broker.invalidId'))
    return
  }

  // Сохраняем ID - ИСПРАВЛЕНО: используем updateBrokerId
  if (user?.user_id) {
    await updateBrokerId(user.user_id, cleanId)
  }

  awaitingBrokerId[telegramId] = false

  // Используем getMessage() для подтверждения
  const successText = getMessage(lang, 'broker.success', cleanId)

  // ИСПРАВЛЕНО: используем depositReminderKeyboard из keyboard.ts
  await ctx.reply(successText, depositReminderKeyboard(lang))
}

export function isAwaitingBrokerId(telegramId: number): boolean {
  return awaitingBrokerId[telegramId] === true
}