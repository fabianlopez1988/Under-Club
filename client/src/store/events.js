import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const addEvent = createAsyncThunk("ADD_EVENT", (data) => {
  return axios.post("/events", data).then((event) => event.data);
});

export const updateEvent = createAsyncThunk("UPDATE_EVENT", (data, thunkAPI) => {
  const {events} = thunkAPI.getState();
  return axios.put(`/events/${events.id}`, data).then((update) => update.data);
});

export const deleteEvent = createAsyncThunk("DELETE_EVENT", (id) => {
  return axios.delete(`/events/${id}`);
});

export const getAllEvent = createAsyncThunk("GET_ALL_EVENT", () => {
  return axios.get("/events");
});

export const getEvent = createAsyncThunk("GET_EVENT", (id) => {
  return axios.get(`/events/${id}`).then((event) => event.data);
});

const eventReducer = createReducer(null, {
  [getAllEvent.fulfilled]: (state, action) => action.payload,
  [getEvent.fulfilled]: (state, action) => action.payload,
});

export default eventReducer;
