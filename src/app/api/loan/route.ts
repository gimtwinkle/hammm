// body로 대출금액, 이자율, 기간을 받아서 대출 계산 결과를 반환하는 api

import { NextRequest, NextResponse } from "next/server";
import { loanCalculate } from "@/util/loanCalculate";

export async function POST(request: NextRequest) {
  const { loan, interest, period } = await request.json();

  const result = loanCalculate(loan, interest, period);

  return NextResponse.json(result);
}
