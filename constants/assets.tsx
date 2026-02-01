import { AccountSummary, MonthlyEarning, NavLinkProps, Questions, SavingsPlans, StatItem } from "./interfaces";

import { 
  Grid2X2, 
  TrendingUp, 
  ArrowLeftRight, 
  RefreshCw, 
  UserRoundCheck, 
  MessageSquareQuote, 
  Settings, 
  LogOut, 
  PiggyBank,
  FileOutput,
  Wallet2,
  Wallet,
} from "lucide-react";

export const navLinks: NavLinkProps[] = [
  {
    id: "main-menu",
    heading: "MAIN MENU",
    links: [
      {
        title: "Dashboard",
        icon: Grid2X2,
        href: "/",
      },
      {
        title: "Analytics",
        icon: TrendingUp,
        href: "/analytics",
        badge: 20, // Visible in the image
      },
      {
        title: "Transactions",
        icon: ArrowLeftRight,
        href: "/transactions",
      },
      {
        title: "Savings",
        icon: Wallet2,
        href: "/savings",
      },
    ],
  },
  {
    id: "features",
    heading: "FEATURES",
    links: [
      {
        title: "Recurring",
        icon: RefreshCw,
        href: "/recurring",
        badge: 16, // Visible in the image
      },
      {
        title: "Subscriptions",
        icon: UserRoundCheck,
        href: "/subscriptions",
      },
      {
        title: "Feedback",
        icon: MessageSquareQuote,
        href: "/feedback",
      },
    ],
  },
  {
    id: "general",
    heading: "GENERAL",
    links: [
      {
        title: "Settings",
        icon: Settings,
        href: "/settings",
      },
      {
        title: "Log out",
        icon: LogOut,
        href: "/logout",
        variant: "danger", // Usually styled differently
      },
    ],
  },
];

export const accountDetails: AccountSummary[] = [
  {
    title: "Account Balance",
    mainBalance: "52,123.09",
    currency: "USD",
    growthRate: "+3.2%",
    wallets: [
      {
        id: "w1",
        currency: "USD",
        symbol: "$",
        country: "United States",
        flagCode: "US",
        balance: 22678.00,
        status: "Active",
      },
      {
        id: "w2",
        currency: "EUR",
        symbol: "€",
        country: "Europe",
        flagCode: "EU",
        balance: 18345.00,
        status: "Active",
      },
      {
        id: "w4",
        currency: "GBP",
        symbol: "£",
        country: "United Kingdom",
        flagCode: "GB",
        balance: 15000.00,
        status: "Inactive",
      },
      {
        id: "w5",
        currency: "KRW",
        symbol: "₩",
        country: "South Korea",
        flagCode: "KR",
        balance: 500000.00,
        status: "Active",
      }
    ],
  },
];

export const secondaryStats: StatItem[] = [
  // {
  //   label: "Net Holdings",
  //   amount: "8,535.55",
  //   change: "+1.2%",
  //   icon: Wallet2,
  // },
  {
    label: "Total Savings",
    amount: "18,420.75",
    change: "+4.5%",
    icon: PiggyBank,
  },
  {
    label: "Total Expenses",
    amount: "9,845.20",
    change: "-2.1%",
    icon: FileOutput,
  },
];
export const earningsChartData: MonthlyEarning[] = [
  { month: "Jan", amount: 18023.45 },
  { month: "Feb", amount: 14987.20 },
  { month: "Mar", amount: 27914.80 },
  { month: "Apr", amount: 32156.75 },
  { month: "May", amount: 24892.60 },
  { month: "Jun", amount: 11978.35 },
  { month: "Jul", amount: 21843.90 },
  { month: "Aug", amount: 44921.15 },
  { month: "Sep", amount: 20987.55 },
  { month: "Oct", amount: 18964.30 },
  { month: "Nov", amount: 23978.85 },
  { month: "Dec", amount: 13942.70 },
];

export const savings: SavingsPlans[] = [
  {
    id: "investment-goal",
    label: "Investment Goal",
    target: 30000,
    amountSaved: 15000,
    icon: TrendingUp,
  },
  {
    id: "emergency-fund",
    label: "Emergency Fund",
    amountSaved: 6000,
    icon: PiggyBank,
  },
  {
    id: "vacation-fund",
    label: "Vacation Fund",
    target: 8000,
    amountSaved: 2500,
    icon: Wallet2,
  },
  {
    id: "new-car-fund",
    label: "New Car Fund",
    target: 45000,
    amountSaved: 45000,
    icon: Wallet,
  },
];