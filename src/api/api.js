import axios from "axios";

const API_BASE_URL = "http://localhost:3333/api/v1";

const userRegister = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/user_signup`, formData);
  return response;
};
const userLogin = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/user_login`, formData);
  return response;
};
const userVerify = async (formData) => {
  const response = await axios.put(`${API_BASE_URL}/user_verify`, formData);
  return response;
};
const userForgotPass = async (formData) => {
  const response = await axios.put(`${API_BASE_URL}/reset_password`, formData);
  return response;
};
const userResetPass = async (formData) => {
  const response = await axios.put(`${API_BASE_URL}/reset_passcode`, formData);
  return response;
};



export {
  userRegister,
  userLogin,
  userVerify,
  userForgotPass,
  userResetPass
};
