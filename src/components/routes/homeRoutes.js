import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../login/Login'
import Home from '../home/Home'
import Register from '../login/Register'
function homeRoutes() {
  return (
   <>
   <Routes>
            <Route path='/' element={<Home />}  />
            <Route  path='/login' element={<Login />} />
            <Route  path='/Register' element={<Register />} />
    </Routes>
   </>
  )
}

export default homeRoutes