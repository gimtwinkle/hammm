// 원리금 균등 대출 계산의 결과를 Array로 출력하는 함수
// Parameters: loan:대출 금액(원), interest:이자율(%), period:기간(year)
/**
 * 예시: loanCalculate(100000000, 3.28, 30) => [
 *  {no: 1, 대출금액: 100000000, 이자율: 3.28, 기간: 30, 월상환금액: 4166666, 월상환이자: 273333, 월상환원금: 3893333},
 *  {no: 2, 대출금액: 99610667, 이자율: 3.28, 기간: 29, 월상환금액: 4166666, 월상환이자: 272833, 월상환원금: 3898333},
 *  ...
 * ]
 * */

export const loanCalculate = (
  loan: number,
  interest: number,
  period: number
) => {
  const result: any[] = [];
  const totalResult = {
    대출원금: loan,
    총상환금액: 0,
    총상환이자: 0,
    월별상세내역: result,
  };
  const monthlyInterest = interest / 100 / 12;

  const monthlyPayment =
    (loan * monthlyInterest * Math.pow(1 + monthlyInterest, period * 12)) /
    (Math.pow(1 + monthlyInterest, period * 12) - 1);

  for (let i = 0; i < period * 12; i++) {
    const monthInterest = loan * monthlyInterest;
    const principal = monthlyPayment - monthInterest;
    loan = loan - principal;
    result.push({
      회차: i + 1,
      대출잔금: roundNumber(loan),
      이자율: interest,
      기간: period,
      월상환금액: roundNumber(monthlyPayment),
      월상환이자: roundNumber(monthInterest),
      월상환원금: roundNumber(principal),
    });
  }

  totalResult.총상환금액 = result.reduce(
    (sum, item) => sum + item.월상환금액,
    0
  );
  totalResult.총상환이자 = result.reduce(
    (sum, item) => sum + item.월상환이자,
    0
  );

  totalResult.월별상세내역 = result;

  return totalResult;
};

// 숫자를 반올림하는 유틸리티 함수
export const roundNumber = (num: number): number => {
  return Math.round(num);
};

// 숫자를 소숫점만 없에는 함수
export const roundNumberToInteger = (num: number): number => {
  return Math.floor(num);
};
