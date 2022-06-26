import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

import { formatCurrency } from "../utils/formatCurrency";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="uppercase max-w-[400px] mx-auto bg-[#ede9fe] p-4 rounded">
      <div className="text-center">
        <p className="text-lg font-[500]">Your Balance</p>
        <p className="text-lg font-bold">{formatCurrency(total)}</p>
      </div>
      <div className="flex justify-between mt-10 bg-[#ddd6fe] p-3 rounded">
        <div>
          <h3 className="text-md font-[500]">Income</h3>
          <h2 className="text-md font-bold text-green-500">{formatCurrency(income)}</h2>
        </div>
        <div className="w-1 bg-white"></div>
        <div>
          <h3 className="text-md font-[500]">Expense</h3>
          <h2 className="text-md text-pink-500 font-bold">{formatCurrency(expense)}</h2>
        </div>
      </div>
    </div>
  );
};

export default Balance;
