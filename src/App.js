import React, {useState} from 'react';
import './App.css';

import NewUser from './components/NewUser/NewUser'
import Users from './components/Users/Users'

const users = [];

function App() {
  
  const [userList, setUserList] = useState(users);

  const addUserHandler = (name, age) => {
      console.log('app.js')
      console.log(name, age);
      const data = {name:name, age:age}
      setUserList((prevState)=>{
        return [...prevState, data];
      })
  }

  return (
    <div className="App">
      <NewUser onUserAdd={addUserHandler}/>
      <Users userList={userList}/>
    </div>
  );
}

export default App;
