import React, { useState } from 'react'
import '../login/login.css'
import { useLocation, useNavigate } from "react-router-dom";
import { userNewPass } from '../../api/api';
import { toast } from 'react-toastify';
function Forgot() {
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const _id = location.state?.userId;

  console.log("id :",_id)

  const handleSubmit = async () => {
    try {
      if (password.length < 6) {
        toast.error("Password should be at least 6 characters");
        return;
      }
      setLoading(true);
      let result = await userNewPass(_id,{ password });
      toast.success(result?.data?.message);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response.data?.error);
    } finally {
      setLoading(false);
    }
  };


  return (
   <>
   <div className='container'>
    <div className='row login_margin login-padding'>
        <div className='col-sm-12 text-center'>
        <h2 className='font-fa'>Please enter your new password </h2>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control custom-input  mb-4 font-fa" placeholder="Enter your new password" />
        <button className='btn login-btn text-center mt-3 font-fa' disabled={loading}  onClick={handleSubmit}> {loading ? "loading":"submit"}</button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Forgot