import React from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { useContext } from "react";
import {BsTrash} from "react-icons/bs"

import { formatCurrency } from "../utils/formatCurrency";

const Transaction = ({id, detail, amount }) => {
  const {deleteTransaction} = useContext(GlobalContext)
  return (
    <div>
      <div className={`border-r-4 mt-2 group relative overflow-hidden ${amount<0 ? "border-pink-300" : "border-green-300"} rounded`}>
        <div className="flex justify-between px-2 py-1 shadow-md border-2 ">
          <p>{detail}</p>
          <p className="pr-2">{formatCurrency(amount)}</p>
        </div>
        <div className="absolute cursor-pointer group-hover:translate-x-48 group-hover:-translate-y-6">
        <BsTrash onClick={() => deleteTransaction(id)}  />
      </div>
      </div>
      
    </div>
  );
};

export default Transaction;
