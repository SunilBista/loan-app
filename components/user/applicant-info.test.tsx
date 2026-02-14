import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import * as utils from "@/lib/utils";
import "@testing-library/jest-dom";
import { ApplicantInfoCard } from "./applicant-info";
import { ApplicantInfoCardProps } from "@/lib/type";

vi.mock("@/components/ui/card", () => ({
  Card: ({ children }: any) => <div data-testid="card">{children}</div>,
  CardHeader: ({ children }: any) => (
    <div data-testid="card-header">{children}</div>
  ),
  CardTitle: ({ children }: any) => (
    <h2 data-testid="card-title">{children}</h2>
  ),
  CardDescription: ({ children }: any) => (
    <p data-testid="card-description">{children}</p>
  ),
  CardAction: ({ children }: any) => (
    <div data-testid="card-action">{children}</div>
  ),
}));

vi.mock("../ui/status-badge", () => ({
  StatusBadge: ({ status }: any) => (
    <span data-testid="status-badge">{status}</span>
  ),
}));

describe("ApplicantInfoCard", () => {
  it("renders applicant details correctly", () => {
    const formatCurrencySpy = vi
      .spyOn(utils, "formatCurrency")
      .mockImplementation((value: number) => `$${value.toLocaleString()}`);

    const props: ApplicantInfoCardProps = {
      name: "Alice Smith",
      loanId: "LN12345",
      applicationDate: "2026-02-14",
      loanAmount: 50000,
      status: "Pending",
    };

    render(<ApplicantInfoCard {...props} />);

    expect(screen.getByTestId("card-title")).toHaveTextContent("Alice Smith");

    expect(screen.getByTestId("card-description")).toHaveTextContent(
      "LN12345 • 2026-02-14",
    );

    expect(screen.getByText("$50,000")).toBeInTheDocument();

    expect(screen.getByTestId("status-badge")).toHaveTextContent("Pending");

    formatCurrencySpy.mockRestore();
  });
});
