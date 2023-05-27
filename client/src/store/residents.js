import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/apiUrl";

export const addResidents = createAsyncThunk("ADD_RESIDENTS", (data) =>
{
  return axios.post(`${apiUrl}/residents`, data).then((resident) => resident.data);
});

export const updateResidents = createAsyncThunk("UPDATE_RESIDENTS",
  (data, thunkAPI) => {
    const { resident } = thunkAPI.getState();
    return axios
      .put(`${apiUrl}/residents/${resident.id}`, data)
      .then((update) => update.data);
  }
);

export const deleteResidents = createAsyncThunk("DELETE_RESIDENTS", (id) => {
  return axios.delete(`${apiUrl}/residents/${id}`);
});

export const getAllResidents = createAsyncThunk("GET_ALL_RESIDENTS", () => {
  return axios.get(`${apiUrl}/residents`);
});

export const getResident = createAsyncThunk("GET_RESIDENT", (id) => {
  return axios.get(`${apiUrl}/residents/${id}`).then((resident) => resident.data);
});

const residentsReducer = createReducer(null, {
  [getAllResidents.fulfilled]: (state, action) => action.payload,
  [getResident.fulfilled]: (state, action) => action.payload,
});

export default residentsReducer;