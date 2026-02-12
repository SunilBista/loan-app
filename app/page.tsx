export default function Home() {
  return (
    <div className="min-h-screen bg-muted/40">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="mx-auto flex max-w-6xl items-center px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-lg font-semibold leading-tight text-foreground">
                Loan Applications
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-background p-10 text-center ">
          <h2 className="text-xl font-semibold text-foreground">
            Welcome to the Loan List
          </h2>
        </div>
      </main>
    </div>
  );
}
