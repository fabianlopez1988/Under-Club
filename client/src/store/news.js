import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/apiUrl";

export const addNews = createAsyncThunk("ADD_NEW", (data) => {
  return axios.post(`${apiUrl}/news`, data).then((newData) => newData.data);
});

export const updateNews = createAsyncThunk("UPDATE_NEW", (data, thunkAPI) => {
  const {news} = thunkAPI.getState();
  return axios.put(`${apiUrl}/news/${news._id}`, data).then((update) => update.data);
});

export const deleteNews = createAsyncThunk("DELETE_NEW", (id) => {
  return axios.delete(`${apiUrl}/news/${id}`);
});

export const getAllNews = createAsyncThunk("GET_ALL_NEW", () => {
  return axios.get(`${apiUrl}/news`).then((news) => news.data);
});

export const getNews = createAsyncThunk("GET_NEW", (id) => {
  return axios.get(`${apiUrl}/news/${id}`).then((newData) => newData.data);
});

const newReducer = createReducer(null, {
  [getAllNews.fulfilled]: (state, action) => action.payload,
  [getNews.fulfilled]: (state, action) => action.payload,
});

export default newReducer;
