import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const addPodcast = createAsyncThunk("ADD_PODCAST", (data) => {
  return axios.post("/podcast", data).then((podcast) => podcast.data);
});

export const updatePodcast = createAsyncThunk("UPDATE_PODCAST", (data, thunkAPI) => {
  const {podcast} = thunkAPI.getState();
  return axios.put(`/podcast/${podcast.id}`, data).then((update) => update.data);
});

export const deletePodcast = createAsyncThunk("DELETE_PODCAST", (id) => {
  return axios.delete(`/podcast/${id}`);
});

export const getAllPodcast = createAsyncThunk("GET_ALL_PODCAST", () => {
  return axios.get("/podcast");
});

export const getPodcast = createAsyncThunk("GET_PODCAST", (id) => {
  return axios.get(`/podcast/${id}`).then((podcast) => podcast.data);
});

const podcastReducer = createReducer(null, {
  [getAllPodcast.fulfilled]: (state, action) => action.payload,
  [getPodcast.fulfilled]: (state, action) => action.payload,
});

export default podcastReducer;
