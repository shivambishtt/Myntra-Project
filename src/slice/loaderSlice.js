import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    }, //status of the fetching
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    }, //start the fetching status
    markFetchingEnded: (state) => {
      state.currentlyFetching = false;
    }, // ends the fetching status
  },
});

export const fetchLoaderAction = loaderSlice.actions;

export default loaderSlice;
