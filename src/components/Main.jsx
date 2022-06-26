import React from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import TransactionList from "./TransactionList";

const Main = () => {
  return (
    <div className="lg:px-4 px-0 mb-8 max-w-[1200px] mx-auto">
      <h1 className="text-center mt-10">Expense Tracker</h1>
      <div className="mt-4 mx-2 lg:mx-0 lg:mt-[10vh] grid grid-row lg:grid-cols-3 lg:gap-10">
        <div className="order-3 lg:order-1">
          <AddTransaction />
        </div>
        <div className="order-1 lg:order-2">
          <Balance />
        </div>
        <div className="order-2 lg:order-3">
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default Main;
