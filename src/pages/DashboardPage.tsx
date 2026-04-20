/**
 * DashboardPage — Main layout grid for the SaaS dashboard.
 * Collage-style composition matching the reference image.
 */

import { useDashboardData } from '../hooks/useDashboardData';
import IntroPanel from '../components/dashboard/IntroPanel';
import CustomerSummaryCard from '../components/dashboard/CustomerSummaryCard';
import ActivationCard from '../components/dashboard/ActivationCard';
import MilestonesCard from '../components/dashboard/MilestonesCard';
import EnrichmentCard from '../components/dashboard/EnrichmentCard';
import CRMCard from '../components/dashboard/CRMCard';
import StatusChip from '../components/dashboard/StatusChip';

const DashboardPage = () => {
  const data = useDashboardData();

  return (
    <main className="min-h-screen bg-[#F8F7FC] px-4 py-8 md:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-[1280px]">

        {/* ===== Top Row: Intro + Summary + Activation ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-5">
          {/* IntroPanel — lavender block */}
          <div className="md:col-span-2 lg:col-span-5 bg-lavender rounded-[var(--radius-card)] p-8 md:p-10 min-h-[260px] flex items-center transition-all duration-300">
            <IntroPanel />
          </div>

          {/* CustomerSummaryCard */}
          <div className="lg:col-span-4 transition-all duration-300">
            <CustomerSummaryCard
              company={data.company}
              metrics={data.metrics}
            />
          </div>

          {/* ActivationCard */}
          <div className="lg:col-span-3 transition-all duration-300">
            <ActivationCard activation={data.activation} />
          </div>
        </div>

        {/* ===== Bottom Row: Milestones + Enrichment/CRM ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* MilestonesCard — yellow block */}
          <div className="lg:col-span-5 bg-yellow-soft rounded-[var(--radius-card)] p-8 transition-all duration-300">
            <MilestonesCard milestone={data.milestone} />
          </div>

          {/* Right column: Enrichment + CRM stacked */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* EnrichmentCard — coral block */}
            <div className="bg-coral rounded-[var(--radius-card)] p-8 transition-all duration-300">
              <EnrichmentCard enrichment={data.enrichment} />
            </div>

            {/* CRMCard — coral block */}
            <div className="bg-coral rounded-[var(--radius-card)] p-8 transition-all duration-300">
              <CRMCard crm={data.crm} />
            </div>
          </div>
        </div>

        {/* ===== Floating Status Chips + Decorative Text ===== */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Decorative "Also done for you" */}
          <div className="flex items-end gap-1.5 order-2 sm:order-1">
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="text-text-secondary">
              <path d="M2 28C8 20 20 8 38 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
              <path d="M32 2L38 4L34 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm text-text-secondary" style={{ fontFamily: "'Caveat', 'Segoe Script', cursive", fontSize: '1rem' }}>
              Also done for you
            </span>
          </div>

          {/* Status chips */}
          <div className="flex items-center gap-3 flex-wrap order-1 sm:order-2 sm:ml-auto">
            {data.statusFlags.map((flag) => (
              <StatusChip key={flag.label} flag={flag} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
