import { ApplicationList } from "@/components/ApplicationList";
import { ApplicationSummary } from "@/components/ApplicationSummary";
import { Building2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-blue-100">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-(--primary-color) rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight text-gray-900">
                UmeLoans
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="font-semibold">Sunil Bista</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-(--primary-color) rounded-full flex items-center justify-center text-white text-sm font-medium">
                SB
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="">
            <ApplicationSummary />
          </div>

          <div className="">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Application Dashboard
            </h2>
            <p className="text-gray-600 mb-6">
              Monitor and manage loan applications in real-time
            </p>
            <ApplicationList />
          </div>
        </div>
      </main>
    </div>
  );
}
