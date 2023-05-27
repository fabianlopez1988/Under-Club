import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const addNews = createAsyncThunk("ADD_NEW", (data) => {
  return axios.post("/news", data).then((newData) => newData.data);
});

export const updateNews = createAsyncThunk("UPDATE_NEW", (data) => {
  const id = data.id;
  return axios.put(`/news/${id}`, data).then((update) => update.data);
});

export const deleteNews = createAsyncThunk("DELETE_NEW", (id) => {
  return axios.delete(`/news/${id}`);
});

export const getAllNews = createAsyncThunk("GET_ALL_NEW", () => {
  return axios.get("/news").then((news) => news.data);
});

export const getNews = createAsyncThunk("GET_NEW", (id) => {
  return axios.get(`/news/${id}`).then((newData) => newData.data);
});

const newReducer = createReducer(null, {
  [getAllNews.fulfilled]: (state, action) => action.payload,
  [getNews.fulfilled]: (state, action) => action.payload,
});

export default newReducer;
