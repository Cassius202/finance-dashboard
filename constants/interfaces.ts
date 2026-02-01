import { LucideIcon, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface NavLinkProps {
    id: string;
    heading: string;
    links: {
        title: string;
        icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
        href: string;
        badge?: number;
        variant?: string;
    }[];
}
export interface Wallet {
  id: string;
  currency: string;
  symbol: string;
  country: string;
  flagCode: string; // Added: ISO 3166-1 alpha-2 code
  balance: number;
  status: "Active" | "Inactive";
}

export interface AccountSummary {
  title: string;
  mainBalance: string;
  currency: string;
  growthRate: string;
  wallets: Wallet[];
}

export interface MonthlyEarning {
  month: string;
  amount: number;
}

export interface Questions {
  id: number;
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  amount: string;
  change: string;
  icon: LucideIcon;
}

export interface SavingsPlans {
  id: string;
  label: string;
  target?: number;
  amountSaved: number;
  icon: LucideIcon;
}
  
