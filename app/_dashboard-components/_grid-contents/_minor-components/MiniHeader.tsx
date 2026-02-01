import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { LucideProps } from "lucide-react";


interface MiniHeaderProps {
  title: string;
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  LeftComponent: React.ReactNode;
}

const MiniHeader = ({title, Icon, LeftComponent}: MiniHeaderProps) => {
  return (
    <div className='flex w-full items-center h-8'>
      <button className="bg-slate-200 dark:bg-slate-800 text-primary p-1 rounded-lg aspect-square">
        <Icon size={16} />
      </button>
      <span className='whitespace-nowrap text-sm ml-2 font-bold'>
        {title}
      </span>
      <div className='ml-auto'>
        {LeftComponent}
      </div>
      
    </div>
  )
}

export default MiniHeader