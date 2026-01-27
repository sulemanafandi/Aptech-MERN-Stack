import React from 'react'
import { userContext } from './UserContext';
import Dashboard from './components/Dashboard';

function App() {
  const user = {
    name:"salman",
    email:"sulemanafandi@gmail.com",
    password:"1234salman"
  };
  return (
    <>
    <userContext.Provider value={user}>
      <Dashboard/>
    </userContext.Provider>
    </>
  )
}

export default App