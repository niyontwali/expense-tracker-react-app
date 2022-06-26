import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../contexts/GlobalState";

const AddTransaction = () => {
  const [detail, setDetail] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const newTransaction = {
      id: uuid(),
      detail,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setDetail("");
    setAmount("");
  };
  return (
    <div>
      <div className="max-w-[400px] mx-auto bg-[#ede9fe] p-4 rounded">
        <h2 className="text-xl font-bold mb-3">Add new Transaction</h2>
        <hr className="border-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400" />
        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="font-[500]">Transaction Detail</label>
            <input
              type="text"
              value={detail}
              name="detail"
              {...register("detail", { required: true })}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="text"
              className="block mt-2 border-2 border-[#c4b5fd] focus:outline-2 focus:outline-offset-2 focus:outline-[#c4b5fd] px-3 py-[3px] rounded w-full bg-transparent"
            />
            <span className="mb-2 text-red-600 text-xs block">
              {errors.detail?.type === "required" && "Details of transaction required"}
            </span>
            <label className="font-[500]">Amount</label>
            <input
              type="number"
              value={amount}
              name="amount"
              {...register("amount", { required: true })}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="integers"
              className="block mt-2 border-2 border-[#c4b5fd] focus:outline-2 focus:outline-offset-2 focus:outline-[#c4b5fd] px-3 py-[3px] rounded w-full bg-transparent"
            />
            <span className="mb-2 text-red-600 px-1 text-xs">
              {errors.amount?.type === "required" && "Amount is required"}
            </span>
          </div>

          <button
            type="submit"
            className="bg-[#c4b5fd] w-full py-[4px] mt-3 hover:bg-[#a78bfa] focus:ring-4 focus:ring-[#7c3aed] rounded font-[500]"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
