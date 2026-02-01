'use client';

import { useState } from 'react'
import MiniHeader from './_minor-components/MiniHeader'
import { MoreHorizontal } from 'lucide-react';
import { formatCurrency } from '@/components/formatCurrency';
import { StatItem } from '@/constants/interfaces';
import { cn } from '@/lib/cn';


const NetTotalCard = ({stat}: {stat: StatItem }) => {
  const [trendingUp, setTrendingUp] = useState<boolean>(() => {
    return stat.label === "Total Expenses" ? stat.change.includes("-") : stat.change.includes('+');
  });

  return (
    <div className='grid-item p-3 flex flex-col max-lg:justify-between'>
      <MiniHeader title={stat.label} Icon={stat.icon} LeftComponent={<span className='mini-icon py-0.5 rounded-md'>
        <MoreHorizontal />
      </span>} />
      <h2 className="text-2xl text-slate-950 font-bold mb-2 dark:text-white">
        {formatCurrency(stat.amount, 'USD')}
      </h2>
      <div className='flex text-xs gap-1.5 items-center'>
        <div className={cn("text-xs p-1 rounded-full", trendingUp ? "bg-green-100 dark:text-green-300 dark:bg-green-900/40 text-green-700 " : "bg-red-100 dark:text-red-300 dark:bg-red-900/30 text-red-700" )} >
          {stat.change}
        </div>
        <span className="font-light text-xs low-contrast">from last month</span>
      </div>
    </div>
  )
}

export default NetTotalCard