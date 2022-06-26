import { formatCurrency } from "../utils/formatCurrency";

const Balance = () => {
  return (
    <div className="uppercase max-w-[400px] mx-auto bg-[#ede9fe] p-4 rounded">
      <div className="text-center">
        <p className="text-lg font-[500]">Your Balance</p>
        <p className="text-lg font-bold">{formatCurrency(260000)}</p>
      </div>
      <div className="flex justify-between mt-10 bg-[#ddd6fe] p-3 rounded">
        <div>
          <h3 className="text-md font-[500]">Income</h3>
          <h2 className="text-md font-bold">{formatCurrency(210000)}</h2>
        </div>
        <div className="w-1 bg-white"></div>
        <div>
          <h3 className="text-md font-[500]">Expense</h3>
          <h2 className="text-md font-bold">{formatCurrency(240000)}</h2>
        </div>
      </div>
    </div>
  );
};

export default Balance;
