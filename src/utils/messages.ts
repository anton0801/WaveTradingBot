// export const messages = {
//   en: {
//     welcome: `🌊 Welcome to WaveTrading AI!

// Your personal AI assistant for profitable Forex trading.

// 🎯 What we offer:
// - Free professional course
// - AI signals with 94-98% accuracy
// - 24/7 support
// - Up to 100% bonus on deposit

// Choose your language to continue:`,
    
//     registration: {
//       start: `📝 Registration

// Let's register you on our platform to unlock all features!

// Click the button below:`,
      
//       button: '🚀 Register on Platform',
      
//       success: `✅ Registration successful!

// Welcome to WaveTrading! Now let's get to know you better with a quick survey.`,
      
//       alreadyRegistered: `✅ You're already registered!

// Your account is active. Use the menu to access features.`
//     },

//     survey: {
//       intro: `📋 Quick Survey (1/7)

// Let's personalize your trading experience!

// What's your trading experience?`,
      
//       question2: `📋 Survey (2/7)

// What is your main goal?`,
      
//       question3: `📋 Survey (3/7)

// How much time can you dedicate daily?`,
      
//       question4: `📋 Survey (4/7)

// What's your starting budget?`,
      
//       question5: `📋 Survey (5/7)

// What's your monthly income goal?`,
      
//       question6: `📋 Survey (6/7)

// What's most important to you?`,
      
//       question7: `📋 Survey (7/7)

// When do you want to see first profit?`,
      
//       complete: (data: any) => `✅ Perfect! Survey completed!

// 📊 Your Profile:
// - Experience: ${data.experience}
// - Goal: ${data.goal}
// - Budget: $${data.budget}
// - Monthly target: $${data.monthlyGoal}

// I'll prepare optimal strategy for you! Let's continue...`
//     },

//     broker: {
//       intro: (name: string, goal: number, budget: number) => `Excellent, ${name}! 

// I see you want to earn $${goal}/month with $${budget} budget. This is absolutely achievable! 📈

// Our AI generates signals, but you need a broker account for real trading.
// We work with Pocket Option - they offer up to 100% bonus!

// ✅ Up to 100% deposit bonus
// ✅ Minimum deposit $10 (we recommend $50)
// ✅ Withdrawal in 24 hours
// ✅ Personal manager

// Register now:`,
      
//       idRequest: `Great! Please enter your Broker ID.

// You can find it in your broker account settings.

// Send me the ID (4-12 digits):`,
      
//       invalidId: `❌ Invalid Broker ID format.

// ID must be 4-12 digits.

// Please try again:`,
      
//       success: (brokerId: string) => `🎉 Congratulations! ID #${brokerId} confirmed!

// Remaining steps:
// 1️⃣ Deposit balance (min. $10, recommended $50)
// 2️⃣ Get 100% bonus automatically
// 3️⃣ Start receiving AI signals

// ⏰ 100% bonus available only first 24 hours!
// Don't miss the deadline!

// Ready to deposit?`,
      
//       depositReminder: `💰 Make your first deposit to activate:

// ✅ 100% bonus (double your money!)
// ✅ Premium AI signals
// ✅ Personal manager support
// ✅ VIP analytics access

// Minimum: $10
// Recommended: $50 (optimal for $500/month goal)

// [Deposit Now] button will redirect to broker.`,
      
//       depositConfirm: `🎉 Deposit detected!

// Your account is now fully activated!

// 🎁 Bonuses unlocked:
// - 100% deposit bonus
// - AI signals activated
// - VIP support enabled

// Ready to start trading?`
//     },

//     signals: {
//       intro: `📊 AI TRADING SIGNALS

// Our AI analyzes market 24/7 and sends signals with:
// - 94-98% accuracy
// - Entry point & duration
// - Risk management
// - Real-time updates

// Choose mode:`,
      
//       personal: `✅ Personal trading mode activated!

// You'll receive signals every 3-10 minutes.
// Each signal includes full analysis.

// 🎯 Ready to start?`,
      
//       signal: (data: any) => `🎯 SIGNAL #${data.id} | ${data.time}

// 📊 Pair: ${data.pair}
// ${data.direction === 'LONG' ? '🔼' : '🔽'} Direction: ${data.direction}
// ⏰ Duration: ${data.duration} minutes
// 💰 Recommended stake: 5% of balance

// 📈 AI Analysis:
// ${data.reason}

// 🎯 AI Confidence: ${data.confidence}%
// 📊 Similar signals today: ${data.todaySuccessRate}

// Open trade now in your broker!`,
      
//       result: (data: any) => `${data.result === 'win' ? '✅' : '❌'} SIGNAL #${data.id} | RESULT

// 📊 ${data.pair} | ${data.direction} ${data.duration}min
// 💰 Result: ${data.result === 'win' ? `+$${data.profit} profit` : `-$${data.loss} loss`}

// Today's Statistics:
// ✅ Successful: ${data.wins}
// ❌ Losses: ${data.losses}
// 📊 Win Rate: ${data.winRate}%
// 💰 Profit: ${data.totalProfit >= 0 ? '+' : ''}$${data.totalProfit}`,
      
//       massSession: (countdown: number) => `🔥 MASS TRADING SESSION STARTING!

// ⏰ Trading starts in: ${Math.floor(countdown / 60)} minutes

// This is your chance to trade with ALL premium users simultaneously!

// 💡 What to do now:
// 1️⃣ Make sure you have deposit
// 2️⃣ Open your broker platform
// 3️⃣ Wait for signals

// 🎁 Special bonus during mass session:
// - More frequent signals
// - Higher accuracy
// - Real-time group energy

// Be ready! 🚀`,
      
//       sessionStart: `🚀 TRADING SESSION STARTED!

// Signals will arrive every 3-10 minutes.
// Stay focused and follow the strategy!

// Good luck! 💰`
//     },

//     account: {
//       info: (data: any) => `👤 YOUR ACCOUNT

// 📊 Statistics:
// - Level: ${data.level}
// - Points: ${data.points}
// - Win Rate: ${data.winRate}%
// - Total Profit: $${data.totalProfit}

// 💎 VIP Status: ${data.vipStatus}
// - Deposit: $${data.depositAmount}
// - Signals accuracy: ${data.signalsAccuracy}%

// 📚 Course Progress:
// - Completed: ${data.lessonsCompleted}/21 lessons

// 🎁 Referrals:
// - Total: ${data.totalReferrals}
// - Earnings: $${data.referralEarnings}

// Want to upgrade your account?`,
      
//       referral: (code: string) => `🎁 INVITE FRIENDS & EARN

// Your referral link:
// ${code}

// 💰 Rewards:
// - Friend registers: +10 points
// - Friend deposits $50+: $25 reward

// Share with friends and earn passive income!`
//     },

//     help: `❓ HELP & SUPPORT

// 📚 Quick Guide:
// /start - Restart bot
// /account - View your account
// /signals - Get AI signals
// /course - Free trading course

// 💬 Need help?
// Contact our support team 24/7:
// @WaveTradingSupport

// 📖 FAQ: https://wavetrading.com/faq
// 📱 Platform: https://wavetrading.com`,

//     admin: {
//       panel: `🛡️ ADMIN PANEL

// Available commands:
// /broadcast <message> - Send to all users
// /stats - User statistics
// /session_start - Start mass session
// /session_stop - Stop session
// /signal <pair> <direction> <duration> - Send manual signal

// Current stats will be shown below:`,
      
//       stats: (data: any) => `📊 BOT STATISTICS

// 👥 Users:
// - Total: ${data.totalUsers}
// - Registered on platform: ${data.registered}
// - With deposits: ${data.deposited}
// - Active today: ${data.activeToday}

// 💰 Revenue:
// - Total deposits: $${data.totalDeposits}
// - Average deposit: $${data.avgDeposit}

// 📈 Engagement:
// - Completed survey: ${data.completedSurvey}
// - Started trading: ${data.startedTrading}`,
      
//       sessionStarted: `✅ Mass trading session started!

// Countdown message sent to all users.
// Session will begin in 20 minutes.`,
      
//       sessionStopped: `⏹️ Trading session stopped.

// Final stats sent to participants.`,
      
//       broadcastSent: (count: number) => `✅ Broadcast sent to ${count} users.`,
      
//       signalSent: `✅ Signal sent to all active users.`,
      
//       unauthorized: `❌ Access denied. Admin only.`
//     }
//   },

//   ru: {
//     welcome: `🌊 Добро пожаловать в WaveTrading AI!

// Ваш персональный AI-помощник для прибыльной торговли на Forex.

// 🎯 Что мы предлагаем:
// - Бесплатный профессиональный курс
// - AI сигналы с точностью 94-98%
// - Поддержка 24/7
// - До 100% бонус на депозит

// Выберите ваш язык для продолжения:`,
    
//     registration: {
//       start: `📝 Регистрация

// Давайте зарегистрируем вас на нашей платформе, чтобы разблокировать все функции!

// Нажмите кнопку ниже:`,
      
//       button: '🚀 Зарегистрироваться на платформе',
      
//       success: `✅ Регистрация успешна!

// Добро пожаловать в WaveTrading! Теперь давайте узнаем вас получше с помощью короткого опроса.`,
      
//       alreadyRegistered: `✅ Вы уже зарегистрированы!

// Ваш аккаунт активен. Используйте меню для доступа к функциям.`
//     },

//     survey: {
//       intro: `📋 Быстрый опрос (1/7)

// Давайте персонализируем ваш торговый опыт!

// Какой у вас опыт торговли?`,
      
//       question2: `📋 Опрос (2/7)

// Какая ваша основная цель?`,
      
//       question3: `📋 Опрос (3/7)

// Сколько времени вы можете уделять ежедневно?`,
      
//       question4: `📋 Опрос (4/7)

// Каков ваш стартовый бюджет?`,
      
//       question5: `📋 Опрос (5/7)

// Какова ваша месячная цель по доходу?`,
      
//       question6: `📋 Опрос (6/7)

// Что для вас наиболее важно?`,
      
//       question7: `📋 Опрос (7/7)

// Когда вы хотите увидеть первую прибыль?`,
      
//       complete: (data: any) => `✅ Отлично! Опрос завершён!

// 📊 Ваш профиль:
// - Опыт: ${data.experience}
// - Цель: ${data.goal}
// - Бюджет: $${data.budget}
// - Месячная цель: $${data.monthlyGoal}

// Я подготовлю оптимальную стратегию для вас! Продолжим...`
//     },

//     broker: {
//       intro: (name: string, goal: number, budget: number) => `Отлично, ${name}! 

// Вижу что вы хотите зарабатывать $${goal}/месяц с бюджетом $${budget}. Это абсолютно реально! 📈

// Наш AI генерирует сигналы, но для реальной торговли нужен брокерский счет.
// Мы работаем с Pocket Option - они дают до 100% бонус!

// ✅ Бонус до 100% на депозит
// ✅ Минимальный депозит $10 (рекомендуем $50)
// ✅ Вывод за 24 часа
// ✅ Личный менеджер

// Зарегистрируйтесь сейчас:`,
      
//       idRequest: `Отлично! Пожалуйста, введите ваш Broker ID.

// Вы можете найти его в настройках аккаунта брокера.

// Отправьте мне ID (4-12 цифр):`,
      
//       invalidId: `❌ Неверный формат Broker ID.

// ID должен содержать 4-12 цифр.

// Попробуйте снова:`,
      
//       success: (brokerId: string) => `🎉 Поздравляю! ID #${brokerId} подтверждён!

// Осталось:
// 1️⃣ Пополнить баланс (мин. $10, рекомендуем $50)
// 2️⃣ Получить 100% бонус автоматически
// 3️⃣ Начать получать AI сигналы

// ⏰ Бонус 100% доступен только первые 24 часа!
// Успейте до дедлайна!

// Готовы пополнить?`,
      
//       depositReminder: `💰 Сделайте первый депозит для активации:

// ✅ Бонус 100% (удвойте деньги!)
// ✅ Премиум AI сигналы
// ✅ Поддержка личного менеджера
// ✅ Доступ к VIP аналитике

// Минимум: $10
// Рекомендуем: $50 (оптимально для цели $500/месяц)

// Кнопка [Пополнить] перенаправит к брокеру.`,
      
//       depositConfirm: `🎉 Депозит обнаружен!

// Ваш аккаунт полностью активирован!

// 🎁 Бонусы разблокированы:
// - 100% бонус на депозит
// - AI сигналы активированы
// - VIP поддержка включена

// Готовы начать торговать?`
//     },

//     signals: {
//       intro: `📊 AI ТОРГОВЫЕ СИГНАЛЫ

// Наш AI анализирует рынок 24/7 и отправляет сигналы с:
// - 94-98% точностью
// - Точка входа и длительность
// - Управление рисками
// - Обновления в реальном времени

// Выберите режим:`,
      
//       personal: `✅ Режим личной торговли активирован!

// Вы будете получать сигналы каждые 3-10 минут.
// Каждый сигнал включает полный анализ.

// 🎯 Готовы начать?`,
      
//       signal: (data: any) => `🎯 СИГНАЛ #${data.id} | ${data.time}

// 📊 Пара: ${data.pair}
// ${data.direction === 'LONG' ? '🔼' : '🔽'} Направление: ${data.direction}
// ⏰ Время: ${data.duration} минут
// 💰 Рекомендуемая ставка: 5% от баланса

// 📈 AI Анализ:
// ${data.reason}

// 🎯 AI Уверенность: ${data.confidence}%
// 📊 Похожие сигналы сегодня: ${data.todaySuccessRate}

// Откройте сделку сейчас у брокера!`,
      
//       result: (data: any) => `${data.result === 'win' ? '✅' : '❌'} СИГНАЛ #${data.id} | РЕЗУЛЬТАТ

// 📊 ${data.pair} | ${data.direction} ${data.duration}мин
// 💰 Результат: ${data.result === 'win' ? `+$${data.profit} прибыль` : `-$${data.loss} убыток`}

// Статистика сегодня:
// ✅ Успешных: ${data.wins}
// ❌ Убыточных: ${data.losses}
// 📊 Win Rate: ${data.winRate}%
// 💰 Прибыль: ${data.totalProfit >= 0 ? '+' : ''}$${data.totalProfit}`,
      
//       massSession: (countdown: number) => `🔥 НАЧИНАЕТСЯ МАССОВАЯ ТОРГОВАЯ СЕССИЯ!

// ⏰ Торговля начнётся через: ${Math.floor(countdown / 60)} минут

// Это ваш шанс торговать вместе со ВСЕМИ премиум пользователями!

// 💡 Что делать сейчас:
// 1️⃣ Убедитесь что у вас есть депозит
// 2️⃣ Откройте платформу брокера
// 3️⃣ Ждите сигналов

// 🎁 Специальный бонус во время массовой сессии:
// - Более частые сигналы
// - Повышенная точность
// - Энергия группы в реальном времени

// Будьте готовы! 🚀`,
      
//       sessionStart: `🚀 ТОРГОВАЯ СЕССИЯ НАЧАЛАСЬ!

// Сигналы будут приходить каждые 3-10 минут.
// Сохраняйте фокус и следуйте стратегии!

// Удачи! 💰`
//     },

//     account: {
//       info: (data: any) => `👤 ВАШ АККАУНТ

// 📊 Статистика:
// - Уровень: ${data.level}
// - Баллы: ${data.points}
// - Win Rate: ${data.winRate}%
// - Общая прибыль: $${data.totalProfit}

// 💎 VIP Статус: ${data.vipStatus}
// - Депозит: $${data.depositAmount}
// - Точность сигналов: ${data.signalsAccuracy}%

// 📚 Прогресс курса:
// - Завершено: ${data.lessonsCompleted}/21 уроков

// 🎁 Рефералы:
// - Всего: ${data.totalReferrals}
// - Заработано: $${data.referralEarnings}

// Хотите улучшить аккаунт?`,
      
//       referral: (code: string) => `🎁 ПРИГЛАШАЙ ДРУЗЕЙ И ЗАРАБАТЫВАЙ

// Ваша реферальная ссылка:
// ${code}

// 💰 Награды:
// - Друг регистрируется: +10 баллов
// - Друг вносит $50+: $25 награда

// Делитесь с друзьями и получайте пассивный доход!`
//     },

//     help: `❓ ПОМОЩЬ И ПОДДЕРЖКА

// 📚 Краткое руководство:
// /start - Перезапустить бота
// /account - Посмотреть аккаунт
// /signals - Получить AI сигналы
// /course - Бесплатный курс торговли

// 💬 Нужна помощь?
// Свяжитесь с поддержкой 24/7:
// @WaveTradingSupport

// 📖 FAQ: https://wavetrading.com/faq
// 📱 Платформа: https://wavetrading.com`,

//     admin: {
//       panel: `🛡️ ПАНЕЛЬ АДМИНИСТРАТОРА

// Доступные команды:
// /broadcast <сообщение> - Отправить всем пользователям
// /stats - Статистика пользователей
// /session_start - Начать массовую сессию
// /session_stop - Остановить сессию
// /signal <пара> <направление> <длительность> - Отправить ручной сигнал

// Текущая статистика будет показана ниже:`,
      
//       stats: (data: any) => `📊 СТАТИСТИКА БОТА

// 👥 Пользователи:
// - Всего: ${data.totalUsers}
// - Зарегистрированы на платформе: ${data.registered}
// - С депозитами: ${data.deposited}
// - Активны сегодня: ${data.activeToday}

// 💰 Доход:
// - Всего депозитов: $${data.totalDeposits}
// - Средний депозит: $${data.avgDeposit}

// 📈 Вовлечённость:
// - Прошли опрос: ${data.completedSurvey}
// - Начали торговать: ${data.startedTrading}`,
      
//       sessionStarted: `✅ Массовая торговая сессия запущена!

// Сообщение с обратным отсчётом отправлено всем пользователям.
// Сессия начнётся через 20 минут.`,
      
//       sessionStopped: `⏹️ Торговая сессия остановлена.

// Финальная статистика отправлена участникам.`,
      
//       broadcastSent: (count: number) => `✅ Рассылка отправлена ${count} пользователям.`,
      
//       signalSent: `✅ Сигнал отправлен всем активным пользователям.`,
      
//       unauthorized: `❌ Доступ запрещён. Только для администраторов.`
//     }
//   }

//   // ES, DE, UK, FR - добавьте аналогично если нужно
// }

// export function getMessage(lang: string, path: string, ...args: any[]): string {
//   const keys = path.split('.')
//   let message: any = messages[lang as keyof typeof messages] || messages.en
  
//   for (const key of keys) {
//     message = message[key]
//     if (!message) {
//       // Fallback to English
//       message = messages.en
//       for (const k of keys) {
//         message = message[k]
//       }
//       break
//     }
//   }
  
//   if (typeof message === 'function') {
//     return message(...args)
//   }
  
//   return message || path
// }

// ===================================================================
// WaveTrading Bot - Messages для всех 6 языков
// Языки: English, Russian, Spanish, German, Ukrainian, French
// ===================================================================

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

I'll prepare optimal strategy for you! Let's continue...`,

      customBudgetPrompt: `💰 Please enter your custom budget amount in USD (e.g., 75)

Minimum: $10
Recommended: $50`,
      
      customBudgetInvalid: `❌ Invalid amount. Please enter a number from 10 and above (e.g., 75)`,
      
      customBudgetTooLarge: `❌ Amount too large. Maximum $10,000. Please try again.`,
      
      customBudgetConfirm: (amount: number) => `✅ Great! Your budget: $${amount}

Continuing survey...`
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

      registrationInfo: `🎯 Excellent! Now you need to register on our partner platform.

💼 Our partner - Pocket Option
✅ Up to 100% deposit bonus
✅ Minimum deposit $10
✅ Withdrawal in 24 hours
✅ Licensed broker

📝 Click the button below to register:`,
      
      registerButton: '🚀 Register Now',

      registerPrompt: (url: string) => `🚀 Great! Register here:

${url}

✅ Get 100% bonus
✅ Minimum deposit $10

After registration, come back and enter your Broker ID.`,

      idPrompt: `✅ Registered? Great!

📋 Now enter your Broker ID

Where to find ID:
1️⃣ Open broker app
2️⃣ Go to profile settings
3️⃣ Find "User ID" or "Broker ID"
4️⃣ Copy and send me (4-12 digits)

Example: 12345678`,
      
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
/support - Contact support

💬 Need help?
Contact our support team 24/7:
@ysly2

📖 FAQ: https://wavetrading.coinmasterlend.site/faq
📱 Platform: https://wavetrading.coinmasterlend.site`,

support: `👨‍💼 OFFICIAL SUPPORT

Our official support manager:
@ysly2

⚠️ This is the ONLY official manager who can help you with all questions and problems you may encounter.

🔒 Never share your personal information with anyone else!

Feel free to contact for:
✅ Account issues
✅ Deposit/withdrawal questions  
✅ Technical problems
✅ General inquiries

We're here to help! 💬`,
    
    freeCourse: `📚 FREE PROFESSIONAL TRADING COURSE

Access our complete 21-lesson course:
https://wavetrading.coinmasterlend.site/course

📖 What you'll learn:
- Forex basics & fundamentals
- Technical analysis & indicators
- Risk management strategies
- Trading psychology
- How to use AI signals effectively

🎓 Start learning now and become a professional trader!`,

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

Я подготовлю оптимальную стратегию для вас! Продолжим...`,

      customBudgetPrompt: `💰 Введите вашу сумму депозита в долларах (например: 75)

Минимум: $10
Рекомендуем: $50`,
      
      customBudgetInvalid: `❌ Неверная сумма. Пожалуйста, введите число от 10 и выше (например: 75)`,
      
      customBudgetTooLarge: `❌ Сумма слишком большая. Максимум $10,000. Попробуйте снова.`,
      
      customBudgetConfirm: (amount: number) => `✅ Отлично! Ваш бюджет: $${amount}

Продолжаем опрос...`
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

      registrationInfo: `🎯 Отлично! Теперь нужно зарегистрироваться на платформе партнера.

💼 Наш партнер - Pocket Option
✅ Бонус до 100% на депозит
✅ Минимальный депозит $10
✅ Вывод средств за 24 часа
✅ Лицензированный брокер

📝 Нажмите кнопку ниже для регистрации:`,
      
      registerButton: '🚀 Зарегистрироваться',

      registerPrompt: (url: string) => `🚀 Отлично! Регистрируйтесь по ссылке:

${url}

✅ Получите 100% бонус
✅ Минимальный депозит $10

После регистрации вернитесь сюда и введите ваш Broker ID.`,

      idPrompt: `✅ Зарегистрировались? Отлично!

📋 Теперь введите ваш Broker ID

Где найти ID:
1️⃣ Откройте приложение брокера
2️⃣ Зайдите в настройки профиля
3️⃣ Найдите "User ID" или "Broker ID"
4️⃣ Скопируйте и отправьте мне (4-12 цифр)

Пример: 12345678`,
      
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
Не упустите дедлайн!

Готовы к депозиту?`,
      
      depositReminder: `💰 Пополните счет для активации:

✅ Бонус 100% (удвойте деньги!)
✅ Премиум AI сигналы
✅ Личный менеджер
✅ VIP аналитика

Минимум: $10
Рекомендуем: $50 (оптимально для цели $500/мес)

[Пополнить] кнопка перенаправит к брокеру.`,
      
      depositConfirm: `🎉 Депозит обнаружен!

Ваш аккаунт полностью активирован!

🎁 Разблокированные бонусы:
- Бонус 100% на депозит
- AI сигналы активированы
- VIP поддержка включена

Готовы начать торговлю?`
    },

    signals: {
      intro: `📊 AI ТОРГОВЫЕ СИГНАЛЫ

Наш AI анализирует рынок 24/7 и отправляет сигналы с:
- Точностью 94-98%
- Точкой входа и длительностью
- Управлением рисками
- Обновлениями в реальном времени

Выберите режим:`,
      
      personal: `✅ Персональный режим торговли активирован!

Вы будете получать сигналы каждые 3-10 минут.
Каждый сигнал включает полный анализ.

🎯 Готовы начать?`,
      
      signal: (data: any) => `🎯 СИГНАЛ #${data.id} | ${data.time}

📊 Пара: ${data.pair}
${data.direction === 'LONG' ? '🔼' : '🔽'} Направление: ${data.direction}
⏰ Длительность: ${data.duration} минут
💰 Рекомендуемая ставка: 5% от баланса

📈 AI Анализ:
${data.reason}

🎯 Уверенность AI: ${data.confidence}%
📊 Похожие сигналы сегодня: ${data.todaySuccessRate}

Откройте сделку сейчас у брокера!`,
      
      result: (data: any) => `${data.result === 'win' ? '✅' : '❌'} СИГНАЛ #${data.id} | РЕЗУЛЬТАТ

📊 ${data.pair} | ${data.direction} ${data.duration}мин
💰 Результат: ${data.result === 'win' ? `+$${data.profit} прибыль` : `-$${data.loss} убыток`}

Статистика за сегодня:
✅ Успешных: ${data.wins}
❌ Убытков: ${data.losses}
📊 Винрейт: ${data.winRate}%
💰 Прибыль: ${data.totalProfit >= 0 ? '+' : ''}$${data.totalProfit}`,
      
      massSession: (countdown: number) => `🔥 НАЧИНАЕТСЯ МАССОВАЯ ТОРГОВАЯ СЕССИЯ!

⏰ Торговля начнется через: ${Math.floor(countdown / 60)} минут

Это ваш шанс торговать со ВСЕМИ премиум пользователями одновременно!

💡 Что делать сейчас:
1️⃣ Убедитесь что есть депозит
2️⃣ Откройте платформу брокера
3️⃣ Ждите сигналы

🎁 Специальный бонус во время массовой сессии:
- Более частые сигналы
- Высокая точность
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
- Очки: ${data.points}
- Винрейт: ${data.winRate}%
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
      
      referral: (code: string) => `🎁 ПРИГЛАШАЙТЕ ДРУЗЕЙ И ЗАРАБАТЫВАЙТЕ

Ваша реферальная ссылка:
${code}

💰 Награды:
- Друг регистрируется: +10 очков
- Друг вносит депозит $50+: $25 награда

Делитесь с друзьями и получайте пассивный доход!`
    },

    help: `❓ ПОМОЩЬ И ПОДДЕРЖКА

📚 Быстрая инструкция:
/start - Перезапустить бота
/account - Ваш аккаунт
/signals - Получить AI сигналы
/course - Бесплатный курс
/support - Связаться с поддержкой

💬 Нужна помощь?
Свяжитесь с нашей поддержкой 24/7:
@ysly2

📖 FAQ: https://wavetrading.coinmasterlend.site/faq
📱 Платформа: https://wavetrading.coinmasterlend.site/`,

support: `👨‍💼 ОФИЦИАЛЬНАЯ ПОДДЕРЖКА

Наш официальный менеджер поддержки:
@ysly2

⚠️ Это ЕДИНСТВЕННЫЙ официальный менеджер, который поможет вам со всеми вопросами и проблемами, с которыми вы можете столкнуться.

🔒 Никогда не делитесь личной информацией с кем-либо еще!

Обращайтесь по вопросам:
✅ Проблемы с аккаунтом
✅ Вопросы депозита/вывода
✅ Технические проблемы
✅ Общие вопросы

Мы здесь, чтобы помочь! 💬`,
    
    freeCourse: `📚 БЕСПЛАТНЫЙ ПРОФЕССИОНАЛЬНЫЙ ТОРГОВЫЙ КУРС

Получите доступ к нашему полному курсу из 21 урока:
https://wavetrading.coinmasterlend.site/course

📖 Что вы изучите:
- Основы и фундаментал Forex
- Технический анализ и индикаторы
- Стратегии управления рисками
- Торговая психология
- Как эффективно использовать AI сигналы

🎓 Начните обучение сейчас и станьте профессиональным трейдером!`,

    admin: {
      panel: `🛡️ АДМИН ПАНЕЛЬ

Доступные команды:
/broadcast <сообщение> - Отправить всем
/stats - Статистика пользователей
/session_start - Начать массовую сессию
/session_stop - Остановить сессию
/signal <пара> <направление> <длительность> - Ручной сигнал

Текущая статистика:`,
      
      stats: (data: any) => `📊 СТАТИСТИКА БОТА

👥 Пользователи:
- Всего: ${data.totalUsers}
- Зарегистрированы на платформе: ${data.registered}
- С депозитами: ${data.deposited}
- Активны сегодня: ${data.activeToday}

💰 Доход:
- Всего депозитов: $${data.totalDeposits}
- Средний депозит: $${data.avgDeposit}

📈 Вовлеченность:
- Завершили опрос: ${data.completedSurvey}
- Начали торговлю: ${data.startedTrading}`,
      
      sessionStarted: `✅ Массовая торговая сессия начата!

Сообщение с обратным отсчётом отправлено всем пользователям.
Сессия начнётся через 20 минут.`,
      
      sessionStopped: `⏹️ Торговая сессия остановлена.

Финальная статистика отправлена участникам.`,
      
      broadcastSent: (count: number) => `✅ Рассылка отправлена ${count} пользователям.`,
      
      signalSent: `✅ Сигнал отправлен всем активным пользователям.`,
      
      unauthorized: `❌ Доступ запрещён. Только для администраторов.`
    }
  },

  es: {
    welcome: `🌊 ¡Bienvenido a WaveTrading AI!

Tu asistente personal de IA para trading rentable en Forex.

🎯 Lo que ofrecemos:
- Curso profesional gratuito
- Señales de IA con 94-98% de precisión
- Soporte 24/7
- Hasta 100% de bono en depósito

Elige tu idioma para continuar:`,
    
    registration: {
      start: `📝 Registro

¡Vamos a registrarte en nuestra plataforma para desbloquear todas las funciones!

Haz clic en el botón de abajo:`,
      
      button: '🚀 Registrarse en la Plataforma',
      
      success: `✅ ¡Registro exitoso!

¡Bienvenido a WaveTrading! Ahora conozcámonos mejor con una breve encuesta.`,
      
      alreadyRegistered: `✅ ¡Ya estás registrado!

Tu cuenta está activa. Usa el menú para acceder a las funciones.`
    },

    survey: {
      intro: `📋 Encuesta Rápida (1/7)

¡Personalicemos tu experiencia de trading!

¿Cuál es tu experiencia en trading?`,
      
      question2: `📋 Encuesta (2/7)

¿Cuál es tu objetivo principal?`,
      
      question3: `📋 Encuesta (3/7)

¿Cuánto tiempo puedes dedicar diariamente?`,
      
      question4: `📋 Encuesta (4/7)

¿Cuál es tu presupuesto inicial?`,
      
      question5: `📋 Encuesta (5/7)

¿Cuál es tu objetivo de ingresos mensuales?`,
      
      question6: `📋 Encuesta (6/7)

¿Qué es más importante para ti?`,
      
      question7: `📋 Encuesta (7/7)

¿Cuándo quieres ver tu primera ganancia?`,
      
      complete: (data: any) => `✅ ¡Perfecto! ¡Encuesta completada!

📊 Tu Perfil:
- Experiencia: ${data.experience}
- Objetivo: ${data.goal}
- Presupuesto: $${data.budget}
- Meta mensual: $${data.monthlyGoal}

¡Prepararé la estrategia óptima para ti! Continuemos...`,

      customBudgetPrompt: `💰 Por favor ingresa tu presupuesto personalizado en USD (ej: 75)

Mínimo: $10
Recomendado: $50`,
      
      customBudgetInvalid: `❌ Monto inválido. Por favor ingresa un número desde 10 en adelante (ej: 75)`,
      
      customBudgetTooLarge: `❌ Monto demasiado grande. Máximo $10,000. Por favor intenta de nuevo.`,
      
      customBudgetConfirm: (amount: number) => `✅ ¡Perfecto! Tu presupuesto: $${amount}

Continuando encuesta...`
    },

    broker: {
      intro: (name: string, goal: number, budget: number) => `¡Excelente, ${name}! 

Veo que quieres ganar $${goal}/mes con un presupuesto de $${budget}. ¡Esto es totalmente alcanzable! 📈

Nuestra IA genera señales, pero necesitas una cuenta de broker para trading real.
Trabajamos con Pocket Option - ¡ofrecen hasta 100% de bono!

✅ Hasta 100% de bono en depósito
✅ Depósito mínimo $10 (recomendamos $50)
✅ Retiro en 24 horas
✅ Gerente personal

Regístrate ahora:`,

      registrationInfo: `🎯 ¡Excelente! Ahora necesitas registrarte en nuestra plataforma asociada.

💼 Nuestro socio - Pocket Option
✅ Hasta 100% de bono en depósito
✅ Depósito mínimo $10
✅ Retiro en 24 horas
✅ Corredor con licencia

📝 Haz clic en el botón de abajo para registrarte:`,
      
      registerButton: '🚀 Registrarse Ahora',

      registerPrompt: (url: string) => `🚀 ¡Excelente! Regístrate aquí:

${url}

✅ Obten 100% de bono
✅ Depósito mínimo $10

Después del registro, regresa aquí e ingresa tu Broker ID.`,

      idPrompt: `✅ ¿Registrado? ¡Perfecto!

📋 Ahora ingresa tu Broker ID

Dónde encontrar el ID:
1️⃣ Abre la aplicación del broker
2️⃣ Ve a configuración del perfil
3️⃣ Encuentra "User ID" o "Broker ID"
4️⃣ Copia y envíame (4-12 dígitos)

Ejemplo: 12345678`,
      
      idRequest: `¡Genial! Por favor ingresa tu Broker ID.

Puedes encontrarlo en la configuración de tu cuenta del broker.

Envíame el ID (4-12 dígitos):`,
      
      invalidId: `❌ Formato de Broker ID inválido.

El ID debe tener 4-12 dígitos.

Por favor intenta de nuevo:`,
      
      success: (brokerId: string) => `🎉 ¡Felicidades! ID #${brokerId} confirmado!

Pasos restantes:
1️⃣ Depositar saldo (mín. $10, recomendado $50)
2️⃣ Obtener 100% de bono automáticamente
3️⃣ Comenzar a recibir señales de IA

⏰ ¡Bono del 100% disponible solo las primeras 24 horas!
¡No pierdas la fecha límite!

¿Listo para depositar?`,
      
      depositReminder: `💰 Haz tu primer depósito para activar:

✅ Bono del 100% (¡duplica tu dinero!)
✅ Señales de IA premium
✅ Soporte de gerente personal
✅ Acceso a análisis VIP

Mínimo: $10
Recomendado: $50 (óptimo para objetivo de $500/mes)

El botón [Depositar Ahora] te redirigirá al broker.`,
      
      depositConfirm: `🎉 ¡Depósito detectado!

¡Tu cuenta está ahora completamente activada!

🎁 Bonos desbloqueados:
- Bono del 100% en depósito
- Señales de IA activadas
- Soporte VIP habilitado

¿Listo para comenzar a operar?`
    },

    signals: {
      intro: `📊 SEÑALES DE TRADING DE IA

Nuestra IA analiza el mercado 24/7 y envía señales con:
- 94-98% de precisión
- Punto de entrada y duración
- Gestión de riesgos
- Actualizaciones en tiempo real

Elige modo:`,
      
      personal: `✅ ¡Modo de trading personal activado!

Recibirás señales cada 3-10 minutos.
Cada señal incluye análisis completo.

🎯 ¿Listo para comenzar?`,
      
      signal: (data: any) => `🎯 SEÑAL #${data.id} | ${data.time}

📊 Par: ${data.pair}
${data.direction === 'LONG' ? '🔼' : '🔽'} Dirección: ${data.direction}
⏰ Duración: ${data.duration} minutos
💰 Apuesta recomendada: 5% del saldo

📈 Análisis de IA:
${data.reason}

🎯 Confianza de IA: ${data.confidence}%
📊 Señales similares hoy: ${data.todaySuccessRate}

¡Abre la operación ahora en tu broker!`,
      
      result: (data: any) => `${data.result === 'win' ? '✅' : '❌'} SEÑAL #${data.id} | RESULTADO

📊 ${data.pair} | ${data.direction} ${data.duration}min
💰 Resultado: ${data.result === 'win' ? `+$${data.profit} ganancia` : `-$${data.loss} pérdida`}

Estadísticas de hoy:
✅ Exitosas: ${data.wins}
❌ Pérdidas: ${data.losses}
📊 Tasa de éxito: ${data.winRate}%
💰 Ganancia: ${data.totalProfit >= 0 ? '+' : ''}$${data.totalProfit}`,
      
      massSession: (countdown: number) => `🔥 ¡SESIÓN DE TRADING MASIVA COMENZANDO!

⏰ El trading comienza en: ${Math.floor(countdown / 60)} minutos

¡Esta es tu oportunidad de operar con TODOS los usuarios premium simultáneamente!

💡 Qué hacer ahora:
1️⃣ Asegúrate de tener depósito
2️⃣ Abre tu plataforma de broker
3️⃣ Espera las señales

🎁 Bono especial durante la sesión masiva:
- Señales más frecuentes
- Mayor precisión
- Energía del grupo en tiempo real

¡Prepárate! 🚀`,
      
      sessionStart: `🚀 ¡SESIÓN DE TRADING INICIADA!

Las señales llegarán cada 3-10 minutos.
¡Mantén el enfoque y sigue la estrategia!

¡Buena suerte! 💰`
    },

    account: {
      info: (data: any) => `👤 TU CUENTA

📊 Estadísticas:
- Nivel: ${data.level}
- Puntos: ${data.points}
- Tasa de éxito: ${data.winRate}%
- Ganancia total: $${data.totalProfit}

💎 Estado VIP: ${data.vipStatus}
- Depósito: $${data.depositAmount}
- Precisión de señales: ${data.signalsAccuracy}%

📚 Progreso del curso:
- Completado: ${data.lessonsCompleted}/21 lecciones

🎁 Referencias:
- Total: ${data.totalReferrals}
- Ganancias: $${data.referralEarnings}

¿Quieres mejorar tu cuenta?`,
      
      referral: (code: string) => `🎁 INVITA AMIGOS Y GANA

Tu enlace de referencia:
${code}

💰 Recompensas:
- Amigo se registra: +10 puntos
- Amigo deposita $50+: $25 de recompensa

¡Comparte con amigos y gana ingresos pasivos!`
    },

    help: `❓ AYUDA Y SOPORTE

📚 Guía rápida:
/start - Reiniciar bot
/account - Ver tu cuenta
/signals - Obtener señales de IA
/course - Curso gratuito
/support - Contactar con el servicio de asistencia técnica

💬 ¿Necesitas ayuda?
Contacta a nuestro equipo de soporte 24/7:
@ysly2

📖 FAQ: https://wavetrading.coinmasterlend.site/faq
📱 Plataforma: https://wavetrading.coinmasterlend.site/`,

support: `👨‍💼 SOPORTE OFICIAL

Nuestro gerente de soporte oficial:
@ysly2

⚠️ Este es el ÚNICO gerente oficial que puede ayudarte con todas las preguntas y problemas que puedas encontrar.

🔒 ¡Nunca compartas tu información personal con nadie más!

Contáctanos para:
✅ Problemas de cuenta
✅ Preguntas sobre depósitos/retiros
✅ Problemas técnicos
✅ Consultas generales

¡Estamos aquí para ayudar! 💬`,
    
    freeCourse: `📚 CURSO PROFESIONAL DE TRADING GRATUITO

Accede a nuestro curso completo de 21 lecciones:
https://wavetrading.coinmasterlend.site/course

📖 Lo que aprenderás:
- Fundamentos y básicos de Forex
- Análisis técnico e indicadores
- Estrategias de gestión de riesgos
- Psicología del trading
- Cómo usar señales de IA efectivamente

🎓 ¡Comienza a aprender ahora y conviértete en un trader profesional!`,

    admin: {
      panel: `🛡️ PANEL DE ADMINISTRACIÓN

Comandos disponibles:
/broadcast <mensaje> - Enviar a todos los usuarios
/stats - Estadísticas de usuarios
/session_start - Iniciar sesión masiva
/session_stop - Detener sesión
/signal <par> <dirección> <duración> - Enviar señal manual

Las estadísticas actuales se mostrarán a continuación:`,
      
      stats: (data: any) => `📊 ESTADÍSTICAS DEL BOT

👥 Usuarios:
- Total: ${data.totalUsers}
- Registrados en plataforma: ${data.registered}
- Con depósitos: ${data.deposited}
- Activos hoy: ${data.activeToday}

💰 Ingresos:
- Depósitos totales: $${data.totalDeposits}
- Depósito promedio: $${data.avgDeposit}

📈 Compromiso:
- Completaron encuesta: ${data.completedSurvey}
- Comenzaron a operar: ${data.startedTrading}`,
      
      sessionStarted: `✅ ¡Sesión de trading masiva iniciada!

Mensaje de cuenta regresiva enviado a todos los usuarios.
La sesión comenzará en 20 minutos.`,
      
      sessionStopped: `⏹️ Sesión de trading detenida.

Estadísticas finales enviadas a los participantes.`,
      
      broadcastSent: (count: number) => `✅ Transmisión enviada a ${count} usuarios.`,
      
      signalSent: `✅ Señal enviada a todos los usuarios activos.`,
      
      unauthorized: `❌ Acceso denegado. Solo administradores.`
    }
  },

  de: {
    welcome: `🌊 Willkommen bei WaveTrading AI!

Dein persönlicher KI-Assistent für profitables Forex-Trading.

🎯 Was wir bieten:
- Kostenloser professioneller Kurs
- KI-Signale mit 94-98% Genauigkeit
- 24/7 Support
- Bis zu 100% Bonus auf Einzahlung

Wähle deine Sprache um fortzufahren:`,
    
    registration: {
      start: `📝 Registrierung

Lass uns dich auf unserer Plattform registrieren, um alle Funktionen freizuschalten!

Klicke auf den Button unten:`,
      
      button: '🚀 Auf Plattform Registrieren',
      
      success: `✅ Registrierung erfolgreich!

Willkommen bei WaveTrading! Lass uns dich jetzt mit einer kurzen Umfrage besser kennenlernen.`,
      
      alreadyRegistered: `✅ Du bist bereits registriert!

Dein Konto ist aktiv. Nutze das Menü um auf Funktionen zuzugreifen.`
    },

    survey: {
      intro: `📋 Kurze Umfrage (1/7)

Lass uns deine Trading-Erfahrung personalisieren!

Was ist deine Trading-Erfahrung?`,
      
      question2: `📋 Umfrage (2/7)

Was ist dein Hauptziel?`,
      
      question3: `📋 Umfrage (3/7)

Wie viel Zeit kannst du täglich aufwenden?`,
      
      question4: `📋 Umfrage (4/7)

Was ist dein Startbudget?`,
      
      question5: `📋 Umfrage (5/7)

Was ist dein monatliches Einkommensziel?`,
      
      question6: `📋 Umfrage (6/7)

Was ist dir am wichtigsten?`,
      
      question7: `📋 Umfrage (7/7)

Wann möchtest du den ersten Gewinn sehen?`,
      
      complete: (data: any) => `✅ Perfekt! Umfrage abgeschlossen!

📊 Dein Profil:
- Erfahrung: ${data.experience}
- Ziel: ${data.goal}
- Budget: $${data.budget}
- Monatsziel: $${data.monthlyGoal}

Ich bereite die optimale Strategie für dich vor! Lass uns fortfahren...`,

      customBudgetPrompt: `💰 Bitte gib deinen benutzerdefinierten Budgetbetrag in USD ein (z.B. 75)

Minimum: $10
Empfohlen: $50`,
      
      customBudgetInvalid: `❌ Ungültiger Betrag. Bitte gib eine Zahl ab 10 ein (z.B. 75)`,
      
      customBudgetTooLarge: `❌ Betrag zu groß. Maximum $10.000. Bitte versuche es erneut.`,
      
      customBudgetConfirm: (amount: number) => `✅ Großartig! Dein Budget: $${amount}

Umfrage wird fortgesetzt...`
    },

    broker: {
      intro: (name: string, goal: number, budget: number) => `Ausgezeichnet, ${name}! 

Ich sehe, du möchtest $${goal}/Monat mit einem Budget von $${budget} verdienen. Das ist absolut erreichbar! 📈

Unsere KI generiert Signale, aber du benötigst ein Broker-Konto für echtes Trading.
Wir arbeiten mit Pocket Option - sie bieten bis zu 100% Bonus!

✅ Bis zu 100% Einzahlungsbonus
✅ Mindesteinzahlung $10 (wir empfehlen $50)
✅ Auszahlung in 24 Stunden
✅ Persönlicher Manager

Jetzt registrieren:`,

      registrationInfo: `🎯 Ausgezeichnet! Jetzt musst du dich auf unserer Partnerplattform registrieren.

💼 Unser Partner - Pocket Option
✅ Bis zu 100% Einzahlungsbonus
✅ Mindesteinzahlung $10
✅ Auszahlung in 24 Stunden
✅ Lizenzierter Broker

📝 Klicke auf die Schaltfläche unten, um dich zu registrieren:`,
      
      registerButton: '🚀 Jetzt Registrieren',

      registerPrompt: (url: string) => `🚀 Großartig! Registriere dich hier:

${url}

✅ Erhalte 100% Bonus
✅ Mindesteinzahlung $10

Nach der Registrierung komme zurück und gib deine Broker-ID ein.`,

      idPrompt: `✅ Registriert? Großartig!

📋 Gib jetzt deine Broker-ID ein

Wo finde ich die ID:
1️⃣ Öffne die Broker-App
2️⃣ Gehe zu den Profileinstellungen
3️⃣ Finde "User ID" oder "Broker ID"
4️⃣ Kopiere und sende mir (4-12 Ziffern)

Beispiel: 12345678`,
      
      idRequest: `Großartig! Bitte gib deine Broker-ID ein.

Du findest sie in deinen Broker-Kontoeinstellungen.

Sende mir die ID (4-12 Ziffern):`,
      
      invalidId: `❌ Ungültiges Broker-ID-Format.

ID muss 4-12 Ziffern haben.

Bitte versuche es erneut:`,
      
      success: (brokerId: string) => `🎉 Glückwunsch! ID #${brokerId} bestätigt!

Verbleibende Schritte:
1️⃣ Guthaben einzahlen (min. $10, empfohlen $50)
2️⃣ 100% Bonus automatisch erhalten
3️⃣ KI-Signale empfangen beginnen

⏰ 100% Bonus nur die ersten 24 Stunden verfügbar!
Verpasse nicht die Frist!

Bereit zum Einzahlen?`,
      
      depositReminder: `💰 Tätige deine erste Einzahlung um zu aktivieren:

✅ 100% Bonus (verdopple dein Geld!)
✅ Premium KI-Signale
✅ Persönlicher Manager-Support
✅ VIP-Analyse-Zugang

Minimum: $10
Empfohlen: $50 (optimal für $500/Monat Ziel)

[Jetzt Einzahlen] Button leitet zum Broker weiter.`,
      
      depositConfirm: `🎉 Einzahlung erkannt!

Dein Konto ist jetzt vollständig aktiviert!

🎁 Freigeschaltete Boni:
- 100% Einzahlungsbonus
- KI-Signale aktiviert
- VIP-Support aktiviert

Bereit zum Trading?`
    },

    signals: {
      intro: `📊 KI-TRADING-SIGNALE

Unsere KI analysiert den Markt 24/7 und sendet Signale mit:
- 94-98% Genauigkeit
- Einstiegspunkt & Dauer
- Risikomanagement
- Echtzeit-Updates

Wähle Modus:`,
      
      personal: `✅ Persönlicher Trading-Modus aktiviert!

Du erhältst Signale alle 3-10 Minuten.
Jedes Signal enthält vollständige Analyse.

🎯 Bereit zu starten?`,
      
      signal: (data: any) => `🎯 SIGNAL #${data.id} | ${data.time}

📊 Paar: ${data.pair}
${data.direction === 'LONG' ? '🔼' : '🔽'} Richtung: ${data.direction}
⏰ Dauer: ${data.duration} Minuten
💰 Empfohlener Einsatz: 5% des Guthabens

📈 KI-Analyse:
${data.reason}

🎯 KI-Vertrauen: ${data.confidence}%
📊 Ähnliche Signale heute: ${data.todaySuccessRate}

Eröffne jetzt Trade bei deinem Broker!`,
      
      result: (data: any) => `${data.result === 'win' ? '✅' : '❌'} SIGNAL #${data.id} | ERGEBNIS

📊 ${data.pair} | ${data.direction} ${data.duration}min
💰 Ergebnis: ${data.result === 'win' ? `+$${data.profit} Gewinn` : `-$${data.loss} Verlust`}

Heutige Statistiken:
✅ Erfolgreich: ${data.wins}
❌ Verluste: ${data.losses}
📊 Gewinnrate: ${data.winRate}%
💰 Gewinn: ${data.totalProfit >= 0 ? '+' : ''}$${data.totalProfit}`,
      
      massSession: (countdown: number) => `🔥 MASSEN-TRADING-SESSION STARTET!

⏰ Trading startet in: ${Math.floor(countdown / 60)} Minuten

Dies ist deine Chance, mit ALLEN Premium-Benutzern gleichzeitig zu traden!

💡 Was jetzt zu tun ist:
1️⃣ Stelle sicher, dass du Guthaben hast
2️⃣ Öffne deine Broker-Plattform
3️⃣ Warte auf Signale

🎁 Spezialbonus während der Massensession:
- Häufigere Signale
- Höhere Genauigkeit
- Echtzeit-Gruppenenergie

Sei bereit! 🚀`,
      
      sessionStart: `🚀 TRADING-SESSION GESTARTET!

Signale kommen alle 3-10 Minuten.
Bleib fokussiert und folge der Strategie!

Viel Glück! 💰`
    },

    account: {
      info: (data: any) => `👤 DEIN KONTO

📊 Statistiken:
- Level: ${data.level}
- Punkte: ${data.points}
- Gewinnrate: ${data.winRate}%
- Gesamtgewinn: $${data.totalProfit}

💎 VIP-Status: ${data.vipStatus}
- Einzahlung: $${data.depositAmount}
- Signal-Genauigkeit: ${data.signalsAccuracy}%

📚 Kurs-Fortschritt:
- Abgeschlossen: ${data.lessonsCompleted}/21 Lektionen

🎁 Empfehlungen:
- Gesamt: ${data.totalReferrals}
- Verdienst: $${data.referralEarnings}

Möchtest du dein Konto upgraden?`,
      
      referral: (code: string) => `🎁 FREUNDE EINLADEN & VERDIENEN

Dein Empfehlungslink:
${code}

💰 Belohnungen:
- Freund registriert sich: +10 Punkte
- Freund zahlt $50+ ein: $25 Belohnung

Teile mit Freunden und verdiene passives Einkommen!`
    },

    help: `❓ HILFE & SUPPORT

📚 Schnellanleitung:
/start - Bot neu starten
/account - Dein Konto ansehen
/signals - KI-Signale erhalten
/course - Kostenloser Kurs
/support – Kontakt zum Support

💬 Brauchst du Hilfe?
Kontaktiere unser Support-Team 24/7:
@ysly2

📖 FAQ: https://wavetrading.coinmasterlend.site/faq
📱 Plattform: https://wavetrading.coinmasterlend.site/`,

support: `👨‍💼 OFFIZIELLER SUPPORT

Unser offizieller Support-Manager:
@ysly2

⚠️ Dies ist der EINZIGE offizielle Manager, der Ihnen bei allen Fragen und Problemen helfen kann.

🔒 Teilen Sie niemals Ihre persönlichen Informationen mit jemand anderem!

Kontaktieren Sie uns für:
✅ Kontoprobleme
✅ Einzahlungs-/Auszahlungsfragen
✅ Technische Probleme
✅ Allgemeine Anfragen

Wir sind hier um zu helfen! 💬`,
    
    freeCourse: `📚 KOSTENLOSER PROFESSIONELLER TRADING-KURS

Zugriff auf unseren vollständigen Kurs mit 21 Lektionen:
https://wavetrading.coinmasterlend.site/course

📖 Was Sie lernen werden:
- Forex-Grundlagen & Fundamentals
- Technische Analyse & Indikatoren
- Risikomanagement-Strategien
- Trading-Psychologie
- Wie man KI-Signale effektiv nutzt

🎓 Beginnen Sie jetzt zu lernen und werden Sie ein professioneller Trader!`,

    admin: {
      panel: `🛡️ ADMIN-PANEL

Verfügbare Befehle:
/broadcast <nachricht> - An alle Benutzer senden
/stats - Benutzerstatistiken
/session_start - Massensession starten
/session_stop - Session stoppen
/signal <paar> <richtung> <dauer> - Manuelles Signal senden

Aktuelle Statistiken werden unten angezeigt:`,
      
      stats: (data: any) => `📊 BOT-STATISTIKEN

👥 Benutzer:
- Gesamt: ${data.totalUsers}
- Auf Plattform registriert: ${data.registered}
- Mit Einzahlungen: ${data.deposited}
- Heute aktiv: ${data.activeToday}

💰 Einnahmen:
- Gesamteinzahlungen: $${data.totalDeposits}
- Durchschnittliche Einzahlung: $${data.avgDeposit}

📈 Engagement:
- Umfrage abgeschlossen: ${data.completedSurvey}
- Trading gestartet: ${data.startedTrading}`,
      
      sessionStarted: `✅ Massen-Trading-Session gestartet!

Countdown-Nachricht an alle Benutzer gesendet.
Session beginnt in 20 Minuten.`,
      
      sessionStopped: `⏹️ Trading-Session gestoppt.

Endstatistiken an Teilnehmer gesendet.`,
      
      broadcastSent: (count: number) => `✅ Broadcast an ${count} Benutzer gesendet.`,
      
      signalSent: `✅ Signal an alle aktiven Benutzer gesendet.`,
      
      unauthorized: `❌ Zugriff verweigert. Nur für Administratoren.`
    }
  },

  uk: {
    welcome: `🌊 Ласкаво просимо до WaveTrading AI!

Ваш персональний AI-помічник для прибуткової торгівлі на Forex.

🎯 Що ми пропонуємо:
- Безкоштовний професійний курс
- AI сигнали з точністю 94-98%
- Підтримка 24/7
- До 100% бонус на депозит

Виберіть вашу мову для продовження:`,
    
    registration: {
      start: `📝 Реєстрація

Давайте зареєструємо вас на нашій платформі, щоб розблокувати всі функції!

Натисніть кнопку нижче:`,
      
      button: '🚀 Зареєструватися на Платформі',
      
      success: `✅ Реєстрація успішна!

Ласкаво просимо до WaveTrading! Тепер давайте познайомимося ближче за допомогою короткого опитування.`,
      
      alreadyRegistered: `✅ Ви вже зареєстровані!

Ваш акаунт активний. Використовуйте меню для доступу до функцій.`
    },

    survey: {
      intro: `📋 Швидке опитування (1/7)

Давайте персоналізуємо ваш торговий досвід!

Який у вас досвід торгівлі?`,
      
      question2: `📋 Опитування (2/7)

Яка ваша основна мета?`,
      
      question3: `📋 Опитування (3/7)

Скільки часу ви можете приділяти щодня?`,
      
      question4: `📋 Опитування (4/7)

Який ваш стартовий бюджет?`,
      
      question5: `📋 Опитування (5/7)

Яка ваша місячна мета по доходу?`,
      
      question6: `📋 Опитування (6/7)

Що для вас найбільш важливо?`,
      
      question7: `📋 Опитування (7/7)

Коли ви хочете побачити перший прибуток?`,
      
      complete: (data: any) => `✅ Чудово! Опитування завершено!

📊 Ваш профіль:
- Досвід: ${data.experience}
- Мета: ${data.goal}
- Бюджет: $${data.budget}
- Місячна мета: $${data.monthlyGoal}

Я підготую оптимальну стратегію для вас! Продовжимо...`,

      customBudgetPrompt: `💰 Введіть вашу суму депозиту в доларах (наприклад: 75)

Мінімум: $10
Рекомендуємо: $50`,
      
      customBudgetInvalid: `❌ Невірна сума. Будь ласка, введіть число від 10 і вище (наприклад: 75)`,
      
      customBudgetTooLarge: `❌ Сума занадто велика. Максимум $10,000. Спробуйте знову.`,
      
      customBudgetConfirm: (amount: number) => `✅ Чудово! Ваш бюджет: $${amount}

Продовжуємо опитування...`
    },

    broker: {
      intro: (name: string, goal: number, budget: number) => `Чудово, ${name}! 

Бачу, що ви хочете заробляти $${goal}/місяць з бюджетом $${budget}. Це цілком реально! 📈

Наш AI генерує сигнали, але для реальної торгівлі потрібен брокерський рахунок.
Ми працюємо з Pocket Option - вони дають до 100% бонус!

✅ Бонус до 100% на депозит
✅ Мінімальний депозит $10 (рекомендуємо $50)
✅ Виведення за 24 години
✅ Особистий менеджер

Зареєструйтеся зараз:`,

      registrationInfo: `🎯 Чудово! Тепер потрібно зареєструватися на платформі партнера.

💼 Наш партнер - Pocket Option
✅ Бонус до 100% на депозит
✅ Мінімальний депозит $10
✅ Виведення коштів за 24 години
✅ Ліцензований брокер

📝 Натисніть кнопку нижче для реєстрації:`,
      
      registerButton: '🚀 Зареєструватися',

      registerPrompt: (url: string) => `🚀 Чудово! Реєструйтесь за посиланням:

${url}

✅ Отримайте 100% бонус
✅ Мінімальний депозит $10

Після реєстрації поверніться сюди та введіть ваш Broker ID.`,

      idPrompt: `✅ Зареєструвалися? Чудово!

📋 Тепер введіть ваш Broker ID

Де знайти ID:
1️⃣ Відкрийте додаток брокера
2️⃣ Зайдіть в налаштування профілю
3️⃣ Знайдіть "User ID" або "Broker ID"
4️⃣ Скопіюйте і відправте мені (4-12 цифр)

Приклад: 12345678`,
      
      idRequest: `Чудово! Будь ласка, введіть ваш Broker ID.

Ви можете знайти його в налаштуваннях акаунта брокера.

Відправте мені ID (4-12 цифр):`,
      
      invalidId: `❌ Невірний формат Broker ID.

ID повинен містити 4-12 цифр.

Спробуйте знову:`,
      
      success: (brokerId: string) => `🎉 Вітаємо! ID #${brokerId} підтверджено!

Залишилося:
1️⃣ Поповнити баланс (мін. $10, рекомендуємо $50)
2️⃣ Отримати 100% бонус автоматично
3️⃣ Почати отримувати AI сигнали

⏰ Бонус 100% доступний тільки перші 24 години!
Не пропустіть дедлайн!

Готові до депозиту?`,
      
      depositReminder: `💰 Поповніть рахунок для активації:

✅ Бонус 100% (подвійте гроші!)
✅ Преміум AI сигнали
✅ Особистий менеджер
✅ VIP аналітика

Мінімум: $10
Рекомендуємо: $50 (оптимально для мети $500/міс)

[Поповнити] кнопка перенаправить до брокера.`,
      
      depositConfirm: `🎉 Депозит виявлено!

Ваш акаунт повністю активовано!

🎁 Розблоковані бонуси:
- Бонус 100% на депозит
- AI сигнали активовано
- VIP підтримка включена

Готові почати торгівлю?`
    },

    signals: {
      intro: `📊 AI ТОРГОВІ СИГНАЛИ

Наш AI аналізує ринок 24/7 і відправляє сигнали з:
- Точністю 94-98%
- Точкою входу та тривалістю
- Управлінням ризиками
- Оновленнями в реальному часі

Виберіть режим:`,
      
      personal: `✅ Персональний режим торгівлі активовано!

Ви будете отримувати сигнали кожні 3-10 хвилин.
Кожен сигнал включає повний аналіз.

🎯 Готові почати?`,
      
      signal: (data: any) => `🎯 СИГНАЛ #${data.id} | ${data.time}

📊 Пара: ${data.pair}
${data.direction === 'LONG' ? '🔼' : '🔽'} Напрямок: ${data.direction}
⏰ Тривалість: ${data.duration} хвилин
💰 Рекомендована ставка: 5% від балансу

📈 AI Аналіз:
${data.reason}

🎯 Впевненість AI: ${data.confidence}%
📊 Схожі сигнали сьогодні: ${data.todaySuccessRate}

Відкрийте угоду зараз у брокера!`,
      
      result: (data: any) => `${data.result === 'win' ? '✅' : '❌'} СИГНАЛ #${data.id} | РЕЗУЛЬТАТ

📊 ${data.pair} | ${data.direction} ${data.duration}хв
💰 Результат: ${data.result === 'win' ? `+$${data.profit} прибуток` : `-$${data.loss} збиток`}

Статистика за сьогодні:
✅ Успішних: ${data.wins}
❌ Збитків: ${data.losses}
📊 Винрейт: ${data.winRate}%
💰 Прибуток: ${data.totalProfit >= 0 ? '+' : ''}$${data.totalProfit}`,
      
      massSession: (countdown: number) => `🔥 ПОЧИНАЄТЬСЯ МАСОВА ТОРГОВА СЕСІЯ!

⏰ Торгівля почнеться через: ${Math.floor(countdown / 60)} хвилин

Це ваш шанс торгувати з УСІМА преміум користувачами одночасно!

💡 Що робити зараз:
1️⃣ Переконайтесь що є депозит
2️⃣ Відкрийте платформу брокера
3️⃣ Чекайте сигнали

🎁 Спеціальний бонус під час масової сесії:
- Більш часті сигнали
- Висока точність
- Енергія групи в реальному часі

Будьте готові! 🚀`,
      
      sessionStart: `🚀 ТОРГОВА СЕСІЯ ПОЧАЛАСЯ!

Сигнали будуть приходити кожні 3-10 хвилин.
Зберігайте фокус і дотримуйтесь стратегії!

Удачі! 💰`
    },

    account: {
      info: (data: any) => `👤 ВАШ АКАУНТ

📊 Статистика:
- Рівень: ${data.level}
- Очки: ${data.points}
- Винрейт: ${data.winRate}%
- Загальний прибуток: $${data.totalProfit}

💎 VIP Статус: ${data.vipStatus}
- Депозит: $${data.depositAmount}
- Точність сигналів: ${data.signalsAccuracy}%

📚 Прогрес курсу:
- Завершено: ${data.lessonsCompleted}/21 уроків

🎁 Реферали:
- Всього: ${data.totalReferrals}
- Заробіток: $${data.referralEarnings}

Хочете покращити акаунт?`,
      
      referral: (code: string) => `🎁 ЗАПРОШУЙТЕ ДРУЗІВ І ЗАРОБЛЯЙТЕ

Ваше реферальне посилання:
${code}

💰 Нагороди:
- Друг реєструється: +10 очок
- Друг вносить депозит $50+: $25 нагорода

Діліться з друзями та отримуйте пасивний дохід!`
    },

    help: `❓ ДОПОМОГА І ПІДТРИМКА

📚 Швидка інструкція:
/start - Перезапустити бота
/account - Ваш акаунт
/signals - Отримати AI сигнали
/course - Безкоштовний курс
/support - Зв'язатися з підтримкою

💬 Потрібна допомога?
Зв'яжіться з нашою підтримкою 24/7:
@ysly2

📖 FAQ: https://wavetrading.coinmasterlend.site/faq
📱 Платформа: https://wavetrading.coinmasterlend.site/`,

support: `👨‍💼 ОФІЦІЙНА ПІДТРИМКА

Наш офіційний менеджер підтримки:
@ysly2

⚠️ Це ЄДИНИЙ офіційний менеджер, який допоможе вам з усіма питаннями і проблемами, з якими ви можете зіткнутися.

🔒 Ніколи не діліться особистою інформацією з ким-небудь іще!

Звертайтесь з питань:
✅ Проблеми з акаунтом
✅ Питання депозиту/виведення
✅ Технічні проблеми
✅ Загальні питання

Ми тут, щоб допомогти! 💬`,
    
    freeCourse: `📚 БЕЗКОШТОВНИЙ ПРОФЕСІЙНИЙ ТОРГОВИЙ КУРС

Отримайте доступ до нашого повного курсу з 21 уроку:
https://wavetrading.coinmasterlend.site/course

📖 Що ви вивчите:
- Основи та фундаментал Forex
- Технічний аналіз та індикатори
- Стратегії управління ризиками
- Торгова психологія
- Як ефективно використовувати AI сигнали

🎓 Почніть навчання зараз і станьте професійним трейдером!`,

    admin: {
      panel: `🛡️ АДМІН ПАНЕЛЬ

Доступні команди:
/broadcast <повідомлення> - Відправити всім
/stats - Статистика користувачів
/session_start - Почати масову сесію
/session_stop - Зупинити сесію
/signal <пара> <напрямок> <тривалість> - Ручний сигнал

Поточна статистика:`,
      
      stats: (data: any) => `📊 СТАТИСТИКА БОТА

👥 Користувачі:
- Всього: ${data.totalUsers}
- Зареєстровані на платформі: ${data.registered}
- З депозитами: ${data.deposited}
- Активні сьогодні: ${data.activeToday}

💰 Дохід:
- Всього депозитів: $${data.totalDeposits}
- Середній депозит: $${data.avgDeposit}

📈 Залученість:
- Завершили опитування: ${data.completedSurvey}
- Почали торгівлю: ${data.startedTrading}`,
      
      sessionStarted: `✅ Масова торгова сесія почата!

Повідомлення зі зворотним відліком відправлено всім користувачам.
Сесія почнеться через 20 хвилин.`,
      
      sessionStopped: `⏹️ Торгова сесія зупинена.

Фінальна статистика відправлена учасникам.`,
      
      broadcastSent: (count: number) => `✅ Розсилка відправлена ${count} користувачам.`,
      
      signalSent: `✅ Сигнал відправлено всім активним користувачам.`,
      
      unauthorized: `❌ Доступ заборонено. Тільки для адміністраторів.`
    }
  },

  fr: {
    welcome: `🌊 Bienvenue sur WaveTrading AI!

Votre assistant personnel IA pour un trading Forex rentable.

🎯 Ce que nous offrons:
- Cours professionnel gratuit
- Signaux IA avec 94-98% de précision
- Support 24/7
- Jusqu'à 100% de bonus sur dépôt

Choisissez votre langue pour continuer:`,
    
    registration: {
      start: `📝 Inscription

Inscrivons-vous sur notre plateforme pour débloquer toutes les fonctionnalités!

Cliquez sur le bouton ci-dessous:`,
      
      button: '🚀 S\'inscrire sur la Plateforme',
      
      success: `✅ Inscription réussie!

Bienvenue sur WaveTrading! Maintenant, faisons mieux connaissance avec un court sondage.`,
      
      alreadyRegistered: `✅ Vous êtes déjà inscrit!

Votre compte est actif. Utilisez le menu pour accéder aux fonctionnalités.`
    },

    survey: {
      intro: `📋 Sondage Rapide (1/7)

Personnalisons votre expérience de trading!

Quelle est votre expérience de trading?`,
      
      question2: `📋 Sondage (2/7)

Quel est votre objectif principal?`,
      
      question3: `📋 Sondage (3/7)

Combien de temps pouvez-vous consacrer quotidiennement?`,
      
      question4: `📋 Sondage (4/7)

Quel est votre budget de départ?`,
      
      question5: `📋 Sondage (5/7)

Quel est votre objectif de revenu mensuel?`,
      
      question6: `📋 Sondage (6/7)

Qu'est-ce qui est le plus important pour vous?`,
      
      question7: `📋 Sondage (7/7)

Quand voulez-vous voir votre premier bénéfice?`,
      
      complete: (data: any) => `✅ Parfait! Sondage terminé!

📊 Votre Profil:
- Expérience: ${data.experience}
- Objectif: ${data.goal}
- Budget: $${data.budget}
- Objectif mensuel: $${data.monthlyGoal}

Je vais préparer la stratégie optimale pour vous! Continuons...`,

      customBudgetPrompt: `💰 Veuillez entrer votre montant de budget personnalisé en USD (ex: 75)

Minimum: $10
Recommandé: $50`,
      
      customBudgetInvalid: `❌ Montant invalide. Veuillez entrer un nombre à partir de 10 (ex: 75)`,
      
      customBudgetTooLarge: `❌ Montant trop élevé. Maximum $10,000. Veuillez réessayer.`,
      
      customBudgetConfirm: (amount: number) => `✅ Parfait! Votre budget: $${amount}

Poursuite du sondage...`
    },

    broker: {
      intro: (name: string, goal: number, budget: number) => `Excellent, ${name}! 

Je vois que vous voulez gagner $${goal}/mois avec un budget de $${budget}. C'est tout à fait réalisable! 📈

Notre IA génère des signaux, mais vous avez besoin d'un compte broker pour le trading réel.
Nous travaillons avec Pocket Option - ils offrent jusqu'à 100% de bonus!

✅ Jusqu'à 100% de bonus sur dépôt
✅ Dépôt minimum $10 (nous recommandons $50)
✅ Retrait en 24 heures
✅ Manager personnel

Inscrivez-vous maintenant:`,

      registrationInfo: `🎯 Excellent! Maintenant vous devez vous inscrire sur notre plateforme partenaire.

💼 Notre partenaire - Pocket Option
✅ Jusqu'à 100% de bonus sur dépôt
✅ Dépôt minimum $10
✅ Retrait en 24 heures
✅ Courtier licencié

📝 Cliquez sur le bouton ci-dessous pour vous inscrire:`,
      
      registerButton: '🚀 S\'inscrire Maintenant',

      registerPrompt: (url: string) => `🚀 Excellent! Inscrivez-vous ici:

${url}

✅ Obtenez 100% de bonus
✅ Dépôt minimum $10

Après l'inscription, revenez ici et entrez votre Broker ID.`,

      idPrompt: `✅ Inscrit? Parfait!

📋 Maintenant entrez votre Broker ID

Où trouver l'ID:
1️⃣ Ouvrez l'application du courtier
2️⃣ Allez dans les paramètres du profil
3️⃣ Trouvez "User ID" ou "Broker ID"
4️⃣ Copiez et envoyez-moi (4-12 chiffres)

Exemple: 12345678`,
      
      idRequest: `Génial! Veuillez entrer votre Broker ID.

Vous pouvez le trouver dans les paramètres de votre compte broker.

Envoyez-moi l'ID (4-12 chiffres):`,
      
      invalidId: `❌ Format de Broker ID invalide.

L'ID doit contenir 4-12 chiffres.

Veuillez réessayer:`,
      
      success: (brokerId: string) => `🎉 Félicitations! ID #${brokerId} confirmé!

Étapes restantes:
1️⃣ Déposer le solde (min. $10, recommandé $50)
2️⃣ Obtenir 100% de bonus automatiquement
3️⃣ Commencer à recevoir des signaux IA

⏰ Bonus de 100% disponible seulement les premières 24 heures!
Ne manquez pas la date limite!

Prêt à déposer?`,
      
      depositReminder: `💰 Effectuez votre premier dépôt pour activer:

✅ Bonus de 100% (doublez votre argent!)
✅ Signaux IA premium
✅ Support manager personnel
✅ Accès aux analyses VIP

Minimum: $10
Recommandé: $50 (optimal pour objectif de $500/mois)

Le bouton [Déposer Maintenant] vous redirigera vers le broker.`,
      
      depositConfirm: `🎉 Dépôt détecté!

Votre compte est maintenant complètement activé!

🎁 Bonus débloqués:
- Bonus de 100% sur dépôt
- Signaux IA activés
- Support VIP activé

Prêt à commencer le trading?`
    },

    signals: {
      intro: `📊 SIGNAUX DE TRADING IA

Notre IA analyse le marché 24/7 et envoie des signaux avec:
- 94-98% de précision
- Point d'entrée et durée
- Gestion des risques
- Mises à jour en temps réel

Choisissez le mode:`,
      
      personal: `✅ Mode de trading personnel activé!

Vous recevrez des signaux toutes les 3-10 minutes.
Chaque signal inclut une analyse complète.

🎯 Prêt à commencer?`,
      
      signal: (data: any) => `🎯 SIGNAL #${data.id} | ${data.time}

📊 Paire: ${data.pair}
${data.direction === 'LONG' ? '🔼' : '🔽'} Direction: ${data.direction}
⏰ Durée: ${data.duration} minutes
💰 Mise recommandée: 5% du solde

📈 Analyse IA:
${data.reason}

🎯 Confiance IA: ${data.confidence}%
📊 Signaux similaires aujourd'hui: ${data.todaySuccessRate}

Ouvrez le trade maintenant chez votre broker!`,
      
      result: (data: any) => `${data.result === 'win' ? '✅' : '❌'} SIGNAL #${data.id} | RÉSULTAT

📊 ${data.pair} | ${data.direction} ${data.duration}min
💰 Résultat: ${data.result === 'win' ? `+$${data.profit} bénéfice` : `-$${data.loss} perte`}

Statistiques d'aujourd'hui:
✅ Réussis: ${data.wins}
❌ Pertes: ${data.losses}
📊 Taux de réussite: ${data.winRate}%
💰 Bénéfice: ${data.totalProfit >= 0 ? '+' : ''}$${data.totalProfit}`,
      
      massSession: (countdown: number) => `🔥 SESSION DE TRADING MASSIVE DÉMARRE!

⏰ Le trading commence dans: ${Math.floor(countdown / 60)} minutes

C'est votre chance de trader avec TOUS les utilisateurs premium simultanément!

💡 Que faire maintenant:
1️⃣ Assurez-vous d'avoir un dépôt
2️⃣ Ouvrez votre plateforme broker
3️⃣ Attendez les signaux

🎁 Bonus spécial pendant la session massive:
- Signaux plus fréquents
- Précision plus élevée
- Énergie de groupe en temps réel

Soyez prêt! 🚀`,
      
      sessionStart: `🚀 SESSION DE TRADING DÉMARRÉE!

Les signaux arriveront toutes les 3-10 minutes.
Restez concentré et suivez la stratégie!

Bonne chance! 💰`
    },

    account: {
      info: (data: any) => `👤 VOTRE COMPTE

📊 Statistiques:
- Niveau: ${data.level}
- Points: ${data.points}
- Taux de réussite: ${data.winRate}%
- Bénéfice total: $${data.totalProfit}

💎 Statut VIP: ${data.vipStatus}
- Dépôt: $${data.depositAmount}
- Précision des signaux: ${data.signalsAccuracy}%

📚 Progression du cours:
- Terminé: ${data.lessonsCompleted}/21 leçons

🎁 Parrainages:
- Total: ${data.totalReferrals}
- Gains: $${data.referralEarnings}

Voulez-vous améliorer votre compte?`,
      
      referral: (code: string) => `🎁 INVITEZ DES AMIS ET GAGNEZ

Votre lien de parrainage:
${code}

💰 Récompenses:
- Ami s'inscrit: +10 points
- Ami dépose $50+: $25 de récompense

Partagez avec des amis et gagnez un revenu passif!`
    },

    help: `❓ AIDE ET SUPPORT

📚 Guide rapide:
/start - Redémarrer le bot
/account - Voir votre compte
/signals - Obtenir des signaux IA
/course - Cours gratuit
/support - Contacter le support technique

💬 Besoin d'aide?
Contactez notre équipe de support 24/7:
@ysly2

📖 FAQ: https://wavetrading.coinmasterlend.site/faq
📱 Plateforme: https://wavetrading.coinmasterlend.site/`,

support: `👨‍💼 SUPPORT OFFICIEL

Notre responsable du support officiel:
@ysly2

⚠️ C'est le SEUL responsable officiel qui peut vous aider avec toutes les questions et problèmes que vous pourriez rencontrer.

🔒 Ne partagez jamais vos informations personnelles avec quelqu'un d'autre!

Contactez-nous pour:
✅ Problèmes de compte
✅ Questions sur les dépôts/retraits
✅ Problèmes techniques
✅ Demandes générales

Nous sommes là pour vous aider! 💬`,
    
    freeCourse: `📚 COURS DE TRADING PROFESSIONNEL GRATUIT

Accédez à notre cours complet de 21 leçons:
https://wavetrading.coinmasterlend.site/course

📖 Ce que vous apprendrez:
- Bases et fondamentaux du Forex
- Analyse technique et indicateurs
- Stratégies de gestion des risques
- Psychologie du trading
- Comment utiliser efficacement les signaux IA

🎓 Commencez à apprendre maintenant et devenez un trader professionnel!`,

    admin: {
      panel: `🛡️ PANNEAU ADMIN

Commandes disponibles:
/broadcast <message> - Envoyer à tous les utilisateurs
/stats - Statistiques des utilisateurs
/session_start - Démarrer une session massive
/session_stop - Arrêter la session
/signal <paire> <direction> <durée> - Envoyer un signal manuel

Les statistiques actuelles seront affichées ci-dessous:`,
      
      stats: (data: any) => `📊 STATISTIQUES DU BOT

👥 Utilisateurs:
- Total: ${data.totalUsers}
- Inscrits sur la plateforme: ${data.registered}
- Avec dépôts: ${data.deposited}
- Actifs aujourd'hui: ${data.activeToday}

💰 Revenus:
- Dépôts totaux: $${data.totalDeposits}
- Dépôt moyen: $${data.avgDeposit}

📈 Engagement:
- Sondage terminé: ${data.completedSurvey}
- Trading commencé: ${data.startedTrading}`,
      
      sessionStarted: `✅ Session de trading massive démarrée!

Message de compte à rebours envoyé à tous les utilisateurs.
La session commencera dans 20 minutes.`,
      
      sessionStopped: `⏹️ Session de trading arrêtée.

Statistiques finales envoyées aux participants.`,
      
      broadcastSent: (count: number) => `✅ Diffusion envoyée à ${count} utilisateurs.`,
      
      signalSent: `✅ Signal envoyé à tous les utilisateurs actifs.`,
      
      unauthorized: `❌ Accès refusé. Administrateurs uniquement.`
    }
  }
}

// ===================================================================
// Функция getMessage для получения сообщений с fallback на английский
// ===================================================================

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