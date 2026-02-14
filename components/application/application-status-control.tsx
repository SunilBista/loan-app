"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ApplicationStatus } from "@/lib/type";
import { StatusBadge } from "../ui/status-badge";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { useLoanApplication } from "@/context/loan-application-context";
import { DEFAULT_STATUS_NOTES } from "@/lib/mock-db";
import { isValidTransition } from "@/context/utils";
import { toast } from "sonner";
interface ApplicationStatusControlProps {
  initialStatus: ApplicationStatus;
}
const ApplicationStatusControl = ({
  initialStatus,
}: ApplicationStatusControlProps) => {
  const [status, setStatus] = useState<ApplicationStatus>(initialStatus);

  const isLocked = status === "Approved" || status === "Rejected";
  const { updateStatus, selectedId, resetApplication, selectedApplication } =
    useLoanApplication();

  const handleStatusChange = (newStatus: ApplicationStatus) => {
    if (!selectedApplication?.currentStatus) {
      toast.error("Invalid transition", {
        description:
          "Current Status is undefined. Please select a valid application.",
      });
      return;
    }

    if (!isValidTransition(selectedApplication.currentStatus, newStatus)) {
      toast.error("Invalid transition", {
        description: `Cannot move from "${selectedApplication?.currentStatus}" to "${newStatus}".`,
      });
      return;
    }
    if (selectedApplication.currentStatus === newStatus) {
      toast.warning("No change", {
        description: `The application is already "${newStatus}".`,
      });
      return;
    }

    if (selectedId) {
      updateStatus(selectedId, newStatus, DEFAULT_STATUS_NOTES[newStatus]);
      setStatus(newStatus);
      if (newStatus === "Approved") {
        toast.success(`Status updated to "${newStatus}"`, {
          description: "Application has been approved.",
        });
      } else if (newStatus === "Under Review") {
        toast.info(`Status updated to "${newStatus}"`, {
          description: "Application is now under review.",
        });
      } else if (newStatus === "Rejected") {
        toast.info(`Status updated to "${newStatus}"`, {
          description: "Application has been rejected.",
        });
      }
    }
  };

  const resetStatus = () => {
    setStatus(initialStatus);
    if (selectedId) {
      resetApplication(selectedId);
      toast.info("Application reset", {
        description: "The application has been restored to its initial state.",
      });
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h2 className="font-semibold text-lg mb-4">Application Status</h2>
        <p className="text-gray-500 mb-4">
          Progress this application to the next stage.
        </p>

        <p className="mb-4">
          Current:{" "}
          <StatusBadge
            status={status}
            className="inline-flex items-center gap-2"
          />
        </p>

        <Select
          value={status}
          onValueChange={(value) =>
            handleStatusChange(value as ApplicationStatus)
          }
          disabled={isLocked}
        >
          <SelectTrigger className="w-full sm:w-auto cursor-pointer">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem className="cursor-pointer" value="Pending">
                Pending
              </SelectItem>
              <SelectItem className="cursor-pointer" value="Under Review">
                Under Review
              </SelectItem>
              <SelectItem className="cursor-pointer" value="Approved">
                Approved
              </SelectItem>
              <SelectItem className="cursor-pointer" value="Rejected">
                Rejected
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {isLocked && (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="text-grey-500 text-sm">
                No further status changes are allowed.
              </CardTitle>
            </CardHeader>
          </Card>

          <Button
            variant="destructive"
            className="mt-4 cursor-pointer"
            onClick={resetStatus}
          >
            Reset Application Status
          </Button>
        </>
      )}
    </div>
  );
};

export default ApplicationStatusControl;
