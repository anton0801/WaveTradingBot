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

// import { Context } from 'telegraf'
// import { getTelegramUser, upsertTelegramUser } from '../utils/database'
// import { languageKeyboard, mainMenuKeyboard } from '../utils/keyboard'
// import { getMessage } from '../utils/messages'

// export async function handleStart(ctx: Context) {
//   const telegramId = ctx.from!.id
//   const firstName = ctx.from!.first_name || 'Friend'

//   // Проверяем, существует ли пользователь
//   let user = await getTelegramUser(telegramId)

//   if (!user) {
//     // Создаём нового пользователя с АНГЛИЙСКИМ языком по умолчанию
//     await upsertTelegramUser(telegramId, {
//       telegram_id: telegramId.toString(),
//       language: 'en',
//       first_name: firstName,
//       username: ctx.from!.username
//     })

//     user = await getTelegramUser(telegramId)
//   }

//   const lang = user?.language || 'en'

//   // НОВАЯ ЛОГИКА: Проверяем статус пользователя
  
//   // 1. Если пользователь уже зарегистрирован на платформе и прошёл опрос
//   if (user?.registered_on_platform && user?.completed_survey) {
//     // Показываем приветственное сообщение и главное меню
//     const welcomeBackMessage = lang === 'en' 
//       ? `🌊 Welcome back, ${firstName}!

// Your account is active and ready to trade.

// Use the menu below to access all features:`
//       : lang === 'ru'
//       ? `🌊 С возвращением, ${firstName}!

// Ваш аккаунт активен и готов к торговле.

// Используйте меню ниже для доступа ко всем функциям:`
//       : lang === 'es'
//       ? `🌊 ¡Bienvenido de nuevo, ${firstName}!

// Tu cuenta está activa y lista para operar.

// Usa el menú de abajo para acceder a todas las funciones:`
//       : lang === 'de'
//       ? `🌊 Willkommen zurück, ${firstName}!

// Dein Konto ist aktiv und bereit zum Handeln.

// Nutze das Menü unten, um auf alle Funktionen zuzugreifen:`
//       : lang === 'uk'
//       ? `🌊 З поверненням, ${firstName}!

// Ваш акаунт активний і готовий до торгівлі.

// Використовуйте меню нижче для доступу до всіх функцій:`
//       : `🌊 Bon retour, ${firstName}!

// Votre compte est actif et prêt à trader.

// Utilisez le menu ci-dessous pour accéder à toutes les fonctionnalités:`

//     await ctx.reply(welcomeBackMessage, mainMenuKeyboard(lang))
//     return
//   }

//   // 2. Если пользователь зарегистрирован на платформе, но не прошёл опрос
//   if (user?.registered_on_platform && !user?.completed_survey) {
//     // Отправляем сразу к опросу
//     const { handleSurveyStart } = await import('./survey')
    
//     const surveyIntroMessage = lang === 'en'
//       ? `✅ Great! You're registered on the platform.

// Now let's personalize your trading experience with a quick survey.`
//       : lang === 'ru'
//       ? `✅ Отлично! Вы зарегистрированы на платформе.

// Теперь давайте персонализируем ваш торговый опыт с помощью короткого опроса.`
//       : lang === 'es'
//       ? `✅ ¡Genial! Estás registrado en la plataforma.

// Ahora personalicemos tu experiencia de trading con una breve encuesta.`
//       : lang === 'de'
//       ? `✅ Super! Du bist auf der Plattform registriert.

// Jetzt lass uns deine Trading-Erfahrung mit einer kurzen Umfrage personalisieren.`
//       : lang === 'uk'
//       ? `✅ Чудово! Ви зареєстровані на платформі.

// Тепер давайте персоналізуємо ваш торговий досвід за допомогою короткого опитування.`
//       : `✅ Super! Vous êtes inscrit sur la plateforme.

// Maintenant, personnalisons votre expérience de trading avec un court sondage.`

//     await ctx.reply(surveyIntroMessage)
    
//     setTimeout(async () => {
//       await handleSurveyStart(ctx)
//     }, 1500)
//     return
//   }

//   // 3. Если у пользователя уже есть язык, но он не зарегистрирован на платформе
//   if (user?.language && user.language !== 'en' && !user?.registered_on_platform) {
//     // Пропускаем выбор языка, сразу к регистрации
//     const { handleRegistration } = await import('./registration')
    
//     const registrationMessage = getMessage(lang, 'welcome')
    
//     await ctx.reply(registrationMessage)
    
//     setTimeout(async () => {
//       await handleRegistration(ctx)
//     }, 1500)
//     return
//   }

//   // 4. Новый пользователь - показываем выбор языка
//   const welcomeMessage = `🌊 Welcome to WaveTrading AI, ${firstName}!

// Your personal AI assistant for profitable Forex trading.

// 🎯 What we offer:
// • Free professional course (21 lessons)
// • AI signals with 94-98% accuracy
// • 24/7 support
// • Up to 100% bonus on deposit

// Let's get started! Choose your language:`

//   await ctx.reply(welcomeMessage, languageKeyboard())
// }