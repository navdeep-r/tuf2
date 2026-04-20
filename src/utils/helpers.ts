/**
 * Merge class names, filtering out falsy values.
 */
export const cn = (...classes: (string | false | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ');
};
