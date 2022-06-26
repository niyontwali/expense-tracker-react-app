import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <div className="max-w-[400px] mx-auto bg-[#ede9fe] p-4 rounded">
        <h2 className="text-xl font-bold mb-3">Transaction History</h2>
        <hr className="border-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400" />
        {transactions.length === 0 ? (
          <div className="text-center pt-2 text-pink-500">There are no transactions yet!</div>
        ) : (
          <div className="pt-2">
            {transactions.map((transaction) => {
              return <Transaction key={transaction.id} {...transaction} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionList;
