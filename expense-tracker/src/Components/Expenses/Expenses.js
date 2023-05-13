import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(exp => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}  />

        {props.items.map((exp) => <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date}/>)}
        
      </Card>
    </div>
  );
};

export default Expenses;
