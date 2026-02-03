import { Markup } from 'telegraf'
import { config } from '../config/config'

// Главное меню
export const mainMenuKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      register: '📝 Register on Platform',
      signals: '📊 Get AI Signals',
      course: '📚 Free Course',
      myAccount: '👤 My Account',
      help: '❓ Help'
    },
    ru: {
      register: '📝 Регистрация на платформе',
      signals: '📊 Получить AI сигналы',
      course: '📚 Бесплатный курс',
      myAccount: '👤 Мой аккаунт',
      help: '❓ Помощь'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.keyboard([
    [t.register],
    [t.signals, t.course],
    [t.myAccount, t.help]
  ]).resize()
}

// Регистрация - выбор языка
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

// Опросник - опыт
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
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.experienced, 'exp_experienced')],
    [Markup.button.callback(t.tried, 'exp_tried')],
    [Markup.button.callback(t.beginner, 'exp_beginner')]
  ])
}

// Опросник - цель
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

// Опросник - время
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
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.short, 'time_10-30_min')],
    [Markup.button.callback(t.medium, 'time_1-2_hours')],
    [Markup.button.callback(t.auto, 'time_automate')]
  ])
}

// Опросник - бюджет
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

// Опросник - месячная цель
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

// Опросник - приоритет
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

// Опросник - когда первая прибыль
export const surveyProfitTimelineKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      today: '⚡ Today',
      week: '📅 This week',
      month: '📆 This month',
      study: '📚 Study first'
    },
    ru: {
      today: '⚡ Сегодня',
      week: '📅 На этой неделе',
      month: '📆 В этом месяце',
      study: '📚 Сначала изучу'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.today, 'profit_today')],
    [Markup.button.callback(t.week, 'profit_this_week')],
    [Markup.button.callback(t.month, 'profit_this_month')],
    [Markup.button.callback(t.study, 'profit_study_first')]
  ])
}

// Broker registration
export const brokerRegistrationKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      register: '✅ Register on Pocket Option',
      haveAccount: '✏️ I have Broker ID'
    },
    ru: {
      register: '✅ Зарегистрироваться на Pocket Option',
      haveAccount: '✏️ У меня есть Broker ID'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  const brokerUrl = `https://broker-qx.pro/sign-up/?lid=1671121`

  return Markup.inlineKeyboard([
    [Markup.button.url(t.register, brokerUrl)],
    [Markup.button.callback(t.haveAccount, 'broker_have_id')]
  ])
}

// Start trading
export const startTradingKeyboard = (lang: string = 'en') => {
  const texts = {
    en: {
      start: '🚀 Start Trading',
      later: '⏰ Remind me later'
    },
    ru: {
      start: '🚀 Начать торговать',
      later: '⏰ Напомнить позже'
    }
  }

  const t = texts[lang as keyof typeof texts] || texts.en

  return Markup.inlineKeyboard([
    [Markup.button.callback(t.start, 'trading_start')],
    [Markup.button.callback(t.later, 'trading_later')]
  ])
}