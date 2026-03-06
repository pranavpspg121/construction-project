import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice.jsx";

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;
