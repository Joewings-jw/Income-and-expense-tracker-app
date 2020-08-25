import React from "react";

import {
  Header,
  Balance,
  IncomeExpense,
  TransactionList,
  AddTransaction,
} from "./components";

import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
