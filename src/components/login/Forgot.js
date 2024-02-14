import React, { useState } from 'react'
import '../login/login.css'
import { useNavigate } from "react-router-dom";
import { userForgotPass } from '../../api/api';
import { toast } from 'react-toastify';
function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (!/\S+@\S+\.\S+/.test(email)) {
        toast.error("Invalid email");
        return;
      }
      setLoading(true);
      let result = await userForgotPass({ email });
      toast.success(result?.data?.message);
      console.log("result :",result)
      navigate("/Verification", { state: { userId: result?.data?.userId ,forgot:true } });
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
        <h2 className='font-fa'>Please enter your email </h2>
        <input type="email"  value={email}
            onChange={(e) => setEmail(e.target.value)} className="form-control custom-input  mb-4 font-fa" placeholder="please enter your valid user email" />
        <button  disabled={loading}
              onClick={() => handleSubmit()} className='btn login-btn text-center mt-3 font-fa'  > {loading ? "loading.." : "submit"}</button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Forgot