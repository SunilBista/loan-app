import { ApplicationStatus, LoanApplication } from "./type";

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
    currentStatus: "Under Review",
    statusHistory: [
      {
        status: "Pending",
        timestamp: "2024-12-15T09:30:00Z",
        notes: "Application submitted successfully.",
      },
      {
        status: "Under Review",
        timestamp: "2024-12-15T09:30:00Z",
        notes: "Application is being reviewed by the officer.",
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
        notes: "Application submitted successfully.",
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
        notes: "Application submitted successfully.",
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
        notes: "Application submitted successfully.",
      },
    ],
  },
];

export const DEFAULT_STATUS_NOTES: Record<ApplicationStatus, string> = {
  Pending: "Application submitted successfully.",
  "Under Review": "Application is being reviewed by the officer.",
  Approved: "Application approved by the officer.",
  Rejected: "Application rejected by the officer.",
};

export const VALID_TRANSITIONS: Record<ApplicationStatus, ApplicationStatus[]> =
  {
    Pending: ["Under Review"],
    "Under Review": ["Approved", "Rejected"],
    Approved: [],
    Rejected: [],
  };
