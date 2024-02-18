import React, { useState } from "react";
import "../login/login.css";
import Loginpic from "../../assets/login.png";
import { useLocation, useNavigate } from "react-router-dom";
import { userLogin } from "../../api/api";
import { toast } from "react-toastify";
function Login() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
      setLoading(true);
      let result = await userLogin(userData);
      toast.success(result?.data?.message);
      localStorage.setItem("userData", JSON.stringify(result?.data?.user));
      localStorage.setItem("token", result?.data?.token);
      // location.reload();
      navigate("/Dashboard");
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
        <div className="row login_margin login-padding">
          <div className="col-sm-4 mt-5 pt-5">
            <h1 className="text-primary font-fa">Login here</h1>
            <input
              type="email"
              className="form-control custom-input mb-4 font-fa mt-3 "
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="please enter your email"
            />
            <input
              type="password"
              className="form-control custom-input font-fa"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <button
              disabled={loading}
              className="btn login-btn text-center mt-3 font-fa"
              onClick={() => handleSubmit()}
            >
              {" "}
              login
            </button>
            <button
              onClick={() => navigate("/Register")}
              className="btn login-btn text-center mt-3 font-fa"
            >
              signup its free{" "}
            </button>
            <p className="font-fa mt-3 text-dark custom-forgot">
              forgot password ?
            </p>
            <button
              onClick={() => navigate("/Forgot")}
              className="btn reset-btn text-center font-fa"
            >
              {" "}
              Reset password
            </button>
          </div>
          <div className="col-sm-8">
            <img className="img-fluid" src={Loginpic} alt="login" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
