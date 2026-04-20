import type { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

/**
 * Card — Generic card wrapper with consistent padding, shadow, and border-radius.
 * Supports hover elevation effect when `hoverable` is true.
 */
const Card = ({ children, className, hoverable = true }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-card-white rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.05),0_2px_8px_rgba(0,0,0,0.03)] p-6',
        hoverable && 'transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
