import React from 'react'
import '../dashboard/dashboard.css'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
function Sidebar() {
    return (
        <>
            <div className='d-flex flex-column p-2 text-center '>
              <div className='d-flex text-center' >
              <p className='font-fa text-primary mt-2 fs-4 dash-secure'>Secure-u</p>
                <FaIcons.FaBars className='mt-3 custom-bar' />
              </div>
                <hr className='text-secondary' />
                <ul className='nav nav-pills flex-column'>
                    <li className='nav-item'>
                        <Link to="/Allitems" className='nav-link'>
                            <div className='item-nav  nav-btn'>  <span href="#link" className='link-color'>All items</span></div>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Addpass" className='nav-link'>
                            <div className='item-nav  nav-btn'>  <span href="#link" className='link-color'>Add Password</span></div>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Genratepass' className='nav-link'>
                            <div className='item-nav  nav-btn'>  <span href="#link" className='link-color'>Genrate Password</span></div>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Addnotes' className='nav-link'>
                            <div className='item-nav  nav-btn'>  <span href="#link" className='link-color'>Add Note</span></div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar