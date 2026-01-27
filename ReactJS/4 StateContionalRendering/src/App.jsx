import React from 'react'
import {useState} from 'react';

function App() {
  const [Loggedin, setLoggedin] = useState(false);
  function handlelogin(){
    setLoggedin( ! Loggedin);
  }
  return (
    <>
    {Loggedin == true ? (<p>you are logged in</p>) : (<p>you are logged out</p>)}
    <button onClick={handlelogin}>{Loggedin == true ? "logout" : "login"}</button>
    </>
  )
}

export default App