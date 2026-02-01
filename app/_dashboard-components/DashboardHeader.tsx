import ExportButton from "./ExportButton";
import DateView from "./Date";

const DashboardHeader = () => {
  return (
    <header className="px-4 mt-2.5 lg:px-12 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Welcome back Cassius</h1>
        <span className="text-slate-600 text-xs dark:text-slate-400">
          Monitor and control what happens to your money in real time
        </span>
      </div>
      {/* second section */}
      <div className="flex gap-4 items-center ">
        <DateView />
        <ExportButton />
      </div>
    </header>
  );
};

export default DashboardHeader;
