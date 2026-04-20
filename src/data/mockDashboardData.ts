import type { DashboardData } from '../types/dashboard';

/**
 * Mock dashboard data — realistic Intercom-style customer intelligence.
 * Single source of truth for all dashboard card content.
 */
export const mockDashboardData: DashboardData = {
  company: {
    name: 'Intercom',
    logoUrl: undefined, // Will trigger initials fallback
    joinedDate: '9 Feb 2023',
    industry: 'SaaS',
  },

  metrics: {
    totalSeats: 50,
    activeSeats: 22,
    activeLast7Days: true,
  },

  activation: {
    overallPercentage: 40,
    steps: [
      { label: 'Signed up', percentage: 100, color: '#22C55E' },
      { label: 'Setup', percentage: 80, color: '#3B82F6' },
      { label: 'Aha moment', percentage: 60, color: '#3B82F6' },
      { label: 'Activated', percentage: 40, color: '#F59E0B' },
      { label: 'Active', percentage: 80, color: '#3B82F6' },
    ],
  },

  milestone: {
    type: 'Qualified signup',
    contact: {
      name: 'Eoghan McCabe',
      email: 'eoghan@intercom.io',
      avatarUrl: undefined,
      timestamp: '10:38 AM',
    },
    details: [
      { label: 'Company name:', value: 'Intercom' },
      { label: 'Location:', value: 'Dublin, Ireland' },
      { label: 'Role:', value: 'CTO & Co-Founder' },
      { label: 'Company website:', value: 'intercom.io', isLink: true },
      { label: 'Company size:', value: '800' },
      { label: 'LinkedIn:', value: 'View profile', isLink: true },
      { label: 'Funding amount:', value: '$241M' },
      { label: 'Crunchbase:', value: 'View company', isLink: true },
    ],
  },

  enrichment: {
    fields: [
      { icon: 'globe', label: 'Website', value: 'intercom.io' },
      { icon: 'map-pin', label: 'Location', value: 'Dublin, Ireland' },
      { icon: 'users', label: 'Employees', value: '800' },
      { icon: 'twitter', label: 'Twitter', value: '@intercom' },
      { icon: 'dollar-sign', label: 'Funding', value: '$241M' },
      { icon: 'check-circle', label: 'Qualified', value: 'true', isHighlight: true },
    ],
  },

  crm: {
    companies: [
      { name: 'Intercom', color: '#1A1A2E', activeSeats: 22, delta: 3 },
      { name: 'Amie', color: '#EF4444', activeSeats: 20, delta: -2 },
    ],
  },

  statusFlags: [
    { label: 'Last seen', value: 'today', variant: 'info' },
    { label: 'Activated', value: 'true', variant: 'success' },
  ],
};
