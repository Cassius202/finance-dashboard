import { FaCrown } from "react-icons/fa"
import UpgradeBtn from "./UpgradeBtn"

const GoPremium = ( {isClosed} : {isClosed: boolean}  ) => {
  return (
    !isClosed ? <div className="w-full pr-2 h-26 bg-linear-to-br from-indigo-900 dark:from-blue-800 to-primary sticky px-2 mb-2 rounded-xl mt-auto text-white flex flex-col py-2">
      <div className="text-center">
        <h2 className="text-sm text-[gold] dark:text-white font-medium mb-0.5">Choose Premium</h2>
        <p className="text-slate-200 text-xs font-light leading-tight">
          Get the best analytics on your spending
        </p>
      </div>
      <div className="px-2 mt-auto">
        <UpgradeBtn />
      </div>
    </div> : <div className="w-full mt-auto mb-4 flex justify-center ">
       <button className="p-1.5 rounded ml-2 bg-amber-500 text-white aspect-square group relative cursor-pointer hover:scale-105"><FaCrown />
       <span className="tooltip -translate-y-4 cursor-pointer">Upgrade to Premium</span>
       </button>
      
    </div>
  )
}

export default GoPremium