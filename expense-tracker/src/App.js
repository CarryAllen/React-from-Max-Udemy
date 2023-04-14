import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App() {
  return (
    <div>
      <h1> Hello, this is React </h1>
      <ExpenseItem/>
    </div>
  );
}

export default App;




/* 

<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>

*/