import React from 'react'
import '../login/login.css'
import { useNavigate } from "react-router-dom";
function Forgot() {
  const navigate = useNavigate();
  return (
   <>
   <div className='container'>
    <div className='row login_margin login-padding'>
        <div className='col-sm-12 text-center'>
        <h2 className='font-fa'>Please enter your new password </h2>
        <input type="password" className="form-control custom-input  mb-4 font-fa" placeholder="Enter your new password" />
        <button className='btn login-btn text-center mt-3 font-fa'  onClick={() => navigate("/Savepass")}> submit</button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Forgot