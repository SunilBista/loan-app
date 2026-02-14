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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
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
  const [selectedStatus, setSelectedStatus] =
    useState<ApplicationStatus>(initialStatus);
  const [open, setOpen] = useState(false);

  const isLocked = status === "Approved" || status === "Rejected";

  const {
    updateStatus,
    selectedId,
    resetApplication,
    selectedApplication,
    getPreviousStatus,
  } = useLoanApplication();

  const handleStatusChange = () => {
    setOpen(false);
    if (!selectedApplication?.currentStatus) {
      toast.error("Invalid transition", {
        description:
          "Current Status is undefined. Please select a valid application.",
      });
      return;
    }

    if (!isValidTransition(selectedApplication.currentStatus, selectedStatus)) {
      setSelectedStatus(selectedApplication.currentStatus);
      toast.error("Invalid transition", {
        description: `Cannot move from "${selectedApplication.currentStatus}" to "${selectedStatus}".`,
      });
      return;
    }

    if (selectedApplication.currentStatus === selectedStatus) {
      toast.warning("No change", {
        description: `The application is already "${selectedStatus}".`,
      });
      return;
    }

    if (selectedId) {
      updateStatus(
        selectedId,
        selectedStatus,
        DEFAULT_STATUS_NOTES[selectedStatus],
      );

      setStatus(selectedStatus);
      setOpen(false);

      toast.success(`Status updated to "${selectedStatus}"`);
    }
  };

  const resetStatus = () => {
    if (selectedId) {
      resetApplication(selectedId);
      toast.info("Application reset", {
        description: "The application has been restored to its initial state.",
      });
      setStatus(getPreviousStatus(selectedId) || initialStatus);
      setSelectedStatus(getPreviousStatus(selectedId) || initialStatus);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h2 className="font-semibold text-lg mb-4">Application Status</h2>

        <p className="mb-4">
          Current:{" "}
          <StatusBadge
            status={status}
            className="inline-flex items-center gap-2"
          />
        </p>

        <Select
          value={selectedStatus}
          onValueChange={(value) =>
            setSelectedStatus(value as ApplicationStatus)
          }
          disabled={isLocked}
        >
          <SelectTrigger className="w-full sm:w-full cursor-pointer">
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

        {!isLocked && (
          <Button
            className="mt-4 w-full sm:w-full cursor-pointer bg-green-600 hover:bg-green-700"
            onClick={() => setOpen(true)}
          >
            Update Status
          </Button>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Status Change</DialogTitle>
            <DialogDescription>
              Are you sure you want to change status to{" "}
              <strong>{selectedStatus}</strong>?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700 cursor-pointer"
              onClick={handleStatusChange}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {isLocked && (
        <>
          <Card className="mt-2">
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
