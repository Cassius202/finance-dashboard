'use client';

import { accountDetails } from "@/constants/assets"
import MiniHeader from "./_minor-components/MiniHeader";
import { ChevronDown, Wallet2 } from "lucide-react";
import CountryFlag from "@/components/CountryFlag";
import MoneyButtons from "./_minor-components/MoneyButtons";
import MyWallet from "./_minor-components/MyWallet";
import { useSidebar } from "@/components/sidebar-context";
import { cn } from "@/lib/cn";


const Wallet = () => {
  const {isClosed } = useSidebar();
  const mainAccount = accountDetails[0];

  return (
    <div className={cn("grid-item flex flex-col lg:justify-between p-3 lg:col-span-4 md:col-span-5 max-md:col-span-10", isClosed && "md:col-span-5" )}>
      {/* header  */}
      <MiniHeader title={mainAccount.title} Icon={Wallet2} LeftComponent={<div className="mini-icon">
        <CountryFlag flagCode="US" /> 
        <span >USD</span>
        <ChevronDown size={12} />
      </div>} />
      {/* Wallet balance  */}
      <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white my-2">
        ${mainAccount.mainBalance}
      </h1>
      <div className="w-full flex gap-2 mt-1.5 items-center">
        <div className="bg-green-100 dark:text-green-300 dark:bg-green-900/40 text-green-700 text-xs p-1.5 rounded-full">
          {mainAccount.growthRate}
        </div>
        <span className="font-light text-xs low-contrast">from last month</span>
      </div>
      <MoneyButtons />
      <MyWallet />
    </div>
  )
}

export default Wallet