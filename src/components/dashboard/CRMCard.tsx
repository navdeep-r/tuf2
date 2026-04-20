import type { CRMData } from '../../types/dashboard';
import { formatDelta } from '../../utils/formatters';
import { Database, RefreshCw } from 'lucide-react';

interface CRMCardProps {
  crm: CRMData;
}

/**
 * CRMCard — CRM sync table showing company rows with active seats and deltas.
 * Positive deltas render green, negative render red.
 */
const CRMCard = ({ crm }: CRMCardProps) => {
  return (
    <div className="h-full flex flex-col">
      {/* Section header */}
      <h2 className="text-xl font-extrabold text-accent-purple mb-1">
        Integrated with your CRM
      </h2>
      <p className="text-[13px] text-text-secondary mb-5 leading-relaxed max-w-[380px]">
        Connect June to your CRM and sync product usage data with your CS and sales teams
      </p>

      {/* CRM table card */}
      <div className="bg-card-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-5 flex-1 transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
        {/* CRM header with icons */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-text-primary">CRM</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-light rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-110">
              <Database size={14} className="text-accent-blue" />
            </div>
            <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-110">
              <RefreshCw size={14} className="text-accent-red" />
            </div>
          </div>
        </div>

        {/* Table header */}
        <div className="flex items-center text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2 px-2">
          <span className="flex-1">Company</span>
          <span className="w-28 text-right">Active seats</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-1" />

        {/* Table rows */}
        <div>
          {crm.companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center py-3 px-2 border-b border-gray-50 last:border-b-0 
                         rounded-lg hover:bg-gray-50/60 transition-colors duration-200 cursor-default group"
            >
              {/* Company name with color dot */}
              <div className="flex items-center gap-2.5 flex-1">
                <div
                  className="w-3.5 h-3.5 rounded-[4px] flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: company.color }}
                />
                <span className="text-sm font-medium text-text-primary">
                  {company.name}
                </span>
              </div>

              {/* Seats + delta */}
              <div className="w-28 text-right flex items-center justify-end gap-2">
                <span className="text-sm font-bold text-text-primary tabular-nums">
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
