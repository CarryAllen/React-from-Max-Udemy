// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App() {
  const expensesArray = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },

    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },

    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h1> Expense Tracker React App </h1>

      <ExpenseItem title={expensesArray[0].title} amount={expensesArray[0].amount} date={expensesArray[0].date} /> 
      <ExpenseItem title={expensesArray[1].title} amount={expensesArray[1].amount} date={expensesArray[1].date} /> 
      <ExpenseItem title={expensesArray[2].title} amount={expensesArray[2].amount} date={expensesArray[2].date} /> 
      <ExpenseItem title={expensesArray[3].title} amount={expensesArray[3].amount} date={expensesArray[3].date} /> 
      
    </div>
  );
}

export default App;


