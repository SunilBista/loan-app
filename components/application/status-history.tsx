import { StatusEvent } from "@/lib/type";
import { StatusBadge } from "../ui/status-badge";
import { JSX } from "react";
import { Clock, Search, ShieldCheck, XCircle } from "lucide-react";
import { formatDateWithTime } from "@/lib/utils";

const statusIcons: Record<StatusEvent["status"], JSX.Element> = {
  Pending: <Clock className="w-5 h-5 text-yellow-500" />,
  "Under Review": <Search className="w-5 h-5 text-blue-500" />,
  Approved: <ShieldCheck className="w-5 h-5 text-green-500" />,
  Rejected: <XCircle className="w-5 h-5 text-red-500" />,
};

export const StatusHistory = ({ events }: { events: StatusEvent[] }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="font-semibold text-xl mb-6">Status History</h2>
      <div className="relative border-l border-gray-200 ml-4">
        {events.map((event, idx) => (
          <div key={idx} className="mb-14 flex items-start space-x-4 relative">
            <div className="shrink-0 -ml-5 ">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300">
                {statusIcons[event.status]}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <StatusBadge status={event.status} />
                <span className="text-gray-400 text-sm">
                  {formatDateWithTime(event.timestamp)}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{event.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
