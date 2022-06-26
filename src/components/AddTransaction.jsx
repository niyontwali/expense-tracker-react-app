import { useState } from "react";

const AddTransaction = () => {
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div>
      <div className="max-w-[400px] mx-auto bg-[#ede9fe] p-4 rounded">
        <h2 className="text-xl font-bold mb-3">Add new Transaction</h2>
        <hr className="border-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400" />
        <form className="mt-3">
          <div>
            <label className="font-[500]">Transaction</label>
            <input
              type="text"
              value={transaction}
              onChange={(e) => setTransaction(e.target.value)}
              name="transaction"
              placeholder="text"
              className="block my-2 border-2 border-[#c4b5fd] focus:outline-2 focus:outline-offset-2 focus:outline-[#c4b5fd] px-3 py-[3px] rounded w-full bg-transparent"
            />
            <label className="font-[500]">Amount</label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              name="transaction"
              placeholder="integers"
              className="block my-2 border-2 border-[#c4b5fd] focus:outline-2 focus:outline-offset-2 focus:outline-[#c4b5fd] px-3 py-[3px] rounded w-full bg-transparent"
            />
          </div>

          <button className="bg-[#c4b5fd] w-full py-[4px] mt-3 hover:bg-[#a78bfa] focus:ring-4 focus:ring-[#7c3aed] rounded font-[500]">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
