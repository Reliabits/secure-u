// import React from 'react'
// import '../dashboard/dashboard.css'
// import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa'
// function Sidebar() {
//     return (
//         <div style={{width:"100%"}} className='d-flex'>
//             <div className='d-flex flex-column p-2 text-center' style={{width:'25%'}}>
//               <div className='d-flex text-center' >
//               <p className='font-fa text-primary mt-2 fs-4 dash-secure'>Secure-u</p>
//                 <FaIcons.FaBars className='mt-3 custom-bar' />
//               </div>
//                 <hr className='text-secondary' />
//                 <ul className='nav nav-pills flex-column'>
//                     <li className='nav-item'>
//                         <Link to="/Allitems" className='nav-link'>
//                             <div className='item-nav  nav-btn'>  <span href="#link" className='link-color'>All items</span></div>
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to="/Addpass" className='nav-link'>
//                             <div className='item-nav  nav-btn'>  <span href="#link" className='link-color'>Add Password</span></div>
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/Genratepass' className='nav-link'>
//                             <div className='item-nav  nav-btn'>  <span href="#link" className='link-color'>Genrate Password</span></div>
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/Addnotes' className='nav-link'>
//                             <div className='item-nav  nav-btn'>  <span href="#link" className='link-color'>Add Note</span></div>
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//             <div style={{width:'70%'}}>
//                 <p>components -----</p>
//             </div>
//         </div>
//     )
// }

// export default Sidebar


import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import '../dashboard/dashboard.css'

function Sidebar({ children }) {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-header'>
        <p className='font-fa text-primary fs-4'>Secure-u</p>
        <FaIcons.FaBars className='custom-bar' />
      </div>
      <hr className='text-secondary' />
      <ul className='nav nav-pills flex-column'>
        <li className='nav-item'>
          <Link to="/Allitems" className='nav-link'>
            <div className='item-nav  nav-btn'>  <span className='link-color'>All items</span></div>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/Addpass" className='nav-link'>
            <div className='item-nav  nav-btn'>  <span className='link-color'>Add Password</span></div>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/Genratepass' className='nav-link'>
            <div className='item-nav  nav-btn'>  <span className='link-color'>Generate Password</span></div>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/Addnotes' className='nav-link'>
            <div className='item-nav  nav-btn'>  <span className='link-color'>Add Note</span></div>
          </Link>
        </li>
      </ul>
      <div className='sidebar-content'>
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
