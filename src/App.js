import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div >
      

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Register/>}> </Route>
        <Route path="/login" element={<Login/>}> </Route>

      </Routes>
      
    </div>
  )
}

export default App
