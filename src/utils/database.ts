import { createClient } from '@supabase/supabase-js'
import { config } from '../config/config'
import { UserData, SurveyData, TelegramUser } from '../types'

export const supabase = createClient(config.supabaseUrl, config.supabaseKey)

export { UserData, SurveyData, TelegramUser }

// export interface UserData {
//   telegram_id: string
//   username?: string
//   first_name?: string
//   last_name?: string
//   language_code?: string
//   broker_id?: string
//   broker_registered: boolean
//   first_deposit: boolean
//   deposit_amount: number
//   vip_status: string
// }

// export interface SurveyData {
//   user_id: string
//   trading_experience: string
//   main_goal: string
//   time_commitment: string
//   start_budget: number
//   monthly_goal: number
//   priority: string
//   first_profit_timeline: string
// }

// Создать/обновить Telegram пользователя
export async function upsertTelegramUser(telegramId: number, data: Partial<UserData>) {
  const { data: result, error } = await supabase
    .from('telegram_users')
    .upsert({
      telegram_id: telegramId.toString(),
      ...data,
      updated_at: new Date().toISOString()
    }, { onConflict: 'telegram_id' })
    .select()
    .single()

  if (error) {
    console.error('Error upserting telegram user:', error)
    return null
  }

  return result
}

// Получить пользователя по Telegram ID
export async function getTelegramUser(telegramId: number) {
  const { data, error } = await supabase
    .from('telegram_users')
    .select('*')
    .eq('telegram_id', telegramId.toString())
    .single()

  if (error) {
    console.error('Error fetching telegram user:', error)
    return null
  }

  return data
}

// Сохранить опросник
export async function saveSurvey(userId: string, surveyData: Omit<SurveyData, 'user_id'>) {
  const { error } = await supabase
    .from('user_survey')
    .upsert({
      user_id: userId,
      ...surveyData,
      created_at: new Date().toISOString()
    }, { onConflict: 'user_id' })

  if (error) {
    console.error('Error saving survey:', error)
    return false
  }

  return true
}

// Получить опросник
export async function getSurvey(userId: string) {
  const { data, error } = await supabase
    .from('user_survey')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error) {
    return null
  }

  return data
}

// Обновить broker_id
export async function updateBrokerId(userId: string, brokerId: string) {
  const { error } = await supabase
    .from('profiles')
    .update({ broker_id: brokerId, broker_registered: true })
    .eq('id', userId)

  if (error) {
    console.error('Error updating broker_id:', error)
    return false
  }

  return true
}

// Получить активную торговую сессию
export async function getActiveSession() {
  const { data, error } = await supabase
    .from('trading_sessions')
    .select('*')
    .eq('is_active', true)
    .order('started_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) {
    console.error('Error fetching active session:', error)
    return null
  }

  return data
}

// Получить последние сигналы
export async function getRecentSignals(limit = 5) {
  const { data, error } = await supabase
    .from('trading_signals')
    .select('*')
    .eq('is_mass_signal', true)
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching signals:', error)
    return []
  }

  return data
}

// Получить всех пользователей для массовой рассылки
export async function getAllTelegramUsers() {
  const { data, error } = await supabase
    .from('telegram_users')
    .select('telegram_id')

  if (error) {
    console.error('Error fetching all users:', error)
    return []
  }

  return data
}