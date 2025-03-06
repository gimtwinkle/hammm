import { supabase } from "@/lib/supabaseClient";
import { BoardInput } from "@/types/api/common";
import { NextResponse } from "next/server";

export async function GET() {
  // ❌ 타입 불필요: Supabase가 자동으로 추론
  const { data, error } = await supabase.from("board").select("*");

  if (error) {
    return NextResponse.json(
      { error: "Failed to fetch boards" },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}

// POST /api/board

export async function POST(request: Request) {
  // ✅ 타입 필수: request.json()의 결과물 형태를 지정
  const body: BoardInput = await request.json();

  // ❌ 타입 불필요: Supabase가 자동으로 추론
  const { data, error } = await supabase
    .from("board") // 테이블 선택
    .insert([body]) // 데이터 삽입 (배열 형태로)
    .select() // 삽입된 데이터 조회
    .single(); // 단일 결과만 반환

  if (error) {
    return NextResponse.json(
      { error: "Failed to create board" },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 201 });
}
