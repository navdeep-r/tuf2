/**
 * DashboardPage — Strict 3-column grid layout.
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
    <main className="min-h-screen bg-[#F8F7FC] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      
      {/* ===== Strict 3-column grid ===== */}
      <div className="grid grid-cols-1 gap-4 max-w-[1200px] mx-auto md:grid-cols-2 lg:gap-5 xl:grid-cols-3">
        
        {/* ROW 1 */}
        {/* Col 1 */}
        <div className="col-span-1 w-full h-full min-h-[230px] bg-lavender rounded-2xl p-5">
          <IntroPanel
            reportsThisWeek={32}
            activeWorkflows={6}
          />
        </div>

        {/* Col 2 */}
        <div className="col-span-1 w-full h-full min-h-[230px]">
          <CustomerSummaryCard
            company={data.company}
            metrics={data.metrics}
          />
        </div>

        {/* Col 3 */}
        <div className="col-span-1 w-full h-full min-h-[230px]">
          <ActivationCard activation={data.activation} totalSeats={data.metrics.totalSeats} />
        </div>

        {/* ROW 2 */}
        {/* Col 1 */}
        <div className="col-span-1 w-full h-full min-h-[290px] bg-yellow-soft rounded-2xl p-5">
          <MilestonesCard milestone={data.milestone} />
        </div>

        {/* Col 2 */}
        <div className="col-span-1 w-full h-full min-h-[290px] bg-coral rounded-2xl p-5">
          <EnrichmentCard enrichment={data.enrichment} />
        </div>

        {/* Col 3 */}
        <div className="col-span-1 w-full h-full min-h-[290px] bg-coral rounded-2xl p-5">
          <CRMCard crm={data.crm} />
        </div>

      </div>

      {/* ===== Status Strip ===== */}
      <div className="mt-4 max-w-[1200px] mx-auto bg-card-white rounded-2xl border border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.05)] p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-end gap-1.5">
              <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="text-gray-400">
            <path d="M2 28C8 20 20 8 38 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
            <path d="M32 2L38 4L34 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-500 text-sm" style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}>
                Also done for you
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Live account checks and lifecycle updates powered by your workspace data.</p>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap items-center gap-2.5 sm:justify-end">
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
