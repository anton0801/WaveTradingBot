import { Context } from 'telegraf'
import { config } from '../config/config'
import { getTelegramUser } from '../utils/database'
import { getMessage } from '../utils/messages'
import { Markup } from 'telegraf'

export async function handleRegistration(ctx: Context) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  
  if (!user) {
    await ctx.reply('❌ Error: User not found. Please /start')
    return
  }

  const lang = user.language || 'en'

  // Проверяем зарегистрирован ли уже
  if (user.registered_on_platform && user.user_id) {
    await ctx.reply(getMessage(lang, 'registration.alreadyRegistered'))
    return
  }

  // Генерируем ссылку на регистрацию с UTM параметрами
  const registrationUrl = `${config.platformUrl}/register?utm_source=telegram_bot&telegram_id=${telegramId}`

  await ctx.reply(
    getMessage(lang, 'registration.start'),
    Markup.inlineKeyboard([
      [Markup.button.url(
        getMessage(lang, 'registration.button'),
        registrationUrl
      )]
    ])
  )
}