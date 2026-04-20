import type { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

interface MetricRowProps {
  label: string;
  value: string | number | ReactNode;
  icon?: ReactNode;
  className?: string;
}

/**
 * MetricRow — Key-value metric display in a horizontal row.
 * Used for displaying company stats like total seats, active seats, etc.
 */
const MetricRow = ({ label, value, icon, className }: MetricRowProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between py-2.5 border-b border-gray-50 last:border-b-0',
        className
      )}
    >
      <div className="flex items-center gap-2 text-text-secondary text-sm">
        {icon && <span className="flex-shrink-0 text-text-muted">{icon}</span>}
        <span>{label}</span>
      </div>
      <span className="text-sm font-semibold text-text-primary">{value}</span>
    </div>
  );
};

export default MetricRow;
