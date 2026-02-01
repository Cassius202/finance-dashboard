'use client'

import Overview from "./_grid-contents/Overview";
import Wallet from "./_grid-contents/Wallet";
import NetTotalCard from "./_grid-contents/NetTotalCard";
import {secondaryStats} from "@/constants/assets";
import SavingsPlan from "./_grid-contents/SavingsPlan";
import TransactionHistory from "./_grid-contents/TransactionHistory";

const Grids = () => {
  return (
    <div className="px-4 mt-4 gap-2 grid grid-cols-10 mb-30">
      <Wallet />
      <div id="second div" className="col-span-10 md:col-span-5 lg:col-span-6 grid grid-cols-1 lg:grid-rows-[122px_1fr] gap-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {
            secondaryStats.map((stat, index) => {
              if (index < 2) {
                return (
              <NetTotalCard key={index} stat={stat} />
            )
              }
            })
          }
          </div>
          <Overview />
      </div>
      <div className="col-span-10 grid gap-2 grid-cols-10">
          <SavingsPlan />
          <TransactionHistory />
      </div>
    </div>
  );
};

export default Grids;
