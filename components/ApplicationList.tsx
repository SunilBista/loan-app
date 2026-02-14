"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { StatusBadge } from "./ui/status-badge";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useLoanApplication } from "@/context/loan-application-context";

export function ApplicationList() {
  const { applications, selectApplication } = useLoanApplication();

  const handleApplicationClick = (id: string) => {
    selectApplication(id);
  };
  if (applications.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Loan Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            No loan applications found.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <div className="bg-white rounded-[10px] shadow-lg overflow-hidden border border-gray-100">
        <Table>
          <TableHeader className="h-20px text-base bg-gray-50">
            <TableRow className="bg-white-50 hover:bg-gray-50">
              <TableHead className="font-semibold text-gray-700 py-7">
                Loan ID
              </TableHead>
              <TableHead className="font-semibold text-gray-700 py-7">
                Applicant Name
              </TableHead>
              <TableHead className="font-semibold text-gray-700 py-7">
                Loan Amount
              </TableHead>
              <TableHead className="font-semibold text-gray-700 py-7">
                Application Date
              </TableHead>
              <TableHead className="font-semibold text-gray-700 py-7">
                Status
              </TableHead>
              <TableHead className="w-10">
                <span className="sr-only">View</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app, index) => (
              <TableRow
                key={index}
                className="cursor-pointer hover:bg-orange-50 transition-colors duration-150 group border-b border-gray-100"
                onClick={() => handleApplicationClick(app.id)}
                role="link"
                tabIndex={0}
                aria-label={`View details for ${app.applicantName}, ${app.id}`}
              >
                <TableCell className="font-mono text-sm font-medium text-(--primary-color) py-5">
                  {app.id}
                </TableCell>
                <TableCell className="font-medium text-gray-900 py-5">
                  <div className="flex items-center gap-3">
                    {app.applicantName}
                  </div>
                </TableCell>
                <TableCell className="font-medium text-gray-900 py-5">
                  {formatCurrency(app.loanAmount)}
                </TableCell>
                <TableCell className="font-medium text-gray-900 py-5">
                  {formatDate(app.applicationDate)}
                </TableCell>
                <TableCell className="py-5">
                  <StatusBadge status={app.currentStatus} />
                </TableCell>
                <TableCell className="py-5">
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-150" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
