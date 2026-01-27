import React from 'react'
import Register from './Pages/Register'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Register />} />
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App