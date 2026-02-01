import { ArrowRight, Lightbulb, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/cn'
import Link from 'next/link'
import MiniHeader from './_minor-components/MiniHeader'
import { savings } from '@/constants/assets'
import { formatCurrency } from '@/components/formatCurrency'
import SavingsCard from './_minor-components/SavingsCard'

const SavingsPlan = () => {
  return (
    <div className="grid-item max-lg:col-span-10 max-lg:h-max h-120 overflow-y-auto p-3 col-span-4 max-md:col-span-10">
      <MiniHeader
        title="Savings Plan"
        Icon={Lightbulb}
        LeftComponent={
          <span className="mini-icon rounded-md py-0.5 px-1 bg-muted/40 hover:bg-muted/60 transition-colors">
            <MoreHorizontal size={14} />
          </span>
        }
      />

      <div className="mt-3">
        <div className="flex justify-between items-center text-xs mb-3">
          <span className="font-semibold text-sm">Active Goals</span>
          <button className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors">
            <span>New Goal</span>
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          {savings.map((plan) => (
            <SavingsCard key={plan.id} plan={plan} />
          ))}

          {savings.length === 0 && (
            <div className="col-span-2 flex items-center justify-center h-32 text-sm text-muted-foreground">
              No savings goals yet
            </div>
          )}
        </div>

        {/* See All Plans button */}
        <button className="mt-6 flex w-full justify-center">
          <Link
            href="/savings"
            className={cn(
              'flex items-center gap-1',
              'dark:bg-slate-50 dark:text-slate-900 font-medium p-2 rounded-lg',
              'bg-slate-300 text-stone-900'
            )}
          >
            See All Plans <ArrowRight size={18} />
          </Link>
        </button>
      </div>
    </div>
  )
}

export default SavingsPlan