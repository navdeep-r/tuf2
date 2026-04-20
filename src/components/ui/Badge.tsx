import type { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

type BadgeVariant = 'success' | 'info' | 'warning' | 'neutral' | 'purple' | 'teal';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  icon?: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  success: 'bg-mint text-accent-green',
  info: 'bg-blue-light text-accent-blue',
  warning: 'bg-amber-50 text-accent-orange',
  neutral: 'bg-gray-100 text-text-secondary',
  purple: 'bg-lavender text-accent-purple',
  teal: 'bg-teal-50 text-accent-teal',
};

/**
 * Badge — Pill-shaped label with color variants.
 * Used for status indicators, tags, and enrichment labels.
 */
const Badge = ({ children, variant = 'neutral', className, icon }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold',
        variantClasses[variant],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
