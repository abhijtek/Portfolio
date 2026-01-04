export default function Layout({ children }) {
  return (
    <div className="flex justify-center">
      <main className="relative min-h-screen w-full max-w-6xl border-x border-[var(--border-primary)]">
        {/* subtle side pattern (optional visual polish) */}
        <div className="absolute inset-y-0 left-0 w-px bg-[var(--border-primary)]" />
        <div className="absolute inset-y-0 right-0 w-px bg-[var(--border-primary)]" />

        <div className="px-4 md:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
