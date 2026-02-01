// SavingsCard.tsx
import { cn } from "@/lib/cn";
import { MoreHorizontal } from "lucide-react";
import { formatCurrency } from "@/components/formatCurrency";

// Define the expected shape of each savings plan item
import { SavingsPlans } from "@/constants/interfaces";

export default function SavingsCard({ plan }: { plan: SavingsPlans }) {
  return (
    <div
      key={plan.id}
      className={cn(
        "flex flex-col p-3 pb-2 rounded-xl bg-slate-100 dark:bg-slate-900",
        "border border-transparent hover:border-amber-300/40 transition-colors",
        "min-h-[110px]",
      )}
    >
      {/* Header / Label */}
      <div className="flex items-center gap-2 text-xs mb-2">
        <span className="p-1 bg-blue-200 dark:bg-blue-800/40 dark:text-blue-200 text-blue-800 rounded">
          <plan.icon className="h-4 w-4" />
        </span>
        <span className="font-medium">{plan.label}</span>

        <div className="ml-auto">
          <MoreHorizontal
            size={14}
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          />
        </div>
      </div>

      {/* Amount / Target */}
      <div className="flex items-baseline gap-1.5">
        <h5 className="text-base font-medium text-slate-900 dark:text-white">
          {formatCurrency(plan.amountSaved, "USD")}
        </h5>

        {plan.target && (
          <h5 className="text-base font-medium low-contrast">
            / {formatCurrency(plan.target, "USD")}
          </h5>
        )}
      </div>

      {/* Status / Progress hint */}
      <div className="flex w-full mt-auto justify-between items-center">
        <span
          className={cn(
            "text-xs lowercase text-muted-foreground",
            plan.amountSaved < (plan.target || Infinity)
              ? "text-amber-600 dark:text-amber-300"
              : "text-green-500 dark:text-green-400",
          )}
        >
          {plan.amountSaved < (plan.target || Infinity)
            ? "In Progress"
            : "Completed"}
        </span>
        {
          plan.target && <p className="text-slate-800 dark:text-blue-100 p-0.5 dark:bg-slate-800 rounded px-1.5">
              {Math.round((plan.amountSaved/plan.target) * 100)}%
          </p>
        }
      </div>
    </div>
  );
}
