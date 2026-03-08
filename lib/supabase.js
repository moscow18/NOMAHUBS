import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// إنشاء العميل اللي هيسحب بيانات القاهرة وبالي
export const supabase = createClient(supabaseUrl, supabaseAnonKey)