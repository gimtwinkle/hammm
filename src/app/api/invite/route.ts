import { supabase } from "@/lib/supabaseClient";
import { makeNanoId } from "@/util/makeNanoId";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await supabase.from("invite").select("*");
    return NextResponse.json(data);
  } catch (e) {
    console.error("Unexpected error:", e);

    const error = e as Error;
    return NextResponse.json(
      {
        error: "Server error",
        message: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const code = makeNanoId();
    const { guest } = await request.json();

    const { data, error } = await supabase
      .from("invite")
      .insert({
        code: code,
        guest: guest,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });

      return NextResponse.json(
        {
          error: "Database error",
          details: error.message,
          code: error.code,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (e) {
    console.error("Unexpected error:", e);

    const error = e as Error;
    return NextResponse.json(
      {
        error: "Server error",
        message: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
