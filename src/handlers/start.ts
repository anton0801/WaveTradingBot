import { Context } from 'telegraf'
import { upsertTelegramUser, getTelegramUser } from '../utils/database'
import { languageKeyboard } from '../utils/keyboard'
import { getMessage } from '../utils/messages'
import { UserData } from '../types'
import { handleSurveyStart } from './survey'

export async function handleStart(ctx: Context) {
  const telegramId = ctx.from!.id
  const username = ctx.from!.username
  const firstName = ctx.from!.first_name
  const lastName = ctx.from!.last_name
  const languageCode = ctx.from!.language_code || 'en'

  console.log(`📥 /start from user ${telegramId} (@${username})`)

  // Сохраняем/обновляем пользователя
  const userData: UserData = {
    telegram_id: telegramId.toString(),
    username,
    first_name: firstName,
    last_name: lastName,
    language_code: languageCode
  }

  await upsertTelegramUser(telegramId, userData)

  // Проверяем параметр start (для deep linking из платформы)
  // В Telegraf payload доступен только в команде /start с параметрами
  const messageText = 'text' in ctx.message! ? ctx.message.text : ''
  const startPayload = messageText.replace('/start ', '').trim()

  if (startPayload && startPayload !== '/start' && startPayload.startsWith('registered_')) {
    // Пользователь вернулся после регистрации на платформе
    const platformTelegramId = startPayload.replace('registered_', '')
    
    await ctx.reply(
      getMessage(languageCode, 'registration.success'),
      { parse_mode: 'Markdown' }
    )

    // Переходим к опроснику
    return handleSurveyStart(ctx)
  }

  // Обычный старт - показываем welcome + выбор языка
  await ctx.reply(
    getMessage(languageCode, 'welcome'),
    languageKeyboard()
  )
}