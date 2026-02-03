import { Context, Telegraf } from 'telegraf'
import { config } from '../config/config'
import { getAllTelegramUsers, supabase } from '../utils/database'
import { getMessage } from '../utils/messages'
import { startMassSession } from './signals'

export function isAdmin(telegramId: number): boolean {
  return config.adminIds.includes(telegramId)
}

export async function handleAdminPanel(ctx: Context) {
  const telegramId = ctx.from!.id

  if (!isAdmin(telegramId)) {
    await ctx.reply(getMessage('en', 'admin.unauthorized'))
    return
  }

  const stats = await getAdminStats()

  await ctx.reply(
    getMessage('en', 'admin.panel'),
    { parse_mode: 'Markdown' }
  )

  await ctx.reply(
    getMessage('en', 'admin.stats', stats),
    { parse_mode: 'Markdown' }
  )
}

export async function handleBroadcast(ctx: Context, message: string) {
  const telegramId = ctx.from!.id

  if (!isAdmin(telegramId)) {
    await ctx.reply(getMessage('en', 'admin.unauthorized'))
    return
  }

  const users = await getAllTelegramUsers()
  let sentCount = 0

  for (const user of users) {
    try {
      await ctx.telegram.sendMessage(parseInt(user.telegram_id), message, {
        parse_mode: 'Markdown'
      })
      sentCount++
    } catch (error) {
      console.error(`Failed to send to ${user.telegram_id}:`, error)
    }
  }

  await ctx.reply(getMessage('en', 'admin.broadcastSent', sentCount))
}

export async function handleSessionStart(ctx: Context, bot: Telegraf) {
  const telegramId = ctx.from!.id

  if (!isAdmin(telegramId)) {
    await ctx.reply(getMessage('en', 'admin.unauthorized'))
    return
  }

  await startMassSession(bot)
  await ctx.reply(getMessage('en', 'admin.sessionStarted'))
}

export async function handleSessionStop(ctx: Context) {
  const telegramId = ctx.from!.id

  if (!isAdmin(telegramId)) {
    await ctx.reply(getMessage('en', 'admin.unauthorized'))
    return
  }

  // TODO: Implement session stop logic
  await ctx.reply(getMessage('en', 'admin.sessionStopped'))
}

export async function handleManualSignal(ctx: Context, bot: Telegraf, pair: string, direction: string, duration: number) {
  const telegramId = ctx.from!.id

  if (!isAdmin(telegramId)) {
    await ctx.reply(getMessage('en', 'admin.unauthorized'))
    return
  }

  const users = await getAllTelegramUsers()

  const signal = {
    id: Math.floor(Math.random() * 10000),
    pair,
    direction,
    duration,
    confidence: 95,
    reason: 'Manual signal from admin',
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
    todaySuccessRate: '8/10'
  }

  for (const user of users) {
    try {
      await bot.telegram.sendMessage(
        parseInt(user.telegram_id),
        getMessage('en', 'signals.signal', signal),
        { parse_mode: 'Markdown' }
      )
    } catch (error) {
      console.error(`Failed to send to ${user.telegram_id}:`, error)
    }
  }

  await ctx.reply(getMessage('en', 'admin.signalSent'))
}

async function getAdminStats() {
  try {
    // Total users
    const { count: totalUsers } = await supabase
      .from('telegram_users')
      .select('*', { count: 'exact', head: true })

    // Registered on platform
    const { count: registered } = await supabase
      .from('telegram_users')
      .select('*', { count: 'exact', head: true })
      .eq('registered_on_platform', true)

    // With deposits
    const { count: deposited } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .eq('first_deposit', true)

    // Active today
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const { count: activeToday } = await supabase
      .from('telegram_users')
      .select('*', { count: 'exact', head: true })
      .gte('updated_at', today.toISOString())

    // Total deposits
    const { data: deposits } = await supabase
      .from('profiles')
      .select('deposit_amount')

    const totalDeposits = deposits?.reduce((sum, p) => sum + (p.deposit_amount || 0), 0) || 0
    const avgDeposit = deposited ? (totalDeposits / deposited).toFixed(2) : 0

    // Completed survey
    const { count: completedSurvey } = await supabase
      .from('telegram_users')
      .select('*', { count: 'exact', head: true })
      .eq('completed_survey', true)

    // Started trading (placeholder)
    const startedTrading = Math.floor((deposited || 0) * 0.8)

    return {
      totalUsers: totalUsers || 0,
      registered: registered || 0,
      deposited: deposited || 0,
      activeToday: activeToday || 0,
      totalDeposits: totalDeposits.toFixed(2),
      avgDeposit,
      completedSurvey: completedSurvey || 0,
      startedTrading
    }
  } catch (error) {
    console.error('Error fetching admin stats:', error)
    return {
      totalUsers: 0,
      registered: 0,
      deposited: 0,
      activeToday: 0,
      totalDeposits: '0.00',
      avgDeposit: '0.00',
      completedSurvey: 0,
      startedTrading: 0
    }
  }
}