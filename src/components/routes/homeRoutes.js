import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../login/Login'
import Home from '../home/Home'
import Register from '../login/Register'
import Forgot from '../login/Forgot';
import Verification from '../login/Verification';
import Dashboard from '../dashboard/Homedashboard'
import Allitems from '../dashboard/pages/Allitems'
import Addnotes from '../dashboard/pages/Addnotes'
import Genratepass from '../dashboard/pages/Genratepass'
import Addpass from '../dashboard/pages/Addpass'
import Header from '../header/Header';
import Sidebar from '../dashboard/Sidebar';
function homeRoutes() {


  const DashboardLayout = ({ children }) => {
    return (
      <>
        <Sidebar />
        <div style={{ marginLeft: '25%' }}>
          {children}
        </div>
      </>
    );
  };


  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Forgot' element={<Forgot />} />
        <Route path='/Verification' element={<Verification />} />
        <Route
          path='/Dashboard'
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        >
          <Route index element={<Allitems />} />
          <Route path='Genratepass' element={<Genratepass />} />
          <Route path='Addpass' element={<Addpass />} />
          <Route path='Addnotes' element={<Addnotes />} />
        </Route>
        {/* <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Allitems' exact element={<Allitems />} />
        <Route path='/Genratepass' element={<Genratepass />} />
        <Route path='/Addpass' element={<Addpass />} />
        <Route path='/Addnotes' element={<Addnotes />} /> */}
      </Routes>
    </>
  )
}

export default homeRoutes