import React, { useState } from "react";
import "../login/login.css";
import Registerpic from "../../assets/register.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userRegister } from "../../api/api";
// import { useNavigate } from "react-router-dom";
function Register() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!/\S+@\S+\.\S+/.test(userData.email)) {
        toast.error("Invalid email");
        return;
      }
      if (userData.password.length < 6) {
        toast.error("Password should be at least 6 characters");
        return;
      }
      if (userData.password !== userData.confirmPass) {
        toast.error("Passwords do not match with confirm password");
        return;
      }
      setLoading(true);
      let result = await userRegister({ ...userData, confirmPass: undefined });
      toast.success(result?.data?.message);
      navigate("/Verification", { state: { userId: result?.data?.userId } });
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container ">
        <div className="row  login_margin register-padding">
          <div className="col-sm-5">
            <h1 className="text-primary font-fa">
              Please enter Your details to register
            </h1>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="form-control custom-input mb-4 font-fa mt-3"
              placeholder="please enter your valid email"
            />
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="form-control custom-input  mb-4 font-fa"
              placeholder="Enter password"
            />
            <input
              type="password"
              name="confirmPass"
              value={userData.confirmPass}
              onChange={handleChange}
              className="form-control custom-input  mb-4 font-fa"
              placeholder="re enter your password"
            />
            <input
              type="password"
              name="reminder"
              value={userData.reminder}
              onChange={handleChange}
              className="form-control custom-input  mb-4 font-fa"
              placeholder="Reminder"
            />
            <button
              disabled={loading}
              onClick={() => handleSubmit()}
              className="btn login-btn mt-3 font-fa"
            >
              {loading ? "loading.." : "submit"}
            </button>
          </div>
          <div className="col-sm-7 text-end">
            <img className="img-fluid" src={Registerpic} alt="login" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
