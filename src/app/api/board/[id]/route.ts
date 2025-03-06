// PUT /api/board/:id

import { supabase } from "@/lib/supabaseClient";
import { BoardInput } from "@/types/api/common";
import { PostgrestError } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

// ✅ 타입 필수: Request와 params 매개변수
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // ❌ 타입 불필요: 자동 추론됨
    const id = parseInt((await params).id); // string -> number 변환
    // ✅ 타입 필수: request.json()의 결과물
    const body: BoardInput = await request.json();
    // 1. 먼저 게시글이 존재하는지 확인
    const { data: exists } = await supabase
      .from("board")
      .select()
      .eq("id", id)
      .single();

    if (!exists) {
      return NextResponse.json({ error: "Board not found" }, { status: 404 });
    }

    // ❌ 타입 불필요: Supabase가 자동 추론
    const { data, error } = await supabase
      .from("board")
      .update(body)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    // ❌ 타입 불필요: NextResponse.json() 자동 추론
    return NextResponse.json(data);
  } catch (e) {
    const error = e as PostgrestError;
    return NextResponse.json(
      {
        error: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);
  const { error } = await supabase.from("board").delete().eq("id", id);
  if (error) {
    return NextResponse.json(
      { error: "Failed to delete board" },
      { status: 500 }
    );
  }
  return NextResponse.json(
    {
      message: "Board deleted successfully",
      id,
    },
    { status: 200 }
  );
}
