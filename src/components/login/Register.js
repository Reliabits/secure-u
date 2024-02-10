import React from 'react'
import '../login/login.css'
import Registerpic from '../../assets/register.png'
// import { useNavigate } from "react-router-dom";
function Register() {
    // const navigate = useNavigate();
  return (
   <>
      <div className='container '>
    <div className='row login_margin pb-5'>
        <div className='col-sm-5'>
            <h1 className='text-primary font-fa'>Please enter Your details to register</h1>
        <input type="email" className="form-control custom-input mb-4 font-fa mt-3" placeholder="please enter your valid email" />
        <input type="password" className="form-control custom-input  mb-4 font-fa" placeholder="Enter password" />
        <input type="password" className="form-control custom-input  mb-4 font-fa" placeholder="re enter your password" />
        <input type="password" className="form-control custom-input  mb-4 font-fa" placeholder="Reminder" />
        <button className='btn login-btn mt-3 font-fa'>submit</button>
        </div>
        <div className='col-sm-7 text-center'>
            <img className='img-fluid' src={Registerpic} alt='login' />
        </div>
    </div>
   </div>
   </>
  )
}

export default Register