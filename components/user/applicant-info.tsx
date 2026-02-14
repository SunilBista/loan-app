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
          <div className="w-full rounded-xl bg-white text-gray-900 px-4 py-3 shadow-sm flex flex-col sm:block">
            <div className="flex flex-col sm:block gap-1 sm:gap-0">
              <p className="text-xs uppercase tracking-wide text-white-500">
                Requested Loan Amount
              </p>

              <p className="text-lg sm:text-base font-semibold">
                {formatCurrency(loanAmount)}
              </p>
            </div>

            <div className="mt-2 sm:mt-1 flex">
              <StatusBadge status={status} />
            </div>
          </div>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
