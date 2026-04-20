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
 * Consistent padding and border styling.
 */
const MetricRow = ({ label, value, icon, className }: MetricRowProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0',
        className
      )}
    >
      <div className="flex items-center gap-2 text-gray-500 text-[13px]">
        {icon && <span className="flex-shrink-0 text-gray-400">{icon}</span>}
        <span>{label}</span>
      </div>
      <span className="text-[13px] font-bold text-text-primary tabular-nums">{value}</span>
    </div>
  );
};

export default MetricRow;
