import dotenv from 'dotenv'

dotenv.config()

export const config = {
  botToken: process.env.BOT_TOKEN!,
  supabaseUrl: process.env.SUPABASE_URL!,
  supabaseKey: process.env.SUPABASE_SERVICE_KEY!,
  platformUrl: process.env.PLATFORM_URL!,
  adminIds: process.env.ADMIN_IDS?.split(',').map(id => parseInt(id)) || [],
}

// Валидация
if (!config.botToken) throw new Error('BOT_TOKEN не указан в .env')
if (!config.supabaseUrl) throw new Error('SUPABASE_URL не указан в .env')
if (!config.supabaseKey) throw new Error('SUPABASE_SERVICE_KEY не указан в .env')