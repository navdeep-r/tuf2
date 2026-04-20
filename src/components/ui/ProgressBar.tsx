import { useEffect, useState } from 'react';
import { cn } from '../../utils/helpers';

interface ProgressBarProps {
  percentage: number;
  color?: string;
  height?: 'sm' | 'md';
  animated?: boolean;
  className?: string;
}

const heightClasses = {
  sm: 'h-1.5',
  md: 'h-2.5',
};

/**
 * ProgressBar — Horizontal bar with fill percentage and color.
 * Animates from 0 to target value on mount when `animated` is true.
 */
const ProgressBar = ({
  percentage,
  color = '#3B82F6',
  height = 'md',
  animated = true,
  className,
}: ProgressBarProps) => {
  const [width, setWidth] = useState(animated ? 0 : percentage);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setWidth(percentage), 100);
      return () => clearTimeout(timer);
    }
  }, [percentage, animated]);

  return (
    <div
      className={cn(
        'w-full rounded-full bg-gray-100 overflow-hidden',
        heightClasses[height],
        className
      )}
    >
      <div
        className="h-full rounded-full transition-all duration-500 ease-out"
        style={{
          width: `${Math.min(width, 100)}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ProgressBar;
