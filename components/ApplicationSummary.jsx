"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { initialApplications } from "@/lib/mock-db";
import { formatCurrency } from "@/lib/utils";
import { DollarSign, FileText, Clock, Eye } from "lucide-react";

const CardDetails = (title, number, icon, color = "blue") => {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    orange: "from-orange-500 to-orange-600",
    purple: "from-purple-500 to-purple-600",
  };

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
  const application = initialApplications;
  const totalApplication = application.length;
  const pendingApplications = application.filter(
    (app) => app.currentStatus === "Pending",
  ).length;
  const underReviewApplications = application.filter(
    (app) => app.currentStatus === "Under Review",
  ).length;
  const totalLoanAmount = application.reduce(
    (sum, app) => sum + app.loanAmount,
    0,
  );

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {CardDetails(
        "Total Loan Pipeline",
        formatCurrency(totalLoanAmount),
        <DollarSign className="h-5 w-5 text-white" />,
        "green",
      )}
      {CardDetails(
        "Active Applications",
        totalApplication,
        <FileText className="h-5 w-5 text-white" />,
        "blue",
      )}
      {CardDetails(
        "Pending Review",
        pendingApplications,
        <Clock className="h-5 w-5 text-white" />,
        "orange",
      )}
      {CardDetails(
        "Under Review",
        underReviewApplications,
        <Eye className="h-5 w-5 text-white" />,
        "purple",
      )}
    </div>
  );
};
