import { supabase } from "../lib/supabase";
import {
  Savings,
  CreateSavingsInput,
  UpdateSavingsInput,
} from "../types/savings";

// Todo
/**
 * Supabase 웹사이트(https://supabase.com)에서 새 프로젝트를 생성
 * 프로젝트의 URL과 anon key를 받으세요
 * .env.local 파일을 생성하고 다음 환경변수들을 추가하세요
 *      NEXT_PUBLIC_SUPABASE_URL=your-project-url
 *      NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
 * Supabase 데이터베이스 테이블 생성:
 * Supabase 대시보드에서 savings 테이블을 생성하세요
 * 다음 컬럼들을 추가하세요:
 * id (int8, primary key)
 * amount (float8)
 * description (text)
 * created_at (timestamp with timezone)
 * user_id (uuid)
 */

// 모든 저금 내역 조회
export async function getSavings() {
  const { data, error } = await supabase
    .from("savings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Savings[];
}

// 특정 저금 내역 조회
export async function getSaving(id: number) {
  const { data, error } = await supabase
    .from("savings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data as Savings;
}

// 새로운 저금 내역 생성
export async function createSaving(input: CreateSavingsInput) {
  const { data, error } = await supabase
    .from("savings")
    .insert([input])
    .select()
    .single();

  if (error) throw error;
  return data as Savings;
}

// 저금 내역 수정
export async function updateSaving(id: number, input: UpdateSavingsInput) {
  const { data, error } = await supabase
    .from("savings")
    .update(input)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as Savings;
}

// 저금 내역 삭제
export async function deleteSaving(id: number) {
  const { error } = await supabase.from("savings").delete().eq("id", id);

  if (error) throw error;
}
