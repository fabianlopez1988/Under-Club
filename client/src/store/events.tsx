import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

const urlApi: string | undefined = process.env.NEXT_PUBLIC_LOCAL_API_KEY;

export const addEvent = createAsyncThunk('ADD_EVENT', (data) => {
  return axios.post(`${urlApi}/events`, data).then((event) => event.data);
});

export const updateEvent = createAsyncThunk('UPDATE_EVENT', (data, thunkAPI) => {
  const { events } = thunkAPI.getState();
  return axios.put(`${urlApi}/events/${events._id}`, data).then((update) => update.data);
});

export const deleteEvent = createAsyncThunk('DELETE_EVENT', (id) => {
  return axios.delete(`${urlApi}/events/${id}`);
});

export const getAllEvent = createAsyncThunk('GET_ALL_EVENT', () => {
  return axios.get(`${urlApi}/events`);
});

export const getEvent = createAsyncThunk('GET_EVENT', (id) => {
  return axios.get(`${urlApi}/events/${id}`).then((event) => event.data);
});

const eventReducer = createReducer(null, {
  [getAllEvent.fulfilled]: (state, action) => action.payload,
  [getEvent.fulfilled]: (state, action) => action.payload,
});

export default eventReducer;
