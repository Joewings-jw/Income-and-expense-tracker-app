import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const resetInput = () => {
    setText("");
    setAmount("");
  };

  const handleOnchange = (func) => (e) => {
    const { value } = e.target;
    func(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) {
      console.log("error,user did not add a valid transaction", error);
      return setError(true);
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    resetInput();
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={handleOnchange(setText)}
            placeholder="Enter text..."
          />
        </div>
        {error && (
          <div className="text-danger">Please add a valid transaction</div>
        )}
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (To diffrentiate income and expense amount,add a negative sign for
            the expense amount like so; fuel -$400 and for income; Template sale
            $50 )
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleOnchange(setAmount)}
            placeholder="Enter Amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
