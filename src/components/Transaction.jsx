import React from "react";
import { formatCurrency } from "../utils/formatCurrency";

const Transaction = ({detail, amount }) => {
  return (
    <div>
      <div className="border-r-4 mt-2 border-pink-300 rounded">
        <div className="flex justify-between px-2 py-1 shadow-md border-2 ">
          <p>{detail}</p>
          <p className="pr-2">{formatCurrency(amount)}</p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
