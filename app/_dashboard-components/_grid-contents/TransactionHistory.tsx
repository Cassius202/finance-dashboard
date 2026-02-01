import { History, MoreHorizontal } from 'lucide-react'
import MiniHeader from './_minor-components/MiniHeader'
import HistoryTable from './_minor-components/HistoryTable'

const TransactionHistory = () => {
  return (
    <div className='grid-item p-3 col-span-6 max-lg:col-span-10'>
      <MiniHeader title="Transaction History" Icon={History} LeftComponent={<div className='flex items-center gap-2 text-sm '>
        <p className='text-xs text-muted-foreground'>Last 30 days</p>
        <span className='mini-icon py-0.5 rounded-md'>
        <MoreHorizontal />
      </span></div>} />
      <HistoryTable />
    </div>
  )
}

export default TransactionHistory