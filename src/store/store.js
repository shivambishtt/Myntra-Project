import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../slice/itemSlice.js";
import loaderSlice from "../slice/loaderSlice.js";
import bagSlice from "../slice/bagSlice.js";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: loaderSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default store;
