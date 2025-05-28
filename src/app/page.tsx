import { TotalIncome } from '@/components/dashboard/TotalIncome';
import { TotalOutcome } from '@/components/dashboard/TotalOutcome';
import { TotalSavings } from '@/components/dashboard/TotalSavings';

export default async function Home() {
  return (
    <>
      <TotalIncome wclassName="m-4" />
      <TotalOutcome className="m-4" />
      <TotalSavings className="m-4" />
    </>
  );
}
