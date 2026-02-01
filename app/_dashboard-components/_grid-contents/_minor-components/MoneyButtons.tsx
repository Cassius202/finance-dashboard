'use client';

import { Download, Upload } from "lucide-react";

const MoneyButtons = () => {
  return (
    <div className="w-full grid grid-cols-2 mt-3 gap-x-2 text-xs">
      <button className="flex items-center justify-center gap-1.5 bg-green-500 text-white rounded-full p-2 py-3">
      <Upload size={16} />
      <span className="whitespace-nowrap">
        Send Money
      </span>
      </button>     
      <button className="flex items-center justify-center gap-1.5  bg-slate-200 dark:bg-slate-800 rounded-full p-2 py-3 whitespace-nowrap">
      <Download size={16} />
      Request Money
      </button>     
    </div>
  )
}

export default MoneyButtons