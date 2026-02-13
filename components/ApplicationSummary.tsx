"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { initialApplications } from "@/lib/mock-db";
import { CardDetailsType, colorClasses } from "@/lib/type";
import { formatCurrency } from "@/lib/utils";
import { DollarSign, FileText, Clock, Eye } from "lucide-react";

const CardDetails = ({
  title,
  number,
  icon,
  color = "blue",
}: CardDetailsType) => {
  return (
    <Card className="relative overflow-hidden bg-white  rounded-4xl border-0 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-600">
            {title}
          </CardTitle>
          <div
            className={`p-2 rounded-lg bg-linear-to-br ${colorClasses[color]} shadow-lg`}
          >
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-2xl font-bold text-gray-900 mb-1">{number}</div>
      </CardContent>
    </Card>
  );
};

export const ApplicationSummary = () => {
  const applications = initialApplications;

  const summary = applications.reduce(
    (acc, app) => {
      acc.totalApplications++;
      acc.totalLoanAmount += app.loanAmount;

      if (app.currentStatus === "Pending") {
        acc.pending++;
      }

      if (app.currentStatus === "Under Review") {
        acc.underReview++;
      }

      return acc;
    },
    {
      totalApplications: 0,
      pending: 0,
      underReview: 0,
      totalLoanAmount: 0,
    },
  );

  const cards = [
    {
      title: "Total Loan Pipeline",
      number: formatCurrency(summary.totalLoanAmount),
      icon: <DollarSign className="h-5 w-5 text-white" />,
      color: "green" as const,
    },
    {
      title: "Active Applications",
      number: summary.totalApplications,
      icon: <FileText className="h-5 w-5 text-white" />,
      color: "blue" as const,
    },
    {
      title: "Pending Review",
      number: summary.pending,
      icon: <Clock className="h-5 w-5 text-white" />,
      color: "orange" as const,
    },
    {
      title: "Under Review",
      number: summary.underReview,
      icon: <Eye className="h-5 w-5 text-white" />,
      color: "purple" as const,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <CardDetails key={card.title} {...card} />
      ))}
    </div>
  );
};
