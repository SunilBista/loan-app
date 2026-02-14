import { ReactNode } from "react";

export type CardDetailsType = {
  title: string;
  number: number | string;
  icon: ReactNode;
  color?: ColorType;
};

export type ApplicationStatus =
  | "Pending"
  | "Under Review"
  | "Approved"
  | "Rejected";

export interface StatusHistory {
  status: ApplicationStatus;
  timestamp: string;
  notes: string;
}

export interface LoanApplication {
  id: string;
  applicantName: string;
  loanAmount: number;
  loanPurpose: string;
  annualIncome: number;
  employmentStatus: string;
  creditScore: number;
  applicationDate: string;
  currentStatus: ApplicationStatus;
  statusHistory: StatusHistory[];
}

export const colorClasses = {
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  orange: "from-orange-500 to-orange-600",
  purple: "from-purple-500 to-purple-600",
} as const;

export type ColorType = keyof typeof colorClasses;

export type StatusEvent = {
  status: ApplicationStatus;
  notes: string;
  timestamp: string;
};

export interface ApplicantDetailsProps {
  name: string;
  annualIncome: number;
  employmentStatus: string;
  creditScore: number;
}

export interface ApplicantInfoCardProps {
  name: string;
  loanId: string;
  applicationDate: string;
  loanAmount: number;
  status: ApplicationStatus;
}

export interface LoanState {
  applications: LoanApplication[];
  selectedId: string | null;
}

export type LoanAction =
  | {
      type: "UPDATE_STATUS";
      payload: { id: string; status: ApplicationStatus; notes?: string };
    }
  | { type: "RESET"; payload: { id: string } }
  | { type: "RESET_ALL" }
  | { type: "SELECT"; payload: { id: string } }
  | { type: "DESELECT" };
