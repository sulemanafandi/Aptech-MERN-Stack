import React from 'react'
import AllUserData from './components/AllUserData'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import SingleUser from './components/SingleUser'

function App() {
  return (
    <>

        {/* // <AllUserData/> */}

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<AllUserData />} />

    {/* Route Parameter */}
    <Route path="/user/:id" element={<SingleUser />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App