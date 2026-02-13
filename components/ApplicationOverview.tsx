import { LoanDetails } from "./user/loan-card";
import ApplicationStatusControl from "./application/application-status-control";
import { initialApplications, mockStatusEvents } from "@/lib/mock-db";
import { ApplicantDetails } from "./user/applicant-card";
import { ApplicantInfoCard } from "./user/applicant-info";
import { StatusHistory } from "./application/status-history";

export const ApplicationOverview = () => {
  const currentApplicant = initialApplications[0];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold pt-3">Application Overview</h2>

      <div className="w-full">
        <div className="mb-6">
          <ApplicantInfoCard
            name={currentApplicant.applicantName}
            loanId={currentApplicant.id}
            applicationDate={currentApplicant.applicationDate}
            loanAmount={currentApplicant.loanAmount}
            status={currentApplicant.currentStatus}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
          <ApplicantDetails
            name={currentApplicant.applicantName}
            annualIncome={currentApplicant.annualIncome}
            employmentStatus={currentApplicant.employmentStatus}
            creditScore={currentApplicant.creditScore}
          />
          <LoanDetails
            loanAmount={currentApplicant.loanAmount}
            purpose="Home Renovation"
            applicationDate={currentApplicant.applicationDate}
          />
          <ApplicationStatusControl
            initialStatus={currentApplicant.currentStatus}
          />
        </div>
        <div className="mt-6">
          <StatusHistory events={mockStatusEvents} />
        </div>
      </div>
    </div>
  );
};
