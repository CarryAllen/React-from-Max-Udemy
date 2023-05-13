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

  //expenses should be displayed basis of year selected
  const filteredExpenses = props.items.filter(exp => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  let NoExpContent = <p> No Expenses Found </p>;

  let filteredExpContent = filteredExpenses.map((exp) => <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date}/>);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}  />

        {filteredExpenses.length === 0 && NoExpContent}

        {filteredExpenses.length > 0 && filteredExpContent}

        {/* {filteredExpenses.map((exp) => <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date}/>)} */}
        
      </Card>
    </div>
  );
};

export default Expenses;
