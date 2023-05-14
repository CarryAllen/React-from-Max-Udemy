import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let NoExpContent = <p> No Expenses Found </p>;

  if (filteredExpenses > 0) {
    NoExpContent = filteredExpenses.map((exp) => (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
      />
    ));
  }
};
