import { DollarSign, Target, Calendar } from "lucide-react";
import { DetailItem } from "../ui/detail-item";
import { formatCurrency, formatDate } from "@/lib/utils";

interface LoanDetailsProps {
  loanAmount: number;
  purpose: string;
  applicationDate: string;
}

export const LoanDetails = ({
  loanAmount,
  purpose,
  applicationDate,
}: LoanDetailsProps) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="font-semibold text-lg mb-4">Loan Details</h2>
      <div className="space-y-3">
        <DetailItem
          icon={<DollarSign />}
          label="Loan Amount"
          value={formatCurrency(loanAmount)}
        />
        <DetailItem icon={<Target />} label="Purpose" value={purpose} />
        <DetailItem
          icon={<Calendar />}
          label="Application Date"
          value={formatDate(applicationDate)}
        />
      </div>
    </div>
  );
};
