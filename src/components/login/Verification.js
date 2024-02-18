import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userResetPass, userVerify } from "../../api/api";
import { toast } from "react-toastify";

function Verification() {
  const [verification_code, setVerification_code] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const _id = location.state?.userId;
  const forgotMethod = location.state?.forgot;

  const handleSubmit = async () => {
    try {
      if (!_id) {
        toast.error("id is required");
        return;
      }
      if (!verification_code) {
        toast.error("please fill the verification code");
        return;
      }
      setLoading(true);
      let result
      if(forgotMethod){
         result = await userResetPass({ _id, resetCode:verification_code });
         toast.success(result?.data?.message);
         console.log("result :",result)
         navigate("/Savepass", { state: { userId: result?.data?.user?._id } });
      }else{
         result = await userVerify({ _id, verification_code });
         toast.success(result?.data?.message);
         navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row login_margin login-padding">
        <div className="col-sm-12 text-center">
          <h2 className="font-fa">Please enter the code send to your email </h2>
          <input
            type="password"
            value={verification_code}
            onChange={(e) => setVerification_code(e.target.value)}
            className="form-control custom-input  mb-4 font-fa"
            placeholder="please enter the code"
          />
          <button
            disabled={loading}
            onClick={() => handleSubmit()}
            className="btn login-btn text-center mt-3 font-fa"
          >
            {loading ? "loading.." : "verify"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Verification;
