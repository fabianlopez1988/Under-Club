import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/apiUrl";

export const addEvent = createAsyncThunk("ADD_EVENT", (data) => {
  return axios.post(`${apiUrl}/events`, data).then((event) => event.data);
});

export const updateEvent = createAsyncThunk("UPDATE_EVENT", (data, thunkAPI) => {
  const {events} = thunkAPI.getState();
  return axios.put(`${apiUrl}/events/${events.id}`, data).then((update) => update.data);
});

export const deleteEvent = createAsyncThunk("DELETE_EVENT", (id) => {
  return axios.delete(`${apiUrl}/events/${id}`);
});

export const getAllEvent = createAsyncThunk("GET_ALL_EVENT", () => {
  return axios.get(`${apiUrl}/events`);
});

export const getEvent = createAsyncThunk("GET_EVENT", (id) => {
  return axios.get(`${apiUrl}/events/${id}`).then((event) => event.data);
});

const eventReducer = createReducer(null, {
  [getAllEvent.fulfilled]: (state, action) => action.payload,
  [getEvent.fulfilled]: (state, action) => action.payload,
});

export default eventReducer;
