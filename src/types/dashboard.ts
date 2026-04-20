/* ==========================================
   Type Definitions — Dashboard Data Model
   ========================================== */

export interface CompanyInfo {
  name: string;
  logoUrl?: string;
  joinedDate: string;
  industry?: string;
}

export interface CompanyMetrics {
  totalSeats: number;
  activeSeats: number;
  activeLast7Days: boolean;
}

export interface ActivationStep {
  label: string;
  percentage: number;
  color: string;
}

export interface ActivationData {
  overallPercentage: number;
  steps: ActivationStep[];
}

export interface MilestoneContact {
  name: string;
  email: string;
  avatarUrl?: string;
  timestamp: string;
}

export interface MilestoneDetail {
  label: string;
  value: string;
  isLink?: boolean;
}

export interface MilestoneEvent {
  type: string;
  contact: MilestoneContact;
  details: MilestoneDetail[];
}

export interface EnrichmentField {
  icon: string;
  label: string;
  value: string;
  isHighlight?: boolean;
}

export interface EnrichmentData {
  fields: EnrichmentField[];
}

export interface CRMCompanyRow {
  name: string;
  color: string;
  activeSeats: number;
  delta: number;
}

export interface CRMData {
  companies: CRMCompanyRow[];
}

export interface StatusFlag {
  label: string;
  value: string;
  variant: 'success' | 'info' | 'warning' | 'neutral';
}

export interface DashboardData {
  company: CompanyInfo;
  metrics: CompanyMetrics;
  activation: ActivationData;
  milestone: MilestoneEvent;
  enrichment: EnrichmentData;
  crm: CRMData;
  statusFlags: StatusFlag[];
}
