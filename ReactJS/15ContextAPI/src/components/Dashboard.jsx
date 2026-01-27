import React, { useContext } from 'react'
import { userContext } from '../UserContext';

function Dashboard() {
  const users = useContext(userContext);
  return (
    <>
    <h1>Dashboard</h1>
    <h1>{users.name}</h1>
    <h1>{users.email}</h1>
    <h1>{users.password}</h1>
    </>
  )
}

export default Dashboard