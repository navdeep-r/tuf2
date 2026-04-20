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
    <main className="min-h-screen bg-[#F8F7FC] px-4 py-10 md:px-8 lg:px-14 xl:px-20">
      <div className="mx-auto max-w-[1280px]">

        {/* ===== Top Row: Intro + Summary + Activation ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-6">
          {/* IntroPanel — lavender block */}
          <div className="md:col-span-2 lg:col-span-5 bg-lavender rounded-2xl p-8 min-h-[240px] flex items-center">
            <IntroPanel />
          </div>

          {/* CustomerSummaryCard */}
          <div className="lg:col-span-4">
            <CustomerSummaryCard
              company={data.company}
              metrics={data.metrics}
            />
          </div>

          {/* ActivationCard */}
          <div className="lg:col-span-3">
            <ActivationCard activation={data.activation} />
          </div>
        </div>

        {/* ===== Bottom Row: Milestones + Enrichment/CRM ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* MilestonesCard — yellow block */}
          <div className="lg:col-span-5 bg-yellow-soft rounded-2xl p-8">
            <MilestonesCard milestone={data.milestone} />
          </div>

          {/* Right column: Enrichment + CRM stacked */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* EnrichmentCard — coral block */}
            <div className="bg-coral rounded-2xl p-8">
              <EnrichmentCard enrichment={data.enrichment} />
            </div>

            {/* CRMCard — coral block */}
            <div className="bg-coral rounded-2xl p-8">
              <CRMCard crm={data.crm} />
            </div>
          </div>
        </div>

        {/* ===== Floating Status Chips + Decorative Text ===== */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 px-2">
          {/* Decorative "Also done for you" */}
          <div className="flex items-end gap-1.5 order-2 sm:order-1">
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="text-text-muted">
              <path d="M2 28C8 20 20 8 38 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
              <path d="M32 2L38 4L34 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-text-muted" style={{ fontFamily: "'Caveat', 'Segoe Script', cursive", fontSize: '0.95rem' }}>
              Also done for you
            </span>
          </div>

          {/* Status chips — aligned right with grid */}
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
