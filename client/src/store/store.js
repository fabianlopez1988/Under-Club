import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import residentsReducer from "./residents";
import userReducer from "./user";
import eventReducer from "./events";
import podcastReducer from "./podcast";
import episodeReducer from "./episodes";
import agencyReducer from "./agency";
import newReducer from "./news";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  reducer: {
    user: userReducer,
    resident: residentsReducer,
    events: eventReducer,
    podcast: podcastReducer,
    episode: episodeReducer,
    agency: agencyReducer,
    news: newReducer,
  },
});

export default store;
