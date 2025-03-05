import { SavingsController } from "@/server/controllers/savings";
import { CreateSavingsInput } from "@/server/models/savings";
import { NextResponse } from "next/server";

// GET /api/savings
export async function GET() {
  try {
    const savings = await SavingsController.getAllSavings();
    return NextResponse.json(savings);
  } catch (error) {
    return NextResponse.json(
      { error: "저금 내역을 가져오는데 실패했습니다." },
      { status: 500 }
    );
  }
}

// POST /api/savings
export async function POST(request: Request) {
  try {
    const body: CreateSavingsInput = await request.json();
    const saving = await SavingsController.createSaving(body);
    return NextResponse.json(saving, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "저금 내역 생성에 실패했습니다." },
      { status: 500 }
    );
  }
}
