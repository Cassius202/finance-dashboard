import { FaCrown } from "react-icons/fa"

const UpgradeBtn = ( ) => {
  return (
    <button className="flex items-center justify-center p-1.5 gap-1 font-bold text-xs text-primary bg-slate-100 rounded-lg w-full cursor-pointer mt-auto hover:scale-[1.03] transition-transform">
      <FaCrown size={15} /> Upgrade Now
    </button> 
  )
}

export default UpgradeBtn