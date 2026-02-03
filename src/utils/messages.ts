export const messages = {
  en: {
    welcome: `🌊 Welcome to WaveTrading AI!

Your personal AI assistant for profitable Forex trading.

🎯 What we offer:
- Free professional course
- AI signals with 94-98% accuracy
- 24/7 support
- Up to 100% bonus on deposit

Choose your language to continue:`,
    
    registration: {
      start: `📝 Registration

Let's register you on our platform to unlock all features!

Click the button below:`,
      
      button: '🚀 Register on Platform',
      
      success: `✅ Registration successful!

Welcome to WaveTrading! Now let's get to know you better with a quick survey.`,
      
      alreadyRegistered: `✅ You're already registered!

Your account is active. Use the menu to access features.`
    },

    survey: {
      intro: `📋 Quick Survey (1/7)

Let's personalize your trading experience!

What's your trading experience?`,
      
      question2: `📋 Survey (2/7)

What is your main goal?`,
      
      question3: `📋 Survey (3/7)

How much time can you dedicate daily?`,
      
      question4: `📋 Survey (4/7)

What's your starting budget?`,
      
      question5: `📋 Survey (5/7)

What's your monthly income goal?`,
      
      question6: `📋 Survey (6/7)

What's most important to you?`,
      
      question7: `📋 Survey (7/7)

When do you want to see first profit?`,
      
      complete: (data: any) => `✅ Perfect! Survey completed!

📊 Your Profile:
- Experience: ${data.experience}
- Goal: ${data.goal}
- Budget: $${data.budget}
- Monthly target: $${data.monthlyGoal}

I'll prepare optimal strategy for you! Let's continue...`
    },

    broker: {
      intro: (name: string, goal: number, budget: number) => `Excellent, ${name}! 

I see you want to earn $${goal}/month with $${budget} budget. This is absolutely achievable! 📈

Our AI generates signals, but you need a broker account for real trading.
We work with Pocket Option - they offer up to 100% bonus!

✅ Up to 100% deposit bonus
✅ Minimum deposit $10 (we recommend $50)
✅ Withdrawal in 24 hours
✅ Personal manager

Register now:`,
      
      idRequest: `Great! Please enter your Broker ID.

You can find it in your broker account settings.

Send me the ID (4-12 digits):`,
      
      invalidId: `❌ Invalid Broker ID format.

ID must be 4-12 digits.

Please try again:`,
      
      success: (brokerId: string) => `🎉 Congratulations! ID #${brokerId} confirmed!

Remaining steps:
1️⃣ Deposit balance (min. $10, recommended $50)
2️⃣ Get 100% bonus automatically
3️⃣ Start receiving AI signals

⏰ 100% bonus available only first 24 hours!
Don't miss the deadline!

Ready to deposit?`,
      
      depositReminder: `💰 Make your first deposit to activate:

✅ 100% bonus (double your money!)
✅ Premium AI signals
✅ Personal manager support
✅ VIP analytics access

Minimum: $10
Recommended: $50 (optimal for $500/month goal)

[Deposit Now] button will redirect to broker.`,
      
      depositConfirm: `🎉 Deposit detected!

Your account is now fully activated!

🎁 Bonuses unlocked:
- 100% deposit bonus
- AI signals activated
- VIP support enabled

Ready to start trading?`
    },

    signals: {
      intro: `📊 AI TRADING SIGNALS

Our AI analyzes market 24/7 and sends signals with:
- 94-98% accuracy
- Entry point & duration
- Risk management
- Real-time updates

Choose mode:`,
      
      personal: `✅ Personal trading mode activated!

You'll receive signals every 3-10 minutes.
Each signal includes full analysis.

🎯 Ready to start?`,
      
      signal: (data: any) => `🎯 SIGNAL #${data.id} | ${data.time}

📊 Pair: ${data.pair}
${data.direction === 'LONG' ? '🔼' : '🔽'} Direction: ${data.direction}
⏰ Duration: ${data.duration} minutes
💰 Recommended stake: 5% of balance

📈 AI Analysis:
${data.reason}

🎯 AI Confidence: ${data.confidence}%
📊 Similar signals today: ${data.todaySuccessRate}

Open trade now in your broker!`,
      
      result: (data: any) => `${data.result === 'win' ? '✅' : '❌'} SIGNAL #${data.id} | RESULT

📊 ${data.pair} | ${data.direction} ${data.duration}min
💰 Result: ${data.result === 'win' ? `+$${data.profit} profit` : `-$${data.loss} loss`}

Today's Statistics:
✅ Successful: ${data.wins}
❌ Losses: ${data.losses}
📊 Win Rate: ${data.winRate}%
💰 Profit: ${data.totalProfit >= 0 ? '+' : ''}$${data.totalProfit}`,
      
      massSession: (countdown: number) => `🔥 MASS TRADING SESSION STARTING!

⏰ Trading starts in: ${Math.floor(countdown / 60)} minutes

This is your chance to trade with ALL premium users simultaneously!

💡 What to do now:
1️⃣ Make sure you have deposit
2️⃣ Open your broker platform
3️⃣ Wait for signals

🎁 Special bonus during mass session:
- More frequent signals
- Higher accuracy
- Real-time group energy

Be ready! 🚀`,
      
      sessionStart: `🚀 TRADING SESSION STARTED!

Signals will arrive every 3-10 minutes.
Stay focused and follow the strategy!

Good luck! 💰`
    },

    account: {
      info: (data: any) => `👤 YOUR ACCOUNT

📊 Statistics:
- Level: ${data.level}
- Points: ${data.points}
- Win Rate: ${data.winRate}%
- Total Profit: $${data.totalProfit}

💎 VIP Status: ${data.vipStatus}
- Deposit: $${data.depositAmount}
- Signals accuracy: ${data.signalsAccuracy}%

📚 Course Progress:
- Completed: ${data.lessonsCompleted}/21 lessons

🎁 Referrals:
- Total: ${data.totalReferrals}
- Earnings: $${data.referralEarnings}

Want to upgrade your account?`,
      
      referral: (code: string) => `🎁 INVITE FRIENDS & EARN

Your referral link:
${code}

💰 Rewards:
- Friend registers: +10 points
- Friend deposits $50+: $25 reward

Share with friends and earn passive income!`
    },

    help: `❓ HELP & SUPPORT

📚 Quick Guide:
/start - Restart bot
/account - View your account
/signals - Get AI signals
/course - Free trading course

💬 Need help?
Contact our support team 24/7:
@WaveTradingSupport

📖 FAQ: https://wavetrading.com/faq
📱 Platform: https://wavetrading.com`,

    admin: {
      panel: `🛡️ ADMIN PANEL

Available commands:
/broadcast <message> - Send to all users
/stats - User statistics
/session_start - Start mass session
/session_stop - Stop session
/signal <pair> <direction> <duration> - Send manual signal

Current stats will be shown below:`,
      
      stats: (data: any) => `📊 BOT STATISTICS

👥 Users:
- Total: ${data.totalUsers}
- Registered on platform: ${data.registered}
- With deposits: ${data.deposited}
- Active today: ${data.activeToday}

💰 Revenue:
- Total deposits: $${data.totalDeposits}
- Average deposit: $${data.avgDeposit}

📈 Engagement:
- Completed survey: ${data.completedSurvey}
- Started trading: ${data.startedTrading}`,
      
      sessionStarted: `✅ Mass trading session started!

Countdown message sent to all users.
Session will begin in 20 minutes.`,
      
      sessionStopped: `⏹️ Trading session stopped.

Final stats sent to participants.`,
      
      broadcastSent: (count: number) => `✅ Broadcast sent to ${count} users.`,
      
      signalSent: `✅ Signal sent to all active users.`,
      
      unauthorized: `❌ Access denied. Admin only.`
    }
  },

  ru: {
    welcome: `🌊 Добро пожаловать в WaveTrading AI!

Ваш персональный AI-помощник для прибыльной торговли на Forex.

🎯 Что мы предлагаем:
- Бесплатный профессиональный курс
- AI сигналы с точностью 94-98%
- Поддержка 24/7
- До 100% бонус на депозит

Выберите ваш язык для продолжения:`,
    
    registration: {
      start: `📝 Регистрация

Давайте зарегистрируем вас на нашей платформе, чтобы разблокировать все функции!

Нажмите кнопку ниже:`,
      
      button: '🚀 Зарегистрироваться на платформе',
      
      success: `✅ Регистрация успешна!

Добро пожаловать в WaveTrading! Теперь давайте узнаем вас получше с помощью короткого опроса.`,
      
      alreadyRegistered: `✅ Вы уже зарегистрированы!

Ваш аккаунт активен. Используйте меню для доступа к функциям.`
    },

    survey: {
      intro: `📋 Быстрый опрос (1/7)

Давайте персонализируем ваш торговый опыт!

Какой у вас опыт торговли?`,
      
      question2: `📋 Опрос (2/7)

Какая ваша основная цель?`,
      
      question3: `📋 Опрос (3/7)

Сколько времени вы можете уделять ежедневно?`,
      
      question4: `📋 Опрос (4/7)

Каков ваш стартовый бюджет?`,
      
      question5: `📋 Опрос (5/7)

Какова ваша месячная цель по доходу?`,
      
      question6: `📋 Опрос (6/7)

Что для вас наиболее важно?`,
      
      question7: `📋 Опрос (7/7)

Когда вы хотите увидеть первую прибыль?`,
      
      complete: (data: any) => `✅ Отлично! Опрос завершён!

📊 Ваш профиль:
- Опыт: ${data.experience}
- Цель: ${data.goal}
- Бюджет: $${data.budget}
- Месячная цель: $${data.monthlyGoal}

Я подготовлю оптимальную стратегию для вас! Продолжим...`
    },

    broker: {
      intro: (name: string, goal: number, budget: number) => `Отлично, ${name}! 

Вижу что вы хотите зарабатывать $${goal}/месяц с бюджетом $${budget}. Это абсолютно реально! 📈

Наш AI генерирует сигналы, но для реальной торговли нужен брокерский счет.
Мы работаем с Pocket Option - они дают до 100% бонус!

✅ Бонус до 100% на депозит
✅ Минимальный депозит $10 (рекомендуем $50)
✅ Вывод за 24 часа
✅ Личный менеджер

Зарегистрируйтесь сейчас:`,
      
      idRequest: `Отлично! Пожалуйста, введите ваш Broker ID.

Вы можете найти его в настройках аккаунта брокера.

Отправьте мне ID (4-12 цифр):`,
      
      invalidId: `❌ Неверный формат Broker ID.

ID должен содержать 4-12 цифр.

Попробуйте снова:`,
      
      success: (brokerId: string) => `🎉 Поздравляю! ID #${brokerId} подтверждён!

Осталось:
1️⃣ Пополнить баланс (мин. $10, рекомендуем $50)
2️⃣ Получить 100% бонус автоматически
3️⃣ Начать получать AI сигналы

⏰ Бонус 100% доступен только первые 24 часа!
Успейте до дедлайна!

Готовы пополнить?`,
      
      depositReminder: `💰 Сделайте первый депозит для активации:

✅ Бонус 100% (удвойте деньги!)
✅ Премиум AI сигналы
✅ Поддержка личного менеджера
✅ Доступ к VIP аналитике

Минимум: $10
Рекомендуем: $50 (оптимально для цели $500/месяц)

Кнопка [Пополнить] перенаправит к брокеру.`,
      
      depositConfirm: `🎉 Депозит обнаружен!

Ваш аккаунт полностью активирован!

🎁 Бонусы разблокированы:
- 100% бонус на депозит
- AI сигналы активированы
- VIP поддержка включена

Готовы начать торговать?`
    },

    signals: {
      intro: `📊 AI ТОРГОВЫЕ СИГНАЛЫ

Наш AI анализирует рынок 24/7 и отправляет сигналы с:
- 94-98% точностью
- Точка входа и длительность
- Управление рисками
- Обновления в реальном времени

Выберите режим:`,
      
      personal: `✅ Режим личной торговли активирован!

Вы будете получать сигналы каждые 3-10 минут.
Каждый сигнал включает полный анализ.

🎯 Готовы начать?`,
      
      signal: (data: any) => `🎯 СИГНАЛ #${data.id} | ${data.time}

📊 Пара: ${data.pair}
${data.direction === 'LONG' ? '🔼' : '🔽'} Направление: ${data.direction}
⏰ Время: ${data.duration} минут
💰 Рекомендуемая ставка: 5% от баланса

📈 AI Анализ:
${data.reason}

🎯 AI Уверенность: ${data.confidence}%
📊 Похожие сигналы сегодня: ${data.todaySuccessRate}

Откройте сделку сейчас у брокера!`,
      
      result: (data: any) => `${data.result === 'win' ? '✅' : '❌'} СИГНАЛ #${data.id} | РЕЗУЛЬТАТ

📊 ${data.pair} | ${data.direction} ${data.duration}мин
💰 Результат: ${data.result === 'win' ? `+$${data.profit} прибыль` : `-$${data.loss} убыток`}

Статистика сегодня:
✅ Успешных: ${data.wins}
❌ Убыточных: ${data.losses}
📊 Win Rate: ${data.winRate}%
💰 Прибыль: ${data.totalProfit >= 0 ? '+' : ''}$${data.totalProfit}`,
      
      massSession: (countdown: number) => `🔥 НАЧИНАЕТСЯ МАССОВАЯ ТОРГОВАЯ СЕССИЯ!

⏰ Торговля начнётся через: ${Math.floor(countdown / 60)} минут

Это ваш шанс торговать вместе со ВСЕМИ премиум пользователями!

💡 Что делать сейчас:
1️⃣ Убедитесь что у вас есть депозит
2️⃣ Откройте платформу брокера
3️⃣ Ждите сигналов

🎁 Специальный бонус во время массовой сессии:
- Более частые сигналы
- Повышенная точность
- Энергия группы в реальном времени

Будьте готовы! 🚀`,
      
      sessionStart: `🚀 ТОРГОВАЯ СЕССИЯ НАЧАЛАСЬ!

Сигналы будут приходить каждые 3-10 минут.
Сохраняйте фокус и следуйте стратегии!

Удачи! 💰`
    },

    account: {
      info: (data: any) => `👤 ВАШ АККАУНТ

📊 Статистика:
- Уровень: ${data.level}
- Баллы: ${data.points}
- Win Rate: ${data.winRate}%
- Общая прибыль: $${data.totalProfit}

💎 VIP Статус: ${data.vipStatus}
- Депозит: $${data.depositAmount}
- Точность сигналов: ${data.signalsAccuracy}%

📚 Прогресс курса:
- Завершено: ${data.lessonsCompleted}/21 уроков

🎁 Рефералы:
- Всего: ${data.totalReferrals}
- Заработано: $${data.referralEarnings}

Хотите улучшить аккаунт?`,
      
      referral: (code: string) => `🎁 ПРИГЛАШАЙ ДРУЗЕЙ И ЗАРАБАТЫВАЙ

Ваша реферальная ссылка:
${code}

💰 Награды:
- Друг регистрируется: +10 баллов
- Друг вносит $50+: $25 награда

Делитесь с друзьями и получайте пассивный доход!`
    },

    help: `❓ ПОМОЩЬ И ПОДДЕРЖКА

📚 Краткое руководство:
/start - Перезапустить бота
/account - Посмотреть аккаунт
/signals - Получить AI сигналы
/course - Бесплатный курс торговли

💬 Нужна помощь?
Свяжитесь с поддержкой 24/7:
@WaveTradingSupport

📖 FAQ: https://wavetrading.com/faq
📱 Платформа: https://wavetrading.com`,

    admin: {
      panel: `🛡️ ПАНЕЛЬ АДМИНИСТРАТОРА

Доступные команды:
/broadcast <сообщение> - Отправить всем пользователям
/stats - Статистика пользователей
/session_start - Начать массовую сессию
/session_stop - Остановить сессию
/signal <пара> <направление> <длительность> - Отправить ручной сигнал

Текущая статистика будет показана ниже:`,
      
      stats: (data: any) => `📊 СТАТИСТИКА БОТА

👥 Пользователи:
- Всего: ${data.totalUsers}
- Зарегистрированы на платформе: ${data.registered}
- С депозитами: ${data.deposited}
- Активны сегодня: ${data.activeToday}

💰 Доход:
- Всего депозитов: $${data.totalDeposits}
- Средний депозит: $${data.avgDeposit}

📈 Вовлечённость:
- Прошли опрос: ${data.completedSurvey}
- Начали торговать: ${data.startedTrading}`,
      
      sessionStarted: `✅ Массовая торговая сессия запущена!

Сообщение с обратным отсчётом отправлено всем пользователям.
Сессия начнётся через 20 минут.`,
      
      sessionStopped: `⏹️ Торговая сессия остановлена.

Финальная статистика отправлена участникам.`,
      
      broadcastSent: (count: number) => `✅ Рассылка отправлена ${count} пользователям.`,
      
      signalSent: `✅ Сигнал отправлен всем активным пользователям.`,
      
      unauthorized: `❌ Доступ запрещён. Только для администраторов.`
    }
  }

  // ES, DE, UK, FR - добавьте аналогично если нужно
}

export function getMessage(lang: string, path: string, ...args: any[]): string {
  const keys = path.split('.')
  let message: any = messages[lang as keyof typeof messages] || messages.en
  
  for (const key of keys) {
    message = message[key]
    if (!message) {
      // Fallback to English
      message = messages.en
      for (const k of keys) {
        message = message[k]
      }
      break
    }
  }
  
  if (typeof message === 'function') {
    return message(...args)
  }
  
  return message || path
}