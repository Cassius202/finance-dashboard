import { formatCurrency } from "@/components/formatCurrency";
import { transactionHistory } from "@/constants/assets";
import { Transaction } from "@/constants/interfaces";

const tableHeadItems = ['Activity', "Date", 'Price', 'Status'];

const row = "p-2"

const HistoryTable = () => {
  return (
      <table className="w-full overflow-hidden rounded-lg border-collapse text-left">
        <thead className="font-bold bg-primary text-white text-lg">
          <tr className="text-center mb-2">
            {tableHeadItems.map(item => (
              <th className="py-3" key={item}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {transactionHistory.map((history) => (
            <TableRow key={history.id} history={history} />
          ))}
        </tbody>
      </table>
  );
};

const TableRow = ({ history }: { history: Transaction }) => {
  return (
    <tr className="">
      <td className={row}>{history.description}</td>
      <td className={row}>{history.date}</td>
      <td className={row}>{formatCurrency(history.price, "USD")}</td>
      <td className={row}>
        <span>
          {history.status}
        </span>
      </td>
    </tr>
  );
};

export default HistoryTable;