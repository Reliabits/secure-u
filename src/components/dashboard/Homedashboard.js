import React from 'react'
// import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar'
import '../dashboard/dashboard.css'
// import Addpass from './pages/Addpass'
// import Genratepass from './pages/Genratepass'
// import Allitems from './pages/Allitems'
// import Addnotes from './pages/Addnotes'
function Homedashboard() {
    return (
        <>
            <div className='d-flex w-full h-screen'>
                <div className='col-auto custom-sidebar'>
                    <Sidebar />
                </div>
               <div>
               </div>
            </div>


        </>
    )
}

export default Homedashboard