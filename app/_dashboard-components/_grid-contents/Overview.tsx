import { earningsChartData } from "@/constants/assets";
import { Activity, MoreHorizontal } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import MiniHeader from "./_minor-components/MiniHeader";
import { useTheme } from "next-themes";

const Overview = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Configuration for dynamic colors
  const colors = {
    text: isDark ? "#94a3b8" : "#64748b", // slate-400 : slate-500
    grid: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
    tooltipBg: isDark ? "#1e293b" : "#ffffff",
    tooltipBorder: isDark ? "#334155" : "#e2e8f0",
    gradientStop: isDark ? "#064e3b" : "#f0fdf4", // Dark green vs very light green/white
  };

  return (
    <div className="grid-item p-3 h-full flex flex-col gap-2">
      <MiniHeader
        title="Overview"
        Icon={Activity}
        LeftComponent={
          <div className="flex items-center gap-2">
            <div className="mini-icon text-sm rounded-md bg-transparent items-center gap-1 flex">
              <div className="bg-green-500 size-2 rounded-full"></div>
              Earnings
            </div>
            <div className="mini-icon text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-md">
              Last year
            </div>
            <button className="p-1 hover:bg-secondary rounded-full transition-colors">
              <MoreHorizontal size={18} />
            </button>
          </div>
        }
      />

      <div className="mt-4 w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={earningsChartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor={colors.gradientStop}
                  stopOpacity={0.2}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={colors.grid}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              tick={{ fill: colors.text, fontSize: 12 }}
              dy={10}
            />

            <YAxis
              dataKey="amount"
              tickFormatter={(value) => `$${Math.round(value / 1000)}k`}
              tick={{ fill: colors.text, fontSize: 12 }}
            />

            <Tooltip
              cursor={{
                fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.02)",
              }}
              contentStyle={{
                backgroundColor: colors.tooltipBg,
                borderColor: colors.tooltipBorder,
                borderRadius: "8px",
                fontSize: "12px",
                color: isDark ? "#fff" : "#000",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)", // Adds a nice subtle shadow
              }}
              itemStyle={{ color: "#22c55e", fontWeight: "bold" }}
              // Recharts uses 'formatter', and we'll add the name param for clarity
              formatter={(value) => `$${Number(value).toLocaleString()}`}
            />
            <Bar
              dataKey="amount"
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
