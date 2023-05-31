import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/apiUrl";

export const addInternationalResidents = createAsyncThunk("ADD_INTERNATIONAL_RESIDENTS", (data) =>
{
  return axios.post(`${apiUrl}/agency`, data).then((resident) => resident.data);
});

export const updateInternationalResidents = createAsyncThunk("UPDATE_INTERNATIONAL_RESIDENTS",
  (data, thunkAPI) => {
    const { agency } = thunkAPI.getState();
    return axios
      .put(`${apiUrl}/agency/${agency._id}`, data)
      .then((update) => update.data);
  }
);

export const deleteInternationalResidents = createAsyncThunk("DELETE_INTERNATIONAL_RESIDENTS", (id) => {
  return axios.delete(`${apiUrl}/agency/${id}`);
});

export const getAllInternationalResidents = createAsyncThunk("GET_ALL_INTERNATIONAL_RESIDENTS", () => {
  return axios.get(`${apiUrl}/agency`);
});

export const getInternationalResident = createAsyncThunk("GET_INTERNATIONAL_RESIDENT", (id) => {
  return axios.get(`${apiUrl}/agency/${id}`).then((resident) => resident.data);
});

const agencyReducer = createReducer(null, {
  [getAllInternationalResidents.fulfilled]: (state, action) => action.payload,
  [getInternationalResident.fulfilled]: (state, action) => action.payload,
});

export default agencyReducer;