'use client'

import { Upload } from "lucide-react"

const ExportButton = () => {
  return (
    <button className="flex items-center gap-1 p-1.5 px-3 text-xs text-slate-100 dark:text-slate-900 rounded-full bg-neutral-900 dark:bg-slate-200">
     <Upload size={15} /> Export
    </button>
  )
}

export default ExportButton