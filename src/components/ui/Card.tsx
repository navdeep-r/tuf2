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
        'bg-card-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-6',
        hoverable && 'transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
