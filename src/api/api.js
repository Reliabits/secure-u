import axios from "axios";

const API_BASE_URL = "http://localhost:3333/api/v1";

const token= localStorage.getItem("token")

const setAuthorizationHeader = () => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};



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
const createPassword = async (formData) => {
  setAuthorizationHeader()
  const response = await axios.post(`${API_BASE_URL}/password`, formData);
  return response;
};
const listPassword = async (_id) => {
  setAuthorizationHeader()
  const response = await axios.get(`${API_BASE_URL}/password?createdBy=${_id}`);
  return response;
};
const listPasswordUpdate = async (formData) => {
  setAuthorizationHeader()
  const response = await axios.put(`${API_BASE_URL}/password/${formData._id}`,{...formData,_id:undefined});
  return response;
};



export {
  userRegister,
  userLogin,
  userVerify,
  userForgotPass,
  userResetPass,
  createPassword,
  listPassword,
  listPasswordUpdate
};
