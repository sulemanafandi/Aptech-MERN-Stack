
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './Components/Form'
import ShowProduct from './Components/ShowProduct'
import UpdateProduct from './Components/UpdateProduct'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowProduct/> } />
        <Route path='/add-Product' element={<Form/>} />
        <Route path='/update/:id' element={<UpdateProduct/> } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
