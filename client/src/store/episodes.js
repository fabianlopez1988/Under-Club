import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/apiUrl";

export const addEpisode = createAsyncThunk("ADD_EPISODE", (data) => {
  return axios.post(`${apiUrl}/episode`, data).then((episode) => episode.data);
});

export const updateEpisode = createAsyncThunk("UPDATE_EPISODE", (data, thunkAPI) => {
  const {episode} = thunkAPI.getState();
  return axios.put(`${apiUrl}/episode/${episode._id}`, data).then((update) => update.data);
});

export const deleteEpisode = createAsyncThunk("DELETE_EPISODE", (id) => {
  return axios.delete(`${apiUrl}/episode/${id}`);
});

export const getAllEpisodes = createAsyncThunk("GET_ALL_EPISODE", () => {
  return axios.get(`${apiUrl}/episode`);
});

export const getEpisode = createAsyncThunk("GET_EPISODE", (id) => {
  return axios.get(`${apiUrl}/episode/${id}`).then((episode) => episode.data);
});

const episodeReducer = createReducer(null, {
  [getAllEpisodes.fulfilled]: (state, action) => action.payload,
  [getEpisode.fulfilled]: (state, action) => action.payload,
});

export default episodeReducer;
