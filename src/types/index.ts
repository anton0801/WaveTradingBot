export interface TelegramUser {
  id: string
  telegram_id: string
  username?: string
  first_name?: string
  last_name?: string
  language_code?: string
  user_id?: string
  registered_on_platform: boolean
  completed_survey: boolean
  broker_registered: boolean
  broker_id?: string
  notifications_enabled: boolean
  language: string
  created_at: string
  updated_at: string
}

export interface UserData {
  telegram_id: string
  username?: string
  first_name?: string
  last_name?: string
  language_code?: string
  language?: string
  broker_id?: string
  broker_registered?: boolean
  first_deposit?: boolean
  deposit_amount?: number
  vip_status?: string
  user_id?: string
  registered_on_platform?: boolean
  completed_survey?: boolean
  notifications_enabled?: boolean
}

export interface SurveyData {
  user_id: string
  trading_experience: string
  main_goal: string
  time_commitment: string
  start_budget: number
  monthly_goal: number
  priority: string
  first_profit_timeline: string
}