import { LoanDetails } from "./user/loan-card";
import ApplicationStatusControl from "./application/application-status-control";
import { initialApplications } from "@/lib/mock-db";
import { ApplicantDetails } from "./user/applicant-card";
import { ApplicantInfoCard } from "./user/applicant-info";
import { StatusHistory } from "./application/status-history";
import { ArrowLeft } from "lucide-react";
import { useLoanApplication } from "@/context/loan-application-context";
import { useEffect } from "react";

export const ApplicationOverview = () => {
  const { deselectApplication, selectedApplication } = useLoanApplication();
  const currentApplication = selectedApplication || initialApplications[0];
  const { statusHistory = [] } = currentApplication;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="space-y-4">
      <div
        className="flex w-50 items-center gap-4 rounded-full hover:bg-gray-100 transition-colors duration-150"
        title="Back to application list"
      >
        <ArrowLeft
          className=" text-gray-500 w-10 h-8 cursor-pointer "
          onClick={deselectApplication}
        />
      </div>
      <h2 className="text-2xl font-bold pt-3">Application Overview</h2>

      <div className="w-full">
        <div className="mb-6">
          <ApplicantInfoCard
            name={currentApplication.applicantName}
            loanId={currentApplication.id}
            applicationDate={currentApplication.applicationDate}
            loanAmount={currentApplication.loanAmount}
            status={currentApplication.currentStatus}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 items-start">
          <ApplicantDetails
            name={currentApplication.applicantName}
            annualIncome={currentApplication.annualIncome}
            employmentStatus={currentApplication.employmentStatus}
            creditScore={currentApplication.creditScore}
          />
          <LoanDetails
            loanAmount={currentApplication.loanAmount}
            loanPurpose={currentApplication.loanPurpose}
            applicationDate={currentApplication.applicationDate}
          />
          <ApplicationStatusControl
            initialStatus={currentApplication.currentStatus}
          />
        </div>
        <div className="mt-6">
          <StatusHistory events={statusHistory} />
        </div>
      </div>
    </div>
  );
};
