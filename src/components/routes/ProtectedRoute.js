import { Navigate, Outlet } from "react-router-dom";

const CheckLogin = () => {
  let token = localStorage.getItem("token")
  let userData = JSON.parse(localStorage.getItem("userData"))
  return token && userData ? <Outlet /> : <Navigate to="/login" />;
};

export default CheckLogin;
