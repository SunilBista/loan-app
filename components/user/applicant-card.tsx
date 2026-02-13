import { User, DollarSign, Briefcase, BarChart2 } from "lucide-react";
import { DetailItem } from "../ui/detail-item";
import { formatCurrency } from "@/lib/utils";
import { ApplicantDetailsProps } from "@/lib/type";

export const ApplicantDetails = ({
  name,
  annualIncome,
  employmentStatus,
  creditScore,
}: ApplicantDetailsProps) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="font-semibold text-lg mb-4">Applicant Details</h2>
      <div className="space-y-3">
        <DetailItem icon={<User />} label="Full Name" value={name} />
        <DetailItem
          icon={<DollarSign />}
          label="Annual Income"
          value={formatCurrency(annualIncome)}
        />
        <DetailItem
          icon={<Briefcase />}
          label="Employment Status"
          value={employmentStatus}
        />
        <DetailItem
          icon={<BarChart2 />}
          label="Credit Score"
          value={creditScore.toString()}
        />
      </div>
    </div>
  );
};
