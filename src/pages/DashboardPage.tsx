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
    <main className="min-h-screen bg-[#F8F7FC] px-4 py-10">
      
      {/* ===== Strict 3-column grid ===== */}
      <div className="grid grid-cols-3 gap-4 max-w-[1200px] mx-auto">
        
        {/* ROW 1 */}
        {/* Col 1 */}
        <div className="col-span-1 w-full h-full bg-lavender rounded-2xl p-5 flex flex-col justify-center">
          <IntroPanel />
        </div>

        {/* Col 2 */}
        <div className="col-span-1 w-full h-full">
          <CustomerSummaryCard
            company={data.company}
            metrics={data.metrics}
          />
        </div>

        {/* Col 3 */}
        <div className="col-span-1 w-full h-full">
          <ActivationCard activation={data.activation} />
        </div>

        {/* ROW 2 */}
        {/* Col 1 */}
        <div className="col-span-1 w-full h-full bg-yellow-soft rounded-2xl p-5">
          <MilestonesCard milestone={data.milestone} />
        </div>

        {/* Col 2 */}
        <div className="col-span-1 w-full h-full bg-coral rounded-2xl p-5">
          <EnrichmentCard enrichment={data.enrichment} />
        </div>

        {/* Col 3 */}
        <div className="col-span-1 w-full h-full bg-coral rounded-2xl p-5">
          <CRMCard crm={data.crm} />
        </div>

      </div>

      {/* ===== Status Chips — BELOW the grid ===== */}
      <div className="flex items-center gap-3 mt-4 max-w-[1200px] mx-auto">
        {/* Decorative "Also done for you" */}
        <div className="flex items-end gap-1.5 mr-auto">
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="text-gray-400">
            <path d="M2 28C8 20 20 8 38 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
            <path d="M32 2L38 4L34 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-gray-500 text-sm" style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}>
            Also done for you
          </span>
        </div>

        {/* Chips */}
        {data.statusFlags.map((flag) => (
          <StatusChip key={flag.label} flag={flag} />
        ))}
      </div>
    </main>
  );
};

export default DashboardPage;
