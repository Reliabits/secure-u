import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../login/Login'
import Home from '../home/Home'
import Register from '../login/Register'
import Forgot from '../login/Forgot';
import Verification from '../login/Verification';
import Dashboard from '../dashboard/Homedashboard'
import Header from '../header/Header';
function homeRoutes() {


  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Forgot' element={<Forgot />} />
        <Route path='/Verification' element={<Verification />} />
        <Route path='/Dashboard/' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default homeRoutes