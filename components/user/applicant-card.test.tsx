import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import * as utils from "@/lib/utils";
import { ApplicantDetails } from "./applicant-card";
import "@testing-library/jest-dom";

vi.mock("lucide-react", () => ({
  User: () => <svg data-testid="icon-user" />,
  DollarSign: () => <svg data-testid="icon-dollar" />,
  Briefcase: () => <svg data-testid="icon-briefcase" />,
  BarChart2: () => <svg data-testid="icon-bar" />,
}));

vi.mock("../ui/detail-item", () => ({
  DetailItem: ({ label, value }: any) => (
    <div data-testid={`detail-${label}`}>{`${label}: ${value}`}</div>
  ),
}));

describe("ApplicantDetails", () => {
  it("renders all applicant details with correct values", () => {
    const formatCurrencySpy = vi
      .spyOn(utils, "formatCurrency")
      .mockImplementation((value: number) => `$${value.toLocaleString()}`);

    const props = {
      name: "Sunil Bista",
      annualIncome: 75000,
      employmentStatus: "Employed",
      creditScore: 720,
    };

    render(<ApplicantDetails {...props} />);

    expect(screen.getByTestId("detail-Full Name")).toHaveTextContent(
      "Full Name: Sunil Bista",
    );
    expect(screen.getByTestId("detail-Annual Income")).toHaveTextContent(
      "Annual Income: $75,000",
    );
    expect(screen.getByTestId("detail-Employment Status")).toHaveTextContent(
      "Employment Status: Employed",
    );
    expect(screen.getByTestId("detail-Credit Score")).toHaveTextContent(
      "Credit Score: 720",
    );

    formatCurrencySpy.mockRestore();
  });
});
