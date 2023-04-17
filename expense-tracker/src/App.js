// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App() {
  const expensesArray = [ //array to pass item to componet mentioned as props

      {
        id:"e1",
        title: 'Car Insureance', 
        amount: 294.67, 
        date: new Date(2021,5,12),  
      },
      {
        id:"e2",
        title: 'Sofa repair', 
        amount: 200.83, 
        date: new Date(2021,5,28),  
      },
      {
        id:"e3",
        title: 'New TV', 
        amount: 294.67, 
        date: new Date(2021,5,29),  
      }
  ];
  return (
    <div>
      <h1> Hello, this is React </h1>

      <ExpenseItem title={expensesArray[0].title} amount={expensesArray[0].amount} date={expensesArray[0].date} /> 
      <ExpenseItem title={expensesArray[1].title} amount={expensesArray[1].amount} date={expensesArray[1].date} /> 
      <ExpenseItem title={expensesArray[2].title} amount={expensesArray[2].amount} date={expensesArray[3].date} /> 
      
    </div>
  );
}

export default App;


