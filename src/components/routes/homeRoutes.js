import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../login/Login'
import Home from '../home/Home'
import Register from '../login/Register'
import Forgot from '../login/Forgot';
import Savepass from '../login/Savepass';
import Verification from '../login/Verification';
import Dashboard from '../dashboard/Homedashboard'
import Header from '../header/Header';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function homeRoutes() {


  return (
    <>
    <ToastContainer
        position="top-center"
        style={{ textTransform: "capitalize" }}
        autoClose={2000}
      />
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Forgot' element={<Forgot />} />
        <Route path='/Savepass' element={<Savepass />} />
        <Route path='/Verification' element={<Verification />} />
        <Route path='/Dashboard/' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default homeRoutes