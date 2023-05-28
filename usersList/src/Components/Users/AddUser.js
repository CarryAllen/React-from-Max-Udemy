import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) =>  {

  const [enteredUsename, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsename.trim().length === 0 || enteredAge.trim().length === 0) {
      // console.log('enter name to log the data');
      return;
    }
    if (+enteredAge < 1) {
      // console.log('enter valid age');
      return;
    }
    // console.log(enteredUsename, enteredAge);
    props.onAddUser(enteredUsename, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <Card className = {classes.input}>

      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>User Name</label>
        <input id="username" text="text" value={enteredUsename} onChange={usernameChangeHandler}/>

        <label htmlFor='age'>Age (years)</label>
        <input id="username" text="number" value={enteredAge} onChange={ageChangeHandler}/>

        <Button type='submit'> Add User </Button>
      </form>
      
    </Card>
  );
};

export default AddUser;
