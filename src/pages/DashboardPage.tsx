/**
 * DashboardPage — Main layout grid for the SaaS dashboard.
 * Arranges all dashboard cards in a collage-style composition
 * matching the reference image's visual hierarchy.
 */

const DashboardPage = () => {
  return (
    <main className="min-h-screen bg-[#F8F7FC] px-6 py-10 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1320px]">
        {/* ===== Dashboard Grid ===== */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto auto auto auto',
          }}
        >
          {/* --- Row 1: IntroPanel + CustomerSummary + Activation --- */}

          {/* IntroPanel — spans 5 columns, 2 rows tall */}
          <div
            className="rounded-[var(--radius-card)] bg-lavender p-8 col-span-5 row-span-2 flex flex-col justify-center"
            style={{ gridColumn: '1 / 6', gridRow: '1 / 3' }}
          >
            <div className="text-accent-purple text-xs font-semibold uppercase tracking-wider mb-2">
              Placeholder
            </div>
            <h1 className="text-3xl font-bold text-text-primary leading-tight">
              IntroPanel
            </h1>
            <p className="text-text-secondary mt-2 text-sm">
              Card placeholder — will be replaced with the real component
            </p>
          </div>

          {/* CustomerSummaryCard — spans 4 columns */}
          <div
            className="rounded-[var(--radius-card)] bg-card-white shadow-[var(--shadow-card)] p-6"
            style={{ gridColumn: '6 / 10', gridRow: '1 / 2' }}
          >
            <h2 className="text-lg font-semibold text-text-primary">CustomerSummaryCard</h2>
            <p className="text-text-secondary text-sm mt-1">Placeholder</p>
          </div>

          {/* ActivationCard — spans 3 columns */}
          <div
            className="rounded-[var(--radius-card)] bg-card-white shadow-[var(--shadow-card)] p-6"
            style={{ gridColumn: '10 / 13', gridRow: '1 / 2' }}
          >
            <h2 className="text-lg font-semibold text-text-primary">ActivationCard</h2>
            <p className="text-text-secondary text-sm mt-1">Placeholder</p>
          </div>

          {/* --- Row 2: MilestonesCard (under intro bleed) + Enrichment --- */}

          {/* MilestonesCard — spans 5 columns, 2 rows */}
          <div
            className="rounded-[var(--radius-card)] bg-yellow-soft p-8"
            style={{ gridColumn: '1 / 6', gridRow: '3 / 5' }}
          >
            <h2 className="text-lg font-semibold text-text-primary">MilestonesCard</h2>
            <p className="text-text-secondary text-sm mt-1">Placeholder</p>
          </div>

          {/* EnrichmentCard — spans 7 columns */}
          <div
            className="rounded-[var(--radius-card)] bg-coral p-8"
            style={{ gridColumn: '6 / 13', gridRow: '2 / 4' }}
          >
            <h2 className="text-lg font-semibold text-text-primary">EnrichmentCard</h2>
            <p className="text-text-secondary text-sm mt-1">Placeholder</p>
          </div>

          {/* --- Row 3-4: CRM Card --- */}

          {/* CRMCard — right side, under enrichment */}
          <div
            className="rounded-[var(--radius-card)] bg-coral p-8"
            style={{ gridColumn: '6 / 13', gridRow: '4 / 5' }}
          >
            <h2 className="text-lg font-semibold text-text-primary">CRMCard</h2>
            <p className="text-text-secondary text-sm mt-1">Placeholder</p>
          </div>
        </div>

        {/* ===== Floating Status Chips ===== */}
        <div className="flex items-center gap-4 mt-8 justify-center flex-wrap">
          <div className="bg-blue-light text-accent-blue text-sm font-medium px-4 py-1.5 rounded-full">
            StatusChip: Last seen <span className="font-semibold">today</span>
          </div>
          <div className="bg-mint text-accent-green text-sm font-medium px-4 py-1.5 rounded-full">
            StatusChip: Activated <span className="font-semibold">true</span>
          </div>
        </div>

        {/* ===== Decorative "Also done for you" ===== */}
        <div className="mt-6 flex items-center gap-2 text-text-secondary">
          <span className="text-sm italic font-medium" style={{ fontFamily: 'cursive' }}>
            Also done for you
          </span>
          <span className="text-lg">↗</span>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
