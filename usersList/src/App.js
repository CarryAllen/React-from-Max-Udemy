import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {

  const [userslist, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((...prevUsersList) => {
      return [
        ...prevUsersList, 
        {id: Math.random().toString(), name:uName, age:uAge }
      ];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={[userslist]} />
    </div>
  );
}

export default App;
