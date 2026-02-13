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
