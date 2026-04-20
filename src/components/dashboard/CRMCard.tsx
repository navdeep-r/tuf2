import type { CRMData } from '../../types/dashboard';
import { formatDelta } from '../../utils/formatters';
import { RefreshCw } from 'lucide-react';

interface CRMCardProps {
  crm: CRMData;
}

/**
 * CRMCard — CRM sync table showing company rows with active seats and deltas.
 * Positive deltas show green, negative show red.
 */
const CRMCard = ({ crm }: CRMCardProps) => {
  return (
    <div className="h-full flex flex-col">
      {/* Section header */}
      <h2 className="text-xl font-bold text-accent-purple mb-1">
        Integrated with your CRM
      </h2>
      <p className="text-sm text-text-secondary mb-5 leading-relaxed">
        Connect June to your CRM and sync product usage data
        <br />
        with your CS and sales teams
      </p>

      {/* CRM table card */}
      <div className="bg-card-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-5 flex-1">
        {/* CRM header with icons */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-text-primary">CRM</span>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-lavender rounded-md flex items-center justify-center">
              <RefreshCw size={14} className="text-accent-purple" />
            </div>
            <div className="w-7 h-7 bg-coral rounded-md flex items-center justify-center">
              <RefreshCw size={14} className="text-accent-red" />
            </div>
          </div>
        </div>

        {/* Table header */}
        <div className="flex items-center text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2 px-1">
          <span className="flex-1">Company</span>
          <span className="w-24 text-right">Active seats</span>
        </div>

        {/* Table rows */}
        <div className="space-y-0">
          {crm.companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center py-2.5 px-1 border-b border-gray-50 last:border-b-0 
                         rounded-lg hover:bg-gray-50/50 transition-colors duration-200 cursor-default"
            >
              {/* Company name with color dot */}
              <div className="flex items-center gap-2 flex-1">
                <div
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: company.color }}
                />
                <span className="text-sm font-medium text-text-primary">
                  {company.name}
                </span>
              </div>

              {/* Seats + delta */}
              <div className="w-24 text-right flex items-center justify-end gap-1.5">
                <span className="text-sm font-semibold text-text-primary">
                  {company.activeSeats}
                </span>
                <span
                  className={`text-xs font-semibold ${
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
