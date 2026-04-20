import type { StatusFlag } from '../../types/dashboard';
import { cn } from '../../utils/helpers';

interface StatusChipProps {
  flag: StatusFlag;
  className?: string;
}

const variantClasses = {
  success: 'bg-mint text-accent-green',
  info: 'bg-blue-light text-accent-blue',
  warning: 'bg-amber-50 text-accent-orange',
  neutral: 'bg-gray-100 text-text-secondary',
};

/**
 * StatusChip — Floating pill-shaped status indicator.
 * Consistent sizing and spacing with the grid.
 */
const StatusChip = ({ flag, className }: StatusChipProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium',
        'transition-all duration-200 hover:scale-105 cursor-default',
        'shadow-[0_1px_4px_rgba(0,0,0,0.05)]',
        variantClasses[flag.variant],
        className
      )}
    >
      <span className="text-xs opacity-60">←</span>
      <span>{flag.label}</span>
      <span className="font-bold">{flag.value}</span>
    </div>
  );
};

export default StatusChip;
