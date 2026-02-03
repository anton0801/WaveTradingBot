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
  handleSurveyComplete,
  isAwaitingCustomBudget,
  handleCustomBudgetInput
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
import { getMessage } from './utils/messages'

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
  await ctx.reply(getMessage(lang, 'help'), { parse_mode: 'Markdown' })
})

// /support - NEW COMMAND
bot.command('support', async (ctx) => {
  const user = await getTelegramUser(ctx.from.id)
  const lang = user?.language || 'en'
  await ctx.reply(getMessage(lang, 'support'), { parse_mode: 'Markdown' })
})

// /course - UPDATED COMMAND
bot.command('course', async (ctx) => {
  const user = await getTelegramUser(ctx.from.id)
  const lang = user?.language || 'en'
  await ctx.reply(getMessage(lang, 'freeCourse'), { parse_mode: 'Markdown' })
})

// /account
bot.command('account', handleAccountInfo)

// /signals
bot.command('signals', handleSignalsIntro)

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

// Broker callbacks - UPDATED: удалена кнопка broker_have_id
bot.action('broker_register', async (ctx) => {
  await ctx.answerCbQuery()
  const user = await getTelegramUser(ctx.from.id)
  const lang = user?.language || 'en'
  
  const registerUrl = `https://po4.cash/register?promo=WAVE100${ctx.from.id}`
  
  await ctx.editMessageText(
    getMessage(lang, 'broker.registerPrompt', registerUrl),
    {
      reply_markup: {
        inline_keyboard: []
      }
    }
  )
  
  // Автоматически переходим к запросу ID
  setTimeout(() => {
    handleBrokerHaveId(ctx)
  }, 3000)
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
  const user = await getTelegramUser(telegramId)
  const lang = user?.language || 'en'

  // ВАЖНО: Сначала проверяем кастомную сумму бюджета
  if (isAwaitingCustomBudget(telegramId)) {
    await handleCustomBudgetInput(ctx, text)
    return
  }

  // Проверяем если ожидается broker ID
  if (isAwaitingBrokerId(telegramId)) {
    await handleBrokerIdInput(ctx, text)
    return
  }

  // Определяем текст кнопок для всех языков
  const buttonTexts = {
    register: ['📝 Register on Platform', '📝 Регистрация на платформе', '📝 Registrarse en la Plataforma', '📝 Auf Plattform Registrieren', '📝 Зареєструватися на Платформі', '📝 S\'inscrire sur la Plateforme'],
    signals: ['📊 Get AI Signals', '📊 Получить AI сигналы', '📊 Obtener Señales de IA', '📊 KI-Signale Erhalten', '📊 Отримати AI сигнали', '📊 Obtenir des Signaux IA'],
    course: ['📚 Free Course', '📚 Бесплатный курс', '📚 Curso Gratuito', '📚 Kostenloser Kurs', '📚 Безкоштовний курс', '📚 Cours Gratuit'],
    account: ['👤 My Account', '👤 Мой аккаунт', '👤 Mi Cuenta', '👤 Mein Konto', '👤 Мій акаунт', '👤 Mon Compte'],
    support: ['💬 Support', '💬 Поддержка', '💬 Soporte', '💬 Support', '💬 Підтримка', '💬 Support']
  }

  // Регистрация
  if (buttonTexts.register.includes(text)) {
    await handleRegistration(ctx)
    return
  }

  // AI Сигналы
  if (buttonTexts.signals.includes(text)) {
    await handleSignalsIntro(ctx)
    return
  }

  // Бесплатный курс - UPDATED
  if (buttonTexts.course.includes(text)) {
    await ctx.reply(getMessage(lang, 'freeCourse'), { parse_mode: 'Markdown' })
    return
  }

  // Мой аккаунт
  if (buttonTexts.account.includes(text)) {
    await handleAccountInfo(ctx)
    return
  }

  // Support - NEW
  if (buttonTexts.support.includes(text)) {
    await ctx.reply(getMessage(lang, 'support'), { parse_mode: 'Markdown' })
    return
  }

  // Default response
  await ctx.reply(
    lang === 'ru'
      ? '❌ Неизвестная команда. Используйте кнопки меню или /help для списка команд.'
      : lang === 'es'
      ? '❌ Comando desconocido. Usa los botones del menú o /help para la lista de comandos.'
      : lang === 'de'
      ? '❌ Unbekannter Befehl. Verwende Menü-Buttons oder /help für Befehlsliste.'
      : lang === 'uk'
      ? '❌ Невідома команда. Використовуйте кнопки меню або /help для списку команд.'
      : lang === 'fr'
      ? '❌ Commande inconnue. Utilisez les boutons du menu ou /help pour la liste des commandes.'
      : '❌ Unknown command. Use menu buttons or /help for available commands.'
  )
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