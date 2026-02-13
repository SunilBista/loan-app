import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ApplicationStatus } from "@/lib/mock-db";
import { Clock, Eye, CheckCircle, XCircle } from "lucide-react";
import { JSX } from "react";

const statusConfig: Record<
  ApplicationStatus,
  { className: string; label: string; icon: JSX.Element }
> = {
  Pending: {
    className:
      "bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-amber-300 shadow-sm",
    label: "Pending",
    icon: <Clock className="h-3 w-3" />,
  },
  "Under Review": {
    className:
      "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-300 shadow-sm",
    label: "Under Review",
    icon: <Eye className="h-3 w-3" />,
  },
  Approved: {
    className:
      "bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-300 shadow-sm",
    label: "Approved",
    icon: <CheckCircle className="h-3 w-3" />,
  },
  Rejected: {
    className:
      "bg-gradient-to-r from-red-50 to-red-100 text-red-700 border-red-300 shadow-sm",
    label: "Rejected",
    icon: <XCircle className="h-3 w-3" />,
  },
};

export function StatusBadge({
  status,
  className,
}: {
  status: ApplicationStatus;
  className?: string;
}) {
  const config = statusConfig[status];
  return (
    <Badge
      variant="outline"
      className={cn(
        "text-xs font-semibold px-3 py-1.5 flex items-center gap-1.5 transition-all duration-200 hover:shadow-md",
        config.className,
        className,
      )}
    >
      {config.icon}
      {config.label}
    </Badge>
  );
}
