export interface Project {
  id: string;
  name: string;
  budget: number;
  progress: number;
  status: "on-track" | "behind" | "completed";
}

export interface KpiStat {
  label: string;
  value: string;
  change: string;
  changeColor: "blue" | "green" | "amber" | "red";
}

export interface Bid {
  id: string;
  company: string;
  rating: number;
  totalAmount: number;
  duration: number;
  isBestValue: boolean;
}

export interface BidLineItem {
  description: string;
  amounts: number[];
}

export interface DailyReport {
  id: string;
  date: string;
  project: string;
  superintendent: string;
  weather: "sunny" | "cloudy" | "rain";
  manpower: { trade: string; count: number }[];
  onSchedule: boolean;
  photos: string[];
}

export interface ScheduleItem {
  trade: string;
  startWeek: number;
  duration: number;
  color: string;
  isCriticalPath?: boolean;
}

export interface SovLineItem {
  description: string;
  scheduled: number;
  prior: number;
  thisPeriod: number;
  percentComplete: number;
}

export interface PayApp {
  id: string;
  number: number;
  subcontractor: string;
  project: string;
  status: "pending" | "approved" | "rejected";
  originalContract: number;
  changeOrders: number;
  revisedContract: number;
  retentionPercent: number;
  lineItems: SovLineItem[];
}

export interface EscrowAccount {
  project: string;
  owner: string;
  balance: number;
  funded: number;
  disbursed: number;
  retentionHeld: number;
}

export interface DrawStep {
  label: string;
  status: "completed" | "active" | "pending";
}

export interface ArchitectInspection {
  architect: string;
  inspectionDate: string;
  drawAmount: number;
  signOffMethod: string;
  status: string;
}

export interface LienWaiver {
  id: string;
  vendor: string;
  type: "Conditional" | "Unconditional";
  amount: number;
  status: "signed" | "pending";
  method: string;
}

export interface AccountingClient {
  name: string;
  projectCount: number;
  wipAmount: number;
  syncStatus: "synced" | "conflicts";
  conflictCount?: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}
