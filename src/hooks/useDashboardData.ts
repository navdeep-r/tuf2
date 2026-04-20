import { mockDashboardData } from '../data/mockDashboardData';
import type { DashboardData } from '../types/dashboard';

/**
 * Hook to access dashboard data.
 * Currently returns static mock data.
 * Can be extended to fetch from an API in the future.
 */
export const useDashboardData = (): DashboardData => {
  return mockDashboardData;
};
