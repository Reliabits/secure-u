import React from 'react'
import '../login/login.css'
import Loginpic from '../../assets/login.png'
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
  return (
   <> 
   <div className='container '>
    <div className='row login_margin pb-5'>
        <div className='col-sm-4 mt-5 pt-5'>
            <h1 className='text-primary font-fa'>Login here</h1>
        <input type="email" className="form-control custom-input mb-4 font-fa mt-3 " placeholder="please enter your email" />
        <input type="password" className="form-control custom-input font-fa" placeholder="Enter your password" />
        <button className='btn login-btn text-center mt-3 font-fa'> login</button>
        <button onClick={() => navigate("/Register")} className='btn login-btn text-center mt-3 font-fa'>signup its free </button>
       
      
      
        </div>
        <div className='col-sm-8'>
            <img className='img-fluid' src={Loginpic} alt='login' />
        </div>
    </div>
   </div>
   </>
  )
}

export default Login