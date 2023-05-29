import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/apiUrl";

export const addPodcast = createAsyncThunk("ADD_PODCAST", (data) => {
  return axios.post(`${apiUrl}/podcast`, data).then((podcast) => podcast.data);
});

export const updatePodcast = createAsyncThunk("UPDATE_PODCAST", (data, thunkAPI) => {
  const {podcast} = thunkAPI.getState();
  return axios.put(`${apiUrl}/podcast/${podcast.id}`, data).then((update) => update.data);
});

export const deletePodcast = createAsyncThunk("DELETE_PODCAST", (id) => {
  return axios.delete(`${apiUrl}/podcast/${id}`);
});

export const getAllPodcast = createAsyncThunk("GET_ALL_PODCAST", () => {
  return axios.get(`${apiUrl}/podcast`);
});

export const getPodcast = createAsyncThunk("GET_PODCAST", (id) => {
  return axios.get(`${apiUrl}/podcast/${id}`).then((podcast) => podcast.data);
});

const podcastReducer = createReducer(null, {
  [getAllPodcast.fulfilled]: (state, action) => action.payload,
  [getPodcast.fulfilled]: (state, action) => action.payload,
});

export default podcastReducer;
