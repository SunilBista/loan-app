import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { ApplicantInfoCardProps } from "@/lib/type";
import { StatusBadge } from "../ui/status-badge";

export function ApplicantInfoCard({
  name,
  loanId,
  applicationDate,
  loanAmount,
  status,
}: ApplicantInfoCardProps) {
  return (
    <Card
      className="
        overflow-hidden
        rounded-xl
        border-0
        text-white
        shadow-md
        bg-(--primary-color)
      "
    >
      <CardHeader
        className="
          flex flex-col
          sm:flex-row sm:items-center sm:justify-between
          gap-3
          px-5 py-3
        "
      >
        <div className="space-y-0.5">
          <p className="text-[14px] uppercase text-white">Applicant</p>

          <CardTitle className="text-lg font-semibold leading-tight">
            {name}
          </CardTitle>

          <CardDescription className="text-md text-white">
            {loanId} • {applicationDate}
          </CardDescription>
        </div>

        <CardAction className="w-full sm:w-auto">
          <div
            className="
              w-full sm:w-auto
              rounded-lg
              bg-white
              text-gray-900
              px-4 py-2
              shadow-sm
              text-right
            "
          >
            <p className="text-[10px] uppercase  text-white-500">
              Requested Loan Amount
            </p>

            <p className="text-base font-semibold">
              {formatCurrency(loanAmount)}
            </p>

            <div className="mt-1 flex justify-end">
              <StatusBadge status={status} />
            </div>
          </div>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
