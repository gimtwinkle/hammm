import { GET } from "./route";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// Supabase 모킹
jest.mock("@/lib/supabaseClient", () => ({
  supabase: {
    from: jest.fn(),
  },
}));

describe("Board API", () => {
  beforeEach(() => {
    // 각 테스트 전에 모킹 초기화
    jest.clearAllMocks();
  });

  it("should return boards successfully", async () => {
    // 테스트 데이터 설정
    const mockBoards = [
      { id: 1, title: "테스트1", content: "내용1" },
      { id: 2, title: "테스트2", content: "내용2" },
    ];

    // Supabase 응답 모킹
    (supabase.from as jest.Mock).mockReturnValue({
      select: jest.fn().mockResolvedValue({
        data: mockBoards,
        error: null,
      }),
    });

    // API 호출
    const response = await GET();

    // 응답 검증
    expect(response instanceof NextResponse).toBe(true);
    const data = await response.json();
    expect(data).toEqual(mockBoards);
  });

  it("should handle errors", async () => {
    // 에러 상황 모킹
    (supabase.from as jest.Mock).mockReturnValue({
      select: jest.fn().mockResolvedValue({
        data: null,
        error: new Error("Database error"),
      }),
    });

    // API 호출
    const response = await GET();

    // 에러 응답 검증
    expect(response instanceof NextResponse).toBe(true);
    const data = await response.json();
    expect(data.error).toBe("Failed to fetch boards");
    expect(response.status).toBe(500);
  });
});
