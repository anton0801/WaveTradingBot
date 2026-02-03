import { Markup } from 'telegraf'
import { config } from '../config/config'

// ===================================================================
// Главное меню с поддержкой всех 6 языков
// ===================================================================
export const mainMenuKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      register: '📝 Register on Platform',
      signals: '📊 Get AI Signals',
      course: '📚 Free Course',
      myAccount: '👤 My Account',
      support: '💬 Support'
    },
    ru: {
      register: '📝 Регистрация на платформе',
      signals: '📊 Получить AI сигналы',
      course: '📚 Бесплатный курс',
      myAccount: '👤 Мой аккаунт',
      support: '💬 Поддержка'
    },
    es: {
      register: '📝 Registrarse en la Plataforma',
      signals: '📊 Obtener Señales de IA',
      course: '📚 Curso Gratuito',
      myAccount: '👤 Mi Cuenta',
      support: '💬 Soporte'
    },
    de: {
      register: '📝 Auf Plattform Registrieren',
      signals: '📊 KI-Signale Erhalten',
      course: '📚 Kostenloser Kurs',
      myAccount: '👤 Mein Konto',
      support: '💬 Support'
    },
    uk: {
      register: '📝 Зареєструватися на Платформі',
      signals: '📊 Отримати AI сигнали',
      course: '📚 Безкоштовний курс',
      myAccount: '👤 Мій акаунт',
      support: '💬 Підтримка'
    },
    fr: {
      register: '📝 S\'inscrire sur la Plateforme',
      signals: '📊 Obtenir des Signaux IA',
      course: '📚 Cours Gratuit',
      myAccount: '👤 Mon Compte',
      support: '💬 Support'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.keyboard([
    [t.register],
    [t.signals, t.course],
    [t.myAccount, t.support]
  ]).resize()
}

// ===================================================================
// Регистрация - выбор языка
// ===================================================================
export const languageKeyboard = () => {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback('🇬🇧 English', 'lang_en'),
      Markup.button.callback('🇷🇺 Русский', 'lang_ru')
    ],
    [
      Markup.button.callback('🇪🇸 Español', 'lang_es'),
      Markup.button.callback('🇩🇪 Deutsch', 'lang_de')
    ],
    [
      Markup.button.callback('🇺🇦 Українська', 'lang_uk'),
      Markup.button.callback('🇫🇷 Français', 'lang_fr')
    ]
  ])
}

// ===================================================================
// Опросник - опыт торговли
// ===================================================================
export const surveyExperienceKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      experienced: '💼 Experienced trader',
      tried: '🔄 Tried but lost',
      beginner: '🌱 Complete beginner'
    },
    ru: {
      experienced: '💼 Опытный трейдер',
      tried: '🔄 Пробовал, терял',
      beginner: '🌱 Полный новичок'
    },
    es: {
      experienced: '💼 Trader experimentado',
      tried: '🔄 Intenté pero perdí',
      beginner: '🌱 Principiante total'
    },
    de: {
      experienced: '💼 Erfahrener Trader',
      tried: '🔄 Versucht aber verloren',
      beginner: '🌱 Absoluter Anfänger'
    },
    uk: {
      experienced: '💼 Досвідчений трейдер',
      tried: '🔄 Пробував, втрачав',
      beginner: '🌱 Повний новачок'
    },
    fr: {
      experienced: '💼 Trader expérimenté',
      tried: '🔄 Essayé mais perdu',
      beginner: '🌱 Débutant complet'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.experienced, 'exp_experienced')],
    [Markup.button.callback(t.tried, 'exp_tried')],
    [Markup.button.callback(t.beginner, 'exp_beginner')]
  ])
}

// ===================================================================
// Опросник - цель торговли
// ===================================================================
export const surveyGoalKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      extraIncome: '💰 Extra income',
      freedom: '🌴 Financial freedom',
      save: '🏠 Save for purchase',
      try: '🎯 Just try'
    },
    ru: {
      extraIncome: '💰 Дополнительный доход',
      freedom: '🌴 Финансовая свобода',
      save: '🏠 Накопить на покупку',
      try: '🎯 Просто попробовать'
    },
    es: {
      extraIncome: '💰 Ingresos extra',
      freedom: '🌴 Libertad financiera',
      save: '🏠 Ahorrar para compra',
      try: '🎯 Solo probar'
    },
    de: {
      extraIncome: '💰 Zusatzeinkommen',
      freedom: '🌴 Finanzielle Freiheit',
      save: '🏠 Für Kauf sparen',
      try: '🎯 Einfach versuchen'
    },
    uk: {
      extraIncome: '💰 Додатковий дохід',
      freedom: '🌴 Фінансова свобода',
      save: '🏠 Накопичити на покупку',
      try: '🎯 Просто спробувати'
    },
    fr: {
      extraIncome: '💰 Revenu supplémentaire',
      freedom: '🌴 Liberté financière',
      save: '🏠 Économiser pour achat',
      try: '🎯 Juste essayer'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.extraIncome, 'goal_extra_income')],
    [Markup.button.callback(t.freedom, 'goal_financial_freedom')],
    [Markup.button.callback(t.save, 'goal_save_for_purchase')],
    [Markup.button.callback(t.try, 'goal_just_try')]
  ])
}

// ===================================================================
// Опросник - время
// ===================================================================
export const surveyTimeKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      short: '⚡ 10-30 min/day',
      medium: '⏰ 1-2 hours/day',
      auto: '🤖 Automate everything'
    },
    ru: {
      short: '⚡ 10-30 мин/день',
      medium: '⏰ 1-2 часа/день',
      auto: '🤖 Автоматизировать всё'
    },
    es: {
      short: '⚡ 10-30 min/día',
      medium: '⏰ 1-2 horas/día',
      auto: '🤖 Automatizar todo'
    },
    de: {
      short: '⚡ 10-30 Min/Tag',
      medium: '⏰ 1-2 Stunden/Tag',
      auto: '🤖 Alles automatisieren'
    },
    uk: {
      short: '⚡ 10-30 хв/день',
      medium: '⏰ 1-2 години/день',
      auto: '🤖 Автоматизувати все'
    },
    fr: {
      short: '⚡ 10-30 min/jour',
      medium: '⏰ 1-2 heures/jour',
      auto: '🤖 Tout automatiser'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.short, 'time_10-30_min')],
    [Markup.button.callback(t.medium, 'time_1-2_hours')],
    [Markup.button.callback(t.auto, 'time_automate')]
  ])
}

// ===================================================================
// Опросник - бюджет
// ===================================================================
export const surveyBudgetKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      small: '$20',
      recommended: '$50 (recommended)',
      medium: '$100',
      custom: '✏️ Custom amount'
    },
    ru: {
      small: '$20',
      recommended: '$50 (рекомендуем)',
      medium: '$100',
      custom: '✏️ Своя сумма'
    },
    es: {
      small: '$20',
      recommended: '$50 (recomendado)',
      medium: '$100',
      custom: '✏️ Monto personalizado'
    },
    de: {
      small: '$20',
      recommended: '$50 (empfohlen)',
      medium: '$100',
      custom: '✏️ Eigener Betrag'
    },
    uk: {
      small: '$20',
      recommended: '$50 (рекомендуємо)',
      medium: '$100',
      custom: '✏️ Своя сума'
    },
    fr: {
      small: '$20',
      recommended: '$50 (recommandé)',
      medium: '$100',
      custom: '✏️ Montant personnalisé'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.small, 'budget_20')],
    [Markup.button.callback(t.recommended, 'budget_50')],
    [Markup.button.callback(t.medium, 'budget_100')],
    [Markup.button.callback(t.custom, 'budget_custom')]
  ])
}

// ===================================================================
// Опросник - месячная цель
// ===================================================================
export const surveyMonthlyGoalKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      small: '$100-300/month',
      medium: '$500-1,000/month',
      large: '$1,000-3,000/month',
      huge: '$3,000+/month'
    },
    ru: {
      small: '$100-300/месяц',
      medium: '$500-1,000/месяц',
      large: '$1,000-3,000/месяц',
      huge: '$3,000+/месяц'
    },
    es: {
      small: '$100-300/mes',
      medium: '$500-1,000/mes',
      large: '$1,000-3,000/mes',
      huge: '$3,000+/mes'
    },
    de: {
      small: '$100-300/Monat',
      medium: '$500-1,000/Monat',
      large: '$1,000-3,000/Monat',
      huge: '$3,000+/Monat'
    },
    uk: {
      small: '$100-300/місяць',
      medium: '$500-1,000/місяць',
      large: '$1,000-3,000/місяць',
      huge: '$3,000+/місяць'
    },
    fr: {
      small: '$100-300/mois',
      medium: '$500-1,000/mois',
      large: '$1,000-3,000/mois',
      huge: '$3,000+/mois'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.small, 'monthly_150')],
    [Markup.button.callback(t.medium, 'monthly_750')],
    [Markup.button.callback(t.large, 'monthly_2000')],
    [Markup.button.callback(t.huge, 'monthly_5000')]
  ])
}

// ===================================================================
// Опросник - приоритет
// ===================================================================
export const surveyPriorityKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      safety: '🛡️ Safety first',
      profit: '💰 Maximum profit',
      simplicity: '🎯 Simplicity',
      support: '👨‍💼 Personal support'
    },
    ru: {
      safety: '🛡️ Безопасность',
      profit: '💰 Максимальная прибыль',
      simplicity: '🎯 Простота',
      support: '👨‍💼 Личная поддержка'
    },
    es: {
      safety: '🛡️ Seguridad primero',
      profit: '💰 Máxima ganancia',
      simplicity: '🎯 Simplicidad',
      support: '👨‍💼 Soporte personal'
    },
    de: {
      safety: '🛡️ Sicherheit zuerst',
      profit: '💰 Maximaler Gewinn',
      simplicity: '🎯 Einfachheit',
      support: '👨‍💼 Persönlicher Support'
    },
    uk: {
      safety: '🛡️ Безпека',
      profit: '💰 Максимальний прибуток',
      simplicity: '🎯 Простота',
      support: '👨‍💼 Особиста підтримка'
    },
    fr: {
      safety: '🛡️ Sécurité d\'abord',
      profit: '💰 Profit maximum',
      simplicity: '🎯 Simplicité',
      support: '👨‍💼 Support personnel'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.safety, 'priority_safety')],
    [Markup.button.callback(t.profit, 'priority_profitability')],
    [Markup.button.callback(t.simplicity, 'priority_simplicity')],
    [Markup.button.callback(t.support, 'priority_support')]
  ])
}

// ===================================================================
// Опросник - когда первая прибыль
// ===================================================================
export const surveyProfitTimelineKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      thisWeek: '⚡ This week',
      thisMonth: '📅 This month',
      longTerm: '📊 Long-term (3+ months)'
    },
    ru: {
      thisWeek: '⚡ На этой неделе',
      thisMonth: '📅 В этом месяце',
      longTerm: '📊 Долгосрочно (3+ мес)'
    },
    es: {
      thisWeek: '⚡ Esta semana',
      thisMonth: '📅 Este mes',
      longTerm: '📊 Largo plazo (3+ meses)'
    },
    de: {
      thisWeek: '⚡ Diese Woche',
      thisMonth: '📅 Diesen Monat',
      longTerm: '📊 Langfristig (3+ Monate)'
    },
    uk: {
      thisWeek: '⚡ Цього тижня',
      thisMonth: '📅 Цього місяця',
      longTerm: '📊 Довгостроково (3+ міс)'
    },
    fr: {
      thisWeek: '⚡ Cette semaine',
      thisMonth: '📅 Ce mois-ci',
      longTerm: '📊 Long terme (3+ mois)'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.thisWeek, 'profit_this_week')],
    [Markup.button.callback(t.thisMonth, 'profit_this_month')],
    [Markup.button.callback(t.longTerm, 'profit_long_term')]
  ])
}

// ===================================================================
// Брокер - регистрация
// ===================================================================
export const brokerRegistrationKeyboard = (lang: string = 'en') => {
  const texts = {
    en: { register: '🚀 Register Now' },
    ru: { register: '🚀 Зарегистрироваться' },
    es: { register: '🚀 Registrarse Ahora' },
    de: { register: '🚀 Jetzt Registrieren' },
    uk: { register: '🚀 Зареєструватися' },
    fr: { register: '🚀 S\'inscrire Maintenant' }
  }

  const t = texts[lang as keyof typeof texts] || texts.en
  const registerUrl = `https://po4.cash/register?promo=WAVE100`

  return Markup.inlineKeyboard([
    [Markup.button.url(t.register, registerUrl)]
  ])
}

// ===================================================================
// Депозит - напоминание
// ===================================================================
export const depositReminderKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      depositNow: '💰 Deposit Now',
      remindLater: '⏰ Remind in 1 hour'
    },
    ru: {
      depositNow: '💰 Пополнить сейчас',
      remindLater: '⏰ Напомнить через 1 час'
    },
    es: {
      depositNow: '💰 Depositar Ahora',
      remindLater: '⏰ Recordar en 1 hora'
    },
    de: {
      depositNow: '💰 Jetzt Einzahlen',
      remindLater: '⏰ In 1 Stunde erinnern'
    },
    uk: {
      depositNow: '💰 Поповнити зараз',
      remindLater: '⏰ Нагадати через 1 годину'
    },
    fr: {
      depositNow: '💰 Déposer Maintenant',
      remindLater: '⏰ Rappeler dans 1 heure'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en
  const depositUrl = 'https://po4.cash/cabinet/demo-pro-real/'

  return Markup.inlineKeyboard([
    [Markup.button.url(t.depositNow, depositUrl)],
    [Markup.button.callback(t.remindLater, 'deposit_remind_1h')]
  ])
}

// ===================================================================
// Торговля - выбор режима
// ===================================================================
export const tradingModeKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      personal: '🎯 Personal Trading',
      mass: '🔥 Wait for Mass Session'
    },
    ru: {
      personal: '🎯 Персональная торговля',
      mass: '🔥 Ждать массовую сессию'
    },
    es: {
      personal: '🎯 Trading Personal',
      mass: '🔥 Esperar Sesión Masiva'
    },
    de: {
      personal: '🎯 Persönliches Trading',
      mass: '🔥 Auf Massensession warten'
    },
    uk: {
      personal: '🎯 Персональна торгівля',
      mass: '🔥 Чекати масову сесію'
    },
    fr: {
      personal: '🎯 Trading Personnel',
      mass: '🔥 Attendre Session Massive'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.personal, 'trading_personal')],
    [Markup.button.callback(t.mass, 'trading_mass')]
  ])
}

// ===================================================================
// Торговля - старт
// ===================================================================
export const startTradingKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      start: '🚀 Start Trading Now',
      later: '⏰ Remind Me Later'
    },
    ru: {
      start: '🚀 Начать Торговлю',
      later: '⏰ Напомнить Позже'
    },
    es: {
      start: '🚀 Comenzar a Operar',
      later: '⏰ Recordar Más Tarde'
    },
    de: {
      start: '🚀 Jetzt Trading Starten',
      later: '⏰ Später Erinnern'
    },
    uk: {
      start: '🚀 Почати Торгівлю',
      later: '⏰ Нагадати Пізніше'
    },
    fr: {
      start: '🚀 Commencer le Trading',
      later: '⏰ Me Rappeler Plus Tard'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.start, 'trading_start')],
    [Markup.button.callback(t.later, 'trading_later')]
  ])
}

// ===================================================================
// Сигнал - действия
// ===================================================================
export const signalActionKeyboard = (signalId: number, lang: string = 'en') => {
  const texts = {
    en: {
      open: '✅ I Opened Trade',
      skip: '⏭ Skip Signal'
    },
    ru: {
      open: '✅ Открыл сделку',
      skip: '⏭ Пропустить сигнал'
    },
    es: {
      open: '✅ Abrí la Operación',
      skip: '⏭ Omitir Señal'
    },
    de: {
      open: '✅ Trade Eröffnet',
      skip: '⏭ Signal Überspringen'
    },
    uk: {
      open: '✅ Відкрив угоду',
      skip: '⏭ Пропустити сигнал'
    },
    fr: {
      open: '✅ J\'ai Ouvert le Trade',
      skip: '⏭ Ignorer le Signal'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.open, `trade_open_${signalId}`)],
    [Markup.button.callback(t.skip, `trade_skip_${signalId}`)]
  ])
}

// ===================================================================
// Админ - панель управления
// ===================================================================
export const adminPanelKeyboard = () => {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback('📊 Statistics', 'admin_stats'),
      Markup.button.callback('📢 Broadcast', 'admin_broadcast')
    ],
    [
      Markup.button.callback('🚀 Start Session', 'admin_session_start'),
      Markup.button.callback('⏹️ Stop Session', 'admin_session_stop')
    ],
    [
      Markup.button.callback('📨 Send Signal', 'admin_send_signal'),
      Markup.button.callback('👥 Users List', 'admin_users')
    ]
  ])
}