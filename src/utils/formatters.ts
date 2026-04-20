/**
 * Format a number with locale-specific separators.
 */
export const formatNumber = (value: number): string => {
  return value.toLocaleString('en-US');
};

/**
 * Format a percentage value for display.
 */
export const formatPercentage = (value: number): string => {
  return `${value}%`;
};

/**
 * Generate initials from a name string.
 * e.g. "Intercom" → "I", "Eoghan McCabe" → "EM"
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
};

/**
 * Safely truncate text with ellipsis.
 */
export const truncate = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
};

/**
 * Format a delta value as a signed string.
 * e.g. 3 → "(+3)", -2 → "(-2)"
 */
export const formatDelta = (delta: number): string => {
  if (delta > 0) return `(+${delta})`;
  if (delta < 0) return `(${delta})`;
  return '(0)';
};
