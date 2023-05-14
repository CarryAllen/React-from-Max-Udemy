import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let NoExpContent = <p> No Expenses Found </p>;

  if (props.items.length > 0) {
    NoExpContent = props.items.length.map((exp) => (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
      />
    ));
  }
};
