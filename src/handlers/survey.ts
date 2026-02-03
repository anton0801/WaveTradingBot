import { Context } from 'telegraf'
import { getTelegramUser, saveSurvey } from '../utils/database'
import { getMessage } from '../utils/messages'
import {
  surveyExperienceKeyboard,
  surveyGoalKeyboard,
  surveyTimeKeyboard,
  surveyBudgetKeyboard,
  surveyMonthlyGoalKeyboard,
  surveyPriorityKeyboard,
  surveyProfitTimelineKeyboard
} from '../utils/keyboard'

// Временное хранилище ответов (в продакшене используйте Redis или БД)
const surveyData: Record<number, any> = {}

export async function handleSurveyStart(ctx: Context) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  
  if (!user) {
    await ctx.reply('❌ Error: User not found. Please /start')
    return
  }

  const lang = user.language || 'en'

  // Инициализируем данные опроса
  surveyData[telegramId] = {}

  await ctx.reply(
    getMessage(lang, 'survey.intro'),
    surveyExperienceKeyboard(lang)
  )
}

export async function handleSurveyExperience(ctx: Context, experience: string) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  const lang = user?.language || 'en'

  surveyData[telegramId].trading_experience = experience

  await ctx.editMessageText(
    getMessage(lang, 'survey.question2'),
    surveyGoalKeyboard(lang)
  )
}

export async function handleSurveyGoal(ctx: Context, goal: string) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  const lang = user?.language || 'en'

  surveyData[telegramId].main_goal = goal

  await ctx.editMessageText(
    getMessage(lang, 'survey.question3'),
    surveyTimeKeyboard(lang)
  )
}

export async function handleSurveyTime(ctx: Context, time: string) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  const lang = user?.language || 'en'

  surveyData[telegramId].time_commitment = time

  await ctx.editMessageText(
    getMessage(lang, 'survey.question4'),
    surveyBudgetKeyboard(lang)
  )
}

export async function handleSurveyBudget(ctx: Context, budget: number | 'custom') {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  const lang = user?.language || 'en'

  if (budget === 'custom') {
    // Запрашиваем кастомную сумму
    surveyData[telegramId].awaiting_custom_budget = true
    await ctx.editMessageText('Please enter your custom budget amount (in USD):')
    return
  }

  surveyData[telegramId].start_budget = budget

  await ctx.editMessageText(
    getMessage(lang, 'survey.question5'),
    surveyMonthlyGoalKeyboard(lang)
  )
}

export async function handleSurveyMonthlyGoal(ctx: Context, goal: number) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  const lang = user?.language || 'en'

  surveyData[telegramId].monthly_goal = goal

  await ctx.editMessageText(
    getMessage(lang, 'survey.question6'),
    surveyPriorityKeyboard(lang)
  )
}

export async function handleSurveyPriority(ctx: Context, priority: string) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  const lang = user?.language || 'en'

  surveyData[telegramId].priority = priority

  await ctx.editMessageText(
    getMessage(lang, 'survey.question7'),
    surveyProfitTimelineKeyboard(lang)
  )
}

export async function handleSurveyComplete(ctx: Context, timeline: string) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  const lang = user?.language || 'en'

  surveyData[telegramId].first_profit_timeline = timeline

  // Сохраняем в БД
  if (user?.user_id) {
    await saveSurvey(user.user_id, surveyData[telegramId])
  }

  const data = surveyData[telegramId]

  await ctx.editMessageText(
    getMessage(lang, 'survey.complete', {
      experience: data.trading_experience,
      goal: data.main_goal,
      budget: data.start_budget,
      monthlyGoal: data.monthly_goal
    })
  )

  // Очищаем временные данные
  delete surveyData[telegramId]

  // Переход к регистрации у брокера
  setTimeout(() => {
    handleBrokerIntro(ctx)
  }, 2000)
}

// Импортируем handleBrokerIntro из broker.ts
import { handleBrokerIntro } from './broker'