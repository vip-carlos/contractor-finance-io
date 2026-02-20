import {
  Project,
  KpiStat,
  Bid,
  BidLineItem,
  DailyReport,
  ScheduleItem,
  PayApp,
  EscrowAccount,
  DrawStep,
  ArchitectInspection,
  LienWaiver,
  AccountingClient,
  NavItem,
} from "./types";

/* ─── Navigation ─── */
export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Bidding", href: "/bidding", icon: "Gavel" },
  { label: "Daily Reports", href: "/daily-reports", icon: "ClipboardList" },
  { label: "Schedule", href: "/schedule", icon: "CalendarRange" },
  { label: "Pay Apps", href: "/pay-apps", icon: "Receipt" },
  { label: "Escrow", href: "/escrow", icon: "Landmark" },
  { label: "Accounting", href: "/accounting", icon: "Calculator" },
  { label: "Lien Waivers", href: "/lien-waivers", icon: "FileCheck" },
  { label: "System", href: "/system", icon: "Settings" },
];

/* ─── Dashboard KPIs ─── */
export const kpiStats: KpiStat[] = [
  {
    label: "Active Projects",
    value: "12",
    change: "+2 this month",
    changeColor: "blue",
  },
  {
    label: "Total Contract Value",
    value: "$4.2M",
    change: "+12% vs last quarter",
    changeColor: "green",
  },
  {
    label: "Open Pay Apps",
    value: "8",
    change: "3 pending approval",
    changeColor: "amber",
  },
  {
    label: "Cash Position",
    value: "$892K",
    change: "-5% this week",
    changeColor: "red",
  },
];

/* ─── Projects ─── */
export const projects: Project[] = [
  {
    id: "p1",
    name: "Riverside Office Complex",
    budget: 2400000,
    progress: 68,
    status: "on-track",
  },
  {
    id: "p2",
    name: "Harbor View Condos",
    budget: 1800000,
    progress: 42,
    status: "behind",
  },
  {
    id: "p3",
    name: "Greenfield Elementary",
    budget: 950000,
    progress: 100,
    status: "completed",
  },
  {
    id: "p4",
    name: "Metro Transit Hub",
    budget: 3200000,
    progress: 25,
    status: "on-track",
  },
  {
    id: "p5",
    name: "Lakewood Medical Center",
    budget: 5100000,
    progress: 15,
    status: "on-track",
  },
];

/* ─── Bid Comparison ─── */
export const bids: Bid[] = [
  {
    id: "b1",
    company: "Apex Builders",
    rating: 4.8,
    totalAmount: 1240000,
    duration: 14,
    isBestValue: true,
  },
  {
    id: "b2",
    company: "Summit Construction",
    rating: 4.5,
    totalAmount: 1180000,
    duration: 16,
    isBestValue: false,
  },
  {
    id: "b3",
    company: "CoreBuild Inc.",
    rating: 4.2,
    totalAmount: 1320000,
    duration: 12,
    isBestValue: false,
  },
];

export const bidLineItems: BidLineItem[] = [
  { description: "General Conditions", amounts: [124000, 118000, 132000] },
  { description: "Site Work", amounts: [186000, 177000, 198000] },
  { description: "Concrete", amounts: [248000, 236000, 264000] },
  { description: "Structural Steel", amounts: [310000, 295000, 330000] },
  { description: "MEP Systems", amounts: [248000, 236000, 264000] },
  { description: "Finishes", amounts: [124000, 118000, 132000] },
];

/* ─── Daily Reports ─── */
export const dailyReports: DailyReport[] = [
  {
    id: "dr1",
    date: "2026-02-20",
    project: "Riverside Office Complex",
    superintendent: "Mike Torres",
    weather: "sunny",
    manpower: [
      { trade: "Electricians", count: 6 },
      { trade: "Plumbers", count: 4 },
      { trade: "Iron Workers", count: 8 },
      { trade: "Laborers", count: 12 },
    ],
    onSchedule: true,
    photos: ["/images/site1.jpg", "/images/site2.jpg"],
  },
  {
    id: "dr2",
    date: "2026-02-19",
    project: "Harbor View Condos",
    superintendent: "Sarah Chen",
    weather: "cloudy",
    manpower: [
      { trade: "Carpenters", count: 10 },
      { trade: "Electricians", count: 4 },
      { trade: "Laborers", count: 8 },
    ],
    onSchedule: false,
    photos: ["/images/site3.jpg"],
  },
  {
    id: "dr3",
    date: "2026-02-18",
    project: "Metro Transit Hub",
    superintendent: "James Rodriguez",
    weather: "rain",
    manpower: [
      { trade: "Concrete Finishers", count: 6 },
      { trade: "Laborers", count: 4 },
    ],
    onSchedule: true,
    photos: [],
  },
];

/* ─── Schedule (Gantt) ─── */
export const scheduleItems: ScheduleItem[] = [
  {
    trade: "Excavation",
    startWeek: 1,
    duration: 3,
    color: "#D97706",
    isCriticalPath: true,
  },
  {
    trade: "Foundation",
    startWeek: 3,
    duration: 4,
    color: "#6B7280",
    isCriticalPath: true,
  },
  {
    trade: "Structural Steel",
    startWeek: 6,
    duration: 5,
    color: "#0A84FF",
    isCriticalPath: true,
  },
  {
    trade: "Rough MEP",
    startWeek: 8,
    duration: 6,
    color: "#10B981",
    isCriticalPath: false,
  },
  {
    trade: "Exterior Envelope",
    startWeek: 10,
    duration: 4,
    color: "#8B5CF6",
    isCriticalPath: false,
  },
  {
    trade: "Interior Framing",
    startWeek: 12,
    duration: 4,
    color: "#F59E0B",
    isCriticalPath: false,
  },
  {
    trade: "Finish MEP",
    startWeek: 14,
    duration: 4,
    color: "#10B981",
    isCriticalPath: true,
  },
  {
    trade: "Finishes",
    startWeek: 16,
    duration: 5,
    color: "#EC4899",
    isCriticalPath: true,
  },
  {
    trade: "Punchlist & Close",
    startWeek: 20,
    duration: 2,
    color: "#EF4444",
    isCriticalPath: true,
  },
];

/* ─── Pay Application (SOV) ─── */
export const payApps: PayApp[] = [
  {
    id: "pa1",
    number: 7,
    subcontractor: "Torres Electrical LLC",
    project: "Riverside Office Complex",
    status: "pending",
    originalContract: 485000,
    changeOrders: 32000,
    revisedContract: 517000,
    retentionPercent: 10,
    lineItems: [
      {
        description: "Rough-in Wiring",
        scheduled: 120000,
        prior: 96000,
        thisPeriod: 18000,
        percentComplete: 95,
      },
      {
        description: "Panel Installation",
        scheduled: 85000,
        prior: 42500,
        thisPeriod: 21250,
        percentComplete: 75,
      },
      {
        description: "Light Fixtures",
        scheduled: 145000,
        prior: 72500,
        thisPeriod: 29000,
        percentComplete: 70,
      },
      {
        description: "Fire Alarm System",
        scheduled: 95000,
        prior: 47500,
        thisPeriod: 19000,
        percentComplete: 70,
      },
      {
        description: "Low Voltage / Data",
        scheduled: 72000,
        prior: 36000,
        thisPeriod: 14400,
        percentComplete: 70,
      },
    ],
  },
  {
    id: "pa2",
    number: 5,
    subcontractor: "Premier Plumbing Co.",
    project: "Harbor View Condos",
    status: "approved",
    originalContract: 320000,
    changeOrders: 15000,
    revisedContract: 335000,
    retentionPercent: 10,
    lineItems: [
      {
        description: "Underground Rough-in",
        scheduled: 80000,
        prior: 80000,
        thisPeriod: 0,
        percentComplete: 100,
      },
      {
        description: "Vertical Risers",
        scheduled: 95000,
        prior: 71250,
        thisPeriod: 14250,
        percentComplete: 90,
      },
      {
        description: "Fixture Installation",
        scheduled: 110000,
        prior: 33000,
        thisPeriod: 22000,
        percentComplete: 50,
      },
      {
        description: "Testing & Balance",
        scheduled: 50000,
        prior: 0,
        thisPeriod: 10000,
        percentComplete: 20,
      },
    ],
  },
];

/* ─── Escrow & Draw ─── */
export const escrowAccount: EscrowAccount = {
  project: "Riverside Office Complex",
  owner: "Riverside Development LLC",
  balance: 1420000,
  funded: 2400000,
  disbursed: 980000,
  retentionHeld: 142000,
};

export const drawSteps: DrawStep[] = [
  { label: "GC Submits Draw Request", status: "completed" },
  { label: "Architect Inspection", status: "completed" },
  { label: "Lender Review", status: "active" },
  { label: "Title Company Disburse", status: "pending" },
  { label: "Sub Payments Released", status: "pending" },
];

export const architectInspection: ArchitectInspection = {
  architect: "Henderson & Associates",
  inspectionDate: "2026-02-18",
  drawAmount: 245000,
  signOffMethod: "Digital via DocuSign",
  status: "Approved with minor notes",
};

/* ─── Lien Waivers ─── */
export const lienWaivers: LienWaiver[] = [
  {
    id: "lw1",
    vendor: "Torres Electrical LLC",
    type: "Conditional",
    amount: 68250,
    status: "signed",
    method: "DocuSign",
  },
  {
    id: "lw2",
    vendor: "Premier Plumbing Co.",
    type: "Conditional",
    amount: 46250,
    status: "signed",
    method: "DocuSign",
  },
  {
    id: "lw3",
    vendor: "Apex Concrete Works",
    type: "Unconditional",
    amount: 124000,
    status: "signed",
    method: "Wet Signature",
  },
  {
    id: "lw4",
    vendor: "Skyline HVAC Systems",
    type: "Conditional",
    amount: 55000,
    status: "pending",
    method: "DocuSign",
  },
  {
    id: "lw5",
    vendor: "Pacific Drywall Inc.",
    type: "Conditional",
    amount: 38500,
    status: "pending",
    method: "Email",
  },
];

/* ─── Accounting / CPA ─── */
export const accountingClients: AccountingClient[] = [
  {
    name: "Riverside Development LLC",
    projectCount: 3,
    wipAmount: 1240000,
    syncStatus: "synced",
  },
  {
    name: "Harbor Builders Group",
    projectCount: 2,
    wipAmount: 890000,
    syncStatus: "conflicts",
    conflictCount: 3,
  },
  {
    name: "Metro Construction Co.",
    projectCount: 4,
    wipAmount: 2100000,
    syncStatus: "synced",
  },
  {
    name: "Greenfield Developers",
    projectCount: 1,
    wipAmount: 450000,
    syncStatus: "synced",
  },
];
