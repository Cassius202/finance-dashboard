
import CountryFlag from "@/components/CountryFlag";
import { formatCurrency } from "@/components/formatCurrency";
import { accountDetails } from "@/constants/assets"
import { cn } from "@/lib/cn";
import { MoreVertical } from "lucide-react";
import { FaPlus } from "react-icons/fa"

const wallets = accountDetails[0].wallets;
const MyWallet = () => {
  return (
    <div className="mt-6 w-full">
      <div className="flex justify-between items-center text-xs">
        <span className="font-semibold text-sm">My Wallet</span>
        <div className="cursor-pointer transition-transform hover:scale-[1.03] flex gap-1 items-center dark:bg-slate-800 rounded-lg p-2">
          <FaPlus /> Add New
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 grid-rows-[90px_90px] gap-3">
        {wallets.map((wallet) => {
          return <div key={wallet.id} className="flex flex-col p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:border border-amber-300/40" >
            {/* heading  */}
            <div className="flex text-xs gap-2 items-center">
              <CountryFlag flagCode={wallet.flagCode} />
              <span>USD</span>
              <div className="icon_hover ml-auto">
                <MoreVertical size={12}  />
              </div>
            </div>
            {/* money balance */}
            <h5 className="text-sm text-slate-950 font-bold mb-2 dark:text-white">
              {formatCurrency(wallet.balance, wallet.currency)}
            </h5>
            <span className={cn("mt-auto text-xs low-contrast lowercase", wallet.status === "Active" && "text-green-500 dark:text-green-400")}>
             {wallet.status}
            </span>
          </div>
        })}
      </div>

    </div>
  )
}

export default MyWallet