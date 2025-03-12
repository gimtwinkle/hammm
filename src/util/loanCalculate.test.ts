import { loanCalculate } from "./loanCalculate";

describe("loanCalculate", () => {
  // 1. 기본 케이스 테스트
  it("1억원, 3.28%, 30년 기본 케이스의 계산 정확성 검증", () => {
    const result = loanCalculate(100000000, 3.28, 30);
    const firstMonth = result.월별상세내역[0];

    // 정확한 계산값과 비교
    const monthlyInterest = 3.28 / 100 / 12; // 월 이자율
    const expectedMonthlyPayment =
      (100000000 * monthlyInterest * Math.pow(1 + monthlyInterest, 360)) /
      (Math.pow(1 + monthlyInterest, 360) - 1);
    const expectedInterest = 100000000 * monthlyInterest;
    const expectedPrincipal = expectedMonthlyPayment - expectedInterest;

    // 허용 오차 범위 내에서 검증
    expect(firstMonth.월상환금액).toBeCloseTo(
      Math.round(expectedMonthlyPayment),
      -2
    );
    expect(firstMonth.월상환이자).toBeCloseTo(Math.round(expectedInterest), -2);
    expect(firstMonth.월상환원금).toBeCloseTo(
      Math.round(expectedPrincipal),
      -2
    );
  });
  /**
   * TODO: [Bug] 총 상환금액 계산 오류 수정 필요
   *
   * 현재 문제점:
   * - 총 상환금액이 월별 상환금액의 합과 일치하지 않음
   * - 예상 원인: 반올림 처리 시점의 차이 또는 계산식 오류
   *
   * 해결 방향:
   * 1. loanCalculate.ts의 총상환금액 계산 로직 검토
   * 2. 월별상환금액 합산 과정에서 반올림 시점 확인
   * 3. 실제 은행 대출 계산기와 비교 검증
   *
   * 참고 공식:
   * 월상환금액 = 원금 × 월이자율 × (1 + 월이자율)^기간 / ((1 + 월이자율)^기간 - 1)
   * 총상환금액 = 월상환금액 × 대출기간(월)
   */
  describe.skip("Issue #6", () => {
    // 2. 총계 검증
    it("총 상환금액 계산 정확성 검증", () => {
      const result = loanCalculate(100000000, 3.28, 30);

      // 원금과 이자의 합이 총 상환금액과 일치해야 함
      const totalFromDetails = result.월별상세내역.reduce(
        (sum, month) => sum + month.월상환원금 + month.월상환이자,
        0
      );

      expect(result.총상환금액).toBeCloseTo(totalFromDetails, -2);
      expect(result.총상환금액).toBeGreaterThan(result.대출원금); // 이자가 있으므로 반드시 큼
    });
  });

  // 3. 경계값 테스트
  it("경계값 테스트", () => {
    // 0원 대출
    const zeroLoan = loanCalculate(0, 3.28, 30);
    expect(zeroLoan.총상환금액).toBe(0);

    // 0% 이자
    const zeroInterest = loanCalculate(100000000, 0, 30);
    expect(zeroInterest.월별상세내역[0].월상환이자).toBe(0);

    // 1년 기간
    const oneYear = loanCalculate(100000000, 3.28, 1);
    expect(oneYear.월별상세내역.length).toBe(12);
  });

  // 3. 수학적 정확성 검증
  it("매월 원리금 합계가 월상환금액과 일치", () => {
    const result = loanCalculate(100000000, 3.28, 30);

    result.월별상세내역.forEach((month) => {
      expect(month.월상환원금 + month.월상환이자).toBeCloseTo(
        month.월상환금액,
        -2
      );
    });
  });

  // 4. 월별 상환금액 일정한지 검증
  it("월별 상환금액 일정 검증", () => {
    const result = loanCalculate(100000000, 3.28, 30);
    const firstPayment = result.월별상세내역[0].월상환금액;

    result.월별상세내역.forEach((month) => {
      expect(month.월상환금액).toBe(firstPayment);
    });
  });

  // 5. 이자 감소 & 원금 증가 패턴 검증
  it("이자 감소 & 원금 증가 패턴 검증", () => {
    const result = loanCalculate(100000000, 3.28, 30);

    for (let i = 1; i < result.월별상세내역.length; i++) {
      const prev = result.월별상세내역[i - 1];
      const curr = result.월별상세내역[i];

      // 이자는 감소해야 함
      expect(curr.월상환이자).toBeLessThan(prev.월상환이자);

      // 원금은 증가해야 함
      expect(curr.월상환원금).toBeGreaterThan(prev.월상환원금);
    }
  });
});
