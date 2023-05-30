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

// export const userLogin = createAsyncThunk("USER_LOGGED", (data) => {
//   return axios.post(`${apiUrl}/auth/login`, data).then((user) => {
//     localStorage.setItem("user", JSON.stringify(user.data.email));
//     return user.data;
//   }
//   )
// });

export const userLogin = createAsyncThunk("USER_LOGGED", (data) => {
  return axios.post(`${apiUrl}/auth/login`, data).then((user) => {
    const { password } = data; // Obtén el correo electrónico y la contraseña del objeto data
    const userData = {
      email: user.data.email,
      password: password, // Agrega la contraseña al objeto userData
    };
    localStorage.setItem("user", JSON.stringify(userData));
    return userData; // Devuelve el objeto userData
  });
});

export const userLogout = createAsyncThunk("USER_LOGOUT", (data) => {
  return axios.post(`${apiUrl}/auth/logout`, data).then(() => {
    localStorage.removeItem("user");
  });
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
