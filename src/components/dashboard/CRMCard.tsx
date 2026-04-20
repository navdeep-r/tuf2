import type { CRMData } from '../../types/dashboard';
import { formatDelta } from '../../utils/formatters';
import { Database, RefreshCw } from 'lucide-react';

interface CRMCardProps {
  crm: CRMData;
}

/**
 * CRMCard — flex justify-between rows, py-3 per row, numbers right-aligned.
 */
const CRMCard = ({ crm }: CRMCardProps) => {
  const totalSeats = crm.companies.reduce((sum, company) => sum + company.activeSeats, 0);
  const netDelta = crm.companies.reduce((sum, company) => sum + company.delta, 0);

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-[1.1rem] font-extrabold text-accent-purple mb-1">
        Integrated with your CRM
      </h2>
      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
        Connect June to your CRM and sync product usage data with your CS and sales teams
      </p>

      <div className="bg-card-white rounded-2xl shadow-md border border-gray-100 p-5 flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-text-primary">CRM</span>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-light rounded-lg flex items-center justify-center">
              <Database size={13} className="text-accent-blue" />
            </div>
            <div className="w-7 h-7 bg-coral rounded-lg flex items-center justify-center">
              <RefreshCw size={13} className="text-accent-red" />
            </div>
          </div>
        </div>

        {/* Table header */}
        <div className="flex justify-between text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2 px-1">
          <span>Company</span>
          <span>Active seats</span>
        </div>

        <div className="border-t border-gray-100 mb-1" />

        <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2 mb-2 text-[11px]">
          <span className="text-gray-500">{crm.companies.length} accounts</span>
          <span className="font-semibold text-text-primary">{totalSeats} seats</span>
          <span className={netDelta >= 0 ? 'font-semibold text-accent-green' : 'font-semibold text-accent-red'}>
            {formatDelta(netDelta)} net
          </span>
        </div>

        {/* Rows — py-2, flex justify-between */}
        <div className="space-y-0.5">
          {crm.companies.map((company) => (
            <div
              key={company.name}
              className="flex justify-between items-center py-2 px-1 rounded-xl hover:bg-gray-50/60 transition-colors duration-200 cursor-default"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-3.5 h-3.5 rounded-[4px] flex-shrink-0"
                  style={{ backgroundColor: company.color }}
                />
                <span className="text-[13px] font-medium text-text-primary">
                  {company.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[13px] font-bold text-text-primary tabular-nums">
                  {company.activeSeats}
                </span>
                <span
                  className={`text-xs font-bold tabular-nums ${
                    company.delta > 0 ? 'text-accent-green' : 'text-accent-red'
                  }`}
                >
                  {formatDelta(company.delta)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CRMCard;
