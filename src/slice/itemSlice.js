import { createSlice } from "@reduxjs/toolkit";
import { items } from "../data/items.js";

const itemSlice = createSlice({
  name: "items",
  initialState: items,
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice;
