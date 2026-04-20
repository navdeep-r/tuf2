import type { CompanyInfo, CompanyMetrics } from '../../types/dashboard';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import MetricRow from '../ui/MetricRow';
import { Users, UserCheck, Activity } from 'lucide-react';

interface CustomerSummaryCardProps {
  company: CompanyInfo;
  metrics: CompanyMetrics;
}

/**
 * CustomerSummaryCard — Company identity with key metrics.
 * Height-aligned with ActivationCard via h-full + flex.
 */
const CustomerSummaryCard = ({ company, metrics }: CustomerSummaryCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      {/* Company header */}
      <div className="flex items-center gap-3 mb-5">
        <Avatar
          name={company.name}
          imageUrl={company.logoUrl}
          size="lg"
          className="bg-[#1A1A2E] text-white"
        />
        <div className="min-w-0">
          <h3 className="text-[15px] font-bold text-text-primary leading-tight">
            {company.name}
          </h3>
          <p className="text-xs text-text-muted mt-0.5">
            Joined {company.joinedDate}
          </p>
        </div>
        <div className="ml-auto flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse" title="Active" />
        </div>
      </div>

      {/* Metrics — flex-1 to fill remaining height */}
      <div className="flex-1 flex flex-col justify-center space-y-0">
        <MetricRow
          label="Total seats"
          value={metrics.totalSeats}
          icon={<Users size={14} />}
        />
        <MetricRow
          label="Active seats"
          value={metrics.activeSeats}
          icon={<UserCheck size={14} />}
        />
        <MetricRow
          label="Active last 7 days"
          value={metrics.activeLast7Days ? 'True' : 'False'}
          icon={<Activity size={14} />}
        />
      </div>
    </Card>
  );
};

export default CustomerSummaryCard;
