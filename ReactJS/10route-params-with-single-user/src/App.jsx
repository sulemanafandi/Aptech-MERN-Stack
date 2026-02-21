import React from 'react'
import AllUsersData from './Components/AllUsersData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleUser from './Components/SingleUser'

function App() {
  return (
    <>

      {/* <AllUsersData /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllUsersData />} />
          {/* Route parameter */}


          <Route path='/user/:userid' element={<SingleUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App