import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Loan Application Dashboard",
  description: "Dashboard for managing loan applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-helvetica antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
