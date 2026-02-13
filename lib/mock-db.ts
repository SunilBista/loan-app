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

export const mockStatusEvents = [
  {
    status: "Pending" as ApplicationStatus,
    message: "Application submitted successfully.",
    timestamp: "2026-02-10 09:30 AM",
  },
  {
    status: "Under Review" as ApplicationStatus,
    message: "Your application is being reviewed by the team.",
    timestamp: "2026-02-11 02:15 PM",
  },
  {
    status: "Approved" as ApplicationStatus,
    message: "Congratulations! Your application has been approved.",
    timestamp: "2026-02-12 11:00 AM",
  },
  {
    status: "Rejected" as ApplicationStatus,
    message: "We regret to inform you that your application has been rejected.",
    timestamp: "2026-02-12 11:00 AM",
  },
];
