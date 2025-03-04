import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("Supabase URL이 설정되지 않았습니다.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
