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
 * Used for "Last seen today", "Activated true" style chips.
 */
const StatusChip = ({ flag, className }: StatusChipProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium',
        'transition-transform duration-200 hover:scale-105 cursor-default',
        variantClasses[flag.variant],
        className
      )}
    >
      {/* Arrow indicator */}
      <span className="text-xs">←</span>
      <span>{flag.label}</span>
      <span className="font-bold">{flag.value}</span>
    </div>
  );
};

export default StatusChip;
