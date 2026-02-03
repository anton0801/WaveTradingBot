import { Context } from 'telegraf'
import { getTelegramUser, supabase } from '../utils/database'
import { getMessage } from '../utils/messages'
import { config } from '../config/config'

export async function handleAccountInfo(ctx: Context) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  
  if (!user) return

  const lang = user.language || 'en'

  if (!user.user_id) {
    await ctx.reply('❌ You need to register on platform first!\n\nUse menu → Register')
    return
  }

  // Получаем данные профиля с платформы
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.user_id)
    .single()

  if (!profile) {
    await ctx.reply('❌ Profile not found')
    return
  }

  // Получаем статистику сделок
  const { data: trades } = await supabase
    .from('user_trades')
    .select('result, profit_loss')
    .eq('user_id', user.user_id)

  const wins = trades?.filter(t => t.result === 'win').length || 0
  const total = trades?.length || 0
  const winRate = total > 0 ? Math.round((wins / total) * 100) : 0
  const totalProfit = trades?.reduce((sum, t) => sum + (t.profit_loss || 0), 0) || 0

  // Получаем прогресс курса
  const { data: progress } = await supabase
    .from('course_progress')
    .select('lesson_id')
    .eq('user_id', user.user_id)
    .eq('completed', true)

  const lessonsCompleted = progress?.length || 0

  const accountData = {
    level: profile.level || 1,
    points: profile.points || 0,
    winRate,
    totalProfit: totalProfit.toFixed(2),
    vipStatus: profile.vip_status || 'BRONZE',
    depositAmount: profile.deposit_amount || 0,
    signalsAccuracy: winRate,
    lessonsCompleted,
    totalReferrals: profile.total_referrals || 0,
    referralEarnings: profile.referral_earnings || 0
  }

  await ctx.reply(
    getMessage(lang, 'account.info', accountData),
    { parse_mode: 'Markdown' }
  )
}

export async function handleReferralInfo(ctx: Context) {
  const telegramId = ctx.from!.id
  const user = await getTelegramUser(telegramId)
  
  if (!user) return

  const lang = user.language || 'en'

  if (!user.user_id) {
    await ctx.reply('❌ You need to register on platform first!')
    return
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('referral_code')
    .eq('id', user.user_id)
    .single()

  if (!profile?.referral_code) {
    await ctx.reply('❌ Referral code not found')
    return
  }

  const referralLink = `${config.platformUrl}/register?ref=${profile.referral_code}`

  await ctx.reply(
    getMessage(lang, 'account.referral', referralLink),
    { parse_mode: 'Markdown' }
  )
}