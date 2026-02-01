import { Calendar } from "lucide-react";

export default function DateView() {

  const reduce = (input: string):string => {
  return (input.split(" ").filter((item, index) => {
    if (index === 0 || index === 3) {
      return
    } else {
      return item
    }
  } ).join().split(",").join(" "))
}
  
const today = new Date().toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="bg-slate-200 dark:bg-slate-700 rounded-lg flex gap-1 p-1.5 px-2.5">
      <Calendar size={16} />
      <span className="whitespace-nowrap max-lg:hidden">{today}</span>
      <span className="whitespace-nowrap lg:hidden">{reduce(today)}</span>
    </div>
  );
}

