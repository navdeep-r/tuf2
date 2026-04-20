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
 * Shows company logo/initials, name, join date, and seat counts.
 */
const CustomerSummaryCard = ({ company, metrics }: CustomerSummaryCardProps) => {
  return (
    <Card className="h-full">
      {/* Company header */}
      <div className="flex items-center gap-3 mb-5">
        <Avatar
          name={company.name}
          imageUrl={company.logoUrl}
          size="lg"
        />
        <div>
          <h3 className="text-base font-bold text-text-primary">{company.name}</h3>
          <p className="text-xs text-text-muted">
            Joined {company.joinedDate}
          </p>
        </div>
        {/* Active dot indicator */}
        <div className="ml-auto">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-green" title="Active" />
        </div>
      </div>

      {/* Metrics */}
      <div>
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
