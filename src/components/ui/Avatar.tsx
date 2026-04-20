import { cn } from '../../utils/helpers';
import { getInitials } from '../../utils/formatters';

interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
};

/**
 * Avatar — Circular image with initials fallback.
 * Falls back to initials derived from the name when no image is available.
 */
const Avatar = ({ name, imageUrl, size = 'md', className }: AvatarProps) => {
  const initials = getInitials(name);

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={name}
        className={cn(
          'rounded-full object-cover flex-shrink-0',
          sizeClasses[size],
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center font-semibold flex-shrink-0',
        'bg-lavender text-accent-purple',
        sizeClasses[size],
        className
      )}
      aria-label={name}
    >
      {initials}
    </div>
  );
};

export default Avatar;
