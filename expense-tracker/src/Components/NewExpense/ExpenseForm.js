import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState(''); //format of Array destructuring
  const [amount, setEnteredAmount] = useState('');
  const [date, setEnteredDate] = useState('');

  // this is the common state for all 3 inputs
  // const [userInput, setUserInput] = useState({
  //   enteredTitle : '',
  //   amount: '',
  //   date: '',
  // });


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*  setUserInput ({
      ...userInput, // retrive all 3 input value using spread operator
      enteredTitle : event.target.value,  //and override the title bcz this function related to update title but other 2 inputs will not change/get override
    });  
    
    outdated or incorrect state snapshot if we use this approach*/

    /* setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value};
    }); */ // by using this syntax react will ensure that state snapshot we recieve will always be the latest state snapshot keeping all schedla state updates in mind
  };


  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*  setUserInput ({
      ...userInput,
      amount: event.target.value,
    }); */

  /*  setUserInput((prevState) => {
      return {...prevState, amount: event.target.value};
    }); */
  };


  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* setUserInput ({
      ...userInput,
      date: event.target.value,
    }); */

  /*  setUserInput((prevState) => {
      return {...prevState, date: event.target.value};
    }); */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData =  {
      title : enteredTitle,
      amount: amount,
      date: new Date(date),
    };

    
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');


  };

  return (
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
      </div>

      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
      </div>

      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min="2019-01-01" step="2022-12-31" value={date} onChange={dateChangeHandler} />
      </div>
    </div>

    <div className='new-expense__actions'>
      <button type='submit'> Add expense </button>
    </div>
  </form>
  )
};

export default ExpenseForm;