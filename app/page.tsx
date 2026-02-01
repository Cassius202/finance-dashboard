import DashboardHeader from "./_dashboard-components/DashboardHeader";
import Grids from "./_dashboard-components/Grids";

function Dashboard() {
  return (
    <div className="bg-slate-100 dark:bg-gray-900 min-h-full pb-100 overflow-y-hidden rounded-l" id="home">
      <DashboardHeader />
      <Grids />
    </div>
  );
}

export default Dashboard;