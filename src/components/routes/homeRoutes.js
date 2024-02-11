import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../login/Login'
import Home from '../home/Home'
import Register from '../login/Register'
import Forgot from '../login/Forgot';
import Verification from '../login/Verification';
function homeRoutes() {
  return (
   <>
   <Routes>
            <Route path='/' element={<Home />}  />
            <Route  path='/login' element={<Login />} />
            <Route  path='/Register' element={<Register />} />
            <Route  path='/Forgot' element={<Forgot />} />
            <Route  path='/Verification' element={<Verification />} />

    </Routes>
   </>
  )
}

export default homeRoutes