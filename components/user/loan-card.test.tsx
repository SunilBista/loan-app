import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import * as utils from "@/lib/utils";
import "@testing-library/jest-dom";
import { LoanDetails } from "./loan-card";

vi.mock("lucide-react", () => ({
  DollarSign: () => <svg data-testid="icon-dollar" />,
  Target: () => <svg data-testid="icon-target" />,
  Calendar: () => <svg data-testid="icon-calendar" />,
}));

vi.mock("../ui/detail-item", () => ({
  DetailItem: ({ label, value }: any) => (
    <div data-testid={`detail-${label}`}>{`${label}: ${value}`}</div>
  ),
}));

describe("LoanDetails", () => {
  it("renders loan details with correct labels and formatted values", () => {
    const formatCurrencySpy = vi
      .spyOn(utils, "formatCurrency")
      .mockImplementation((value: number) => `$${value.toLocaleString()}`);

    const formatDateSpy = vi
      .spyOn(utils, "formatDate")
      .mockImplementation((date: string) => "Feb 14, 2026");

    const props = {
      loanAmount: 100000,
      loanPurpose: "Home Renovation",
      applicationDate: "2026-02-14",
    };

    render(<LoanDetails {...props} />);

    expect(screen.getByTestId("detail-Loan Amount")).toHaveTextContent(
      "Loan Amount: $100,000",
    );
    expect(screen.getByTestId("detail-Purpose")).toHaveTextContent(
      "Purpose: Home Renovation",
    );
    expect(screen.getByTestId("detail-Application Date")).toHaveTextContent(
      "Application Date: Feb 14, 2026",
    );

    formatCurrencySpy.mockRestore();
    formatDateSpy.mockRestore();
  });
});
