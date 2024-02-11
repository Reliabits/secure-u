import React from 'react'

function Verification() {
  return (
    <div className='container'>
    <div className='row login_margin login-padding'>
        <div className='col-sm-12 text-center'>
        <h2 className='font-fa'>Please enter the code send to your email </h2>
        <input type="password" className="form-control custom-input  mb-4 font-fa" placeholder="please enter the code" />
        <button className='btn login-btn text-center mt-3 font-fa'> verify</button>
        </div>
    </div>
   </div>
  )
}

export default Verification