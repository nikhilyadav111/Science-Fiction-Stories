import { configureStore } from "@reduxjs/toolkit";
import scienceReducer from "./science/scienceSlice";
import earthReducer from "./earth/earthSlice";
const store = configureStore({
  reducer: {
    science: scienceReducer,
    earth: earthReducer,
  },
});

export default store;
