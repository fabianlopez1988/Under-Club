import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/apiUrl";

export const getUser = createAsyncThunk("GET_USER", () => {
  const userId = JSON.parse(localStorage.getItem("user")).id;
  return axios.get(`${apiUrl}/admin/${userId}`).then((user) => user.data);
});

export const userRegister = createAsyncThunk("USER_REGISTER", (data) => {
  return axios.post(`${apiUrl}/admin`, data).then((user) => user.data);
});

export const userLogin = createAsyncThunk("USER_LOGGED", (data) => {
  return axios.post(`${apiUrl}/auth/login`, data).then((user) => {
    localStorage.setItem("user", JSON.stringify(user.data.email));
    return user.data;
  }
  )
});

// export const userLogout = createAsyncThunk("USER_LOGOUT", () => {
//   return axios.post(`${apiUrl}/auth/logout`).then(() => {
//     localStorage.removeItem("user");
//   });
// });

export const userLogout = createAsyncThunk("USER_LOGOUT", () => {
  localStorage.removeItem("user");
  return Promise.resolve();
});

export const userUpdate = createAsyncThunk("USER_UPDATE", (data) => {
  const userId = JSON.parse(localStorage.getItem("user")).id;
  return axios.put(`${apiUrl}/admin/${userId}`, data)
  .then((user)=> {
    localStorage.setItem("user", JSON.stringify(user.data));  
    return user.data;
  })
});

export const userDelete = createAsyncThunk("USER_DELETE", (id) => {
  return axios.delete(`${apiUrl}/admin/${id}`);
});

export const getUsersAll = createAsyncThunk("GET_ALL_USER", () => {
  return axios.get(`${apiUrl}/admin`);
});

export const sendMailToUnder = createAsyncThunk("SEND_MAIL_TO_UNDER", (mailData) => {
  return axios.post(`${apiUrl}/admin/sendMail`, mailData)
})

const userReducer = createReducer(null, {
  [getUser.fulfilled]: (state, action) => action.payload,
  [getUsersAll.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
