import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const addEpisode = createAsyncThunk("ADD_EPISODE", (data) => {
  return axios.post("/episode", data).then((episode) => episode.data);
});

export const updateEpisode = createAsyncThunk("UPDATE_EPISODE", (data, thunkAPI) => {
  console.log(data , "soy data")
  const {episode} = thunkAPI.getState();
  return axios.put(`/episode/${episode.id}`, data).then((update) => update.data);
});

export const deleteEpisode = createAsyncThunk("DELETE_EPISODE", (id) => {
  return axios.delete(`/episode/${id}`);
});

export const getAllEpisodes = createAsyncThunk("GET_ALL_EPISODE", () => {
  return axios.get("/episode");
});

export const getEpisode = createAsyncThunk("GET_EPISODE", (id) => {
  return axios.get(`/episode/${id}`).then((episode) => episode.data);
});

const episodeReducer = createReducer(null, {
  [getAllEpisodes.fulfilled]: (state, action) => action.payload,
  [getEpisode.fulfilled]: (state, action) => action.payload,
});

export default episodeReducer;
