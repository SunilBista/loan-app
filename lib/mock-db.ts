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

export const initialApplications: LoanApplication[] = [
  {
    id: "APP-2024-001",
    applicantName: "Sarah Mitchell",
    loanAmount: 25000,
    loanPurpose: "Home Purchase",
    annualIncome: 95000,
    employmentStatus: "Full-time",
    creditScore: 720,
    applicationDate: "2024-12-15",
    currentStatus: "Pending",
    statusHistory: [
      {
        status: "Pending",
        timestamp: "2024-12-15T09:30:00Z",
        notes: "Application submitted",
      },
    ],
  },
  {
    id: "APP-2024-002",
    applicantName: "John Doe",
    loanAmount: 15000,
    loanPurpose: "Car Purchase",
    annualIncome: 60000,
    employmentStatus: "Full-time",
    creditScore: 680,
    applicationDate: "2024-12-16",
    currentStatus: "Pending",
    statusHistory: [
      {
        status: "Pending",
        timestamp: "2024-12-16T09:30:00Z",
        notes: "Application submitted",
      },
    ],
  },
  {
    id: "APP-2024-003",
    applicantName: "Emily Davis",
    loanAmount: 55000,
    loanPurpose: "Home Purchase",
    annualIncome: 110000,
    employmentStatus: "Full-time",
    creditScore: 520,
    applicationDate: "2024-12-15",
    currentStatus: "Pending",
    statusHistory: [
      {
        status: "Pending",
        timestamp: "2024-12-15T09:30:00Z",
        notes: "Application submitted",
      },
    ],
  },
  {
    id: "APP-2024-004",
    applicantName: "Michael Johnson",
    loanAmount: 30000,
    loanPurpose: "Business Expansion",
    annualIncome: 85000,
    employmentStatus: "Full-time",
    creditScore: 420,
    applicationDate: "2024-12-15",
    currentStatus: "Pending",
    statusHistory: [
      {
        status: "Pending",
        timestamp: "2024-12-15T09:30:00Z",
        notes: "Application submitted",
      },
    ],
  },
];
