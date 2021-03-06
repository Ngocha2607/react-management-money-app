import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    title: "Toilet Paper",
    date: new Date(2020, 6, 11),
    amount: 87.67,
  },
  {
    title: "New Laptop",
    date: new Date(2022, 1, 9),
    amount: 1999.67,
  },
  {
    title: "New Desk",
    date: new Date(2019, 4, 11),
    amount: 43.67,
  },
  {
    title: "Car Insurance",
    date: new Date(2022, 2, 11),
    amount: 5000.67,
  },
];

const App = () => {
  const [expenses, setExpenses]= useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    }); 
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
