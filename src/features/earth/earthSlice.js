import { createSlice } from "@reduxjs/toolkit";

const earthSlice = createSlice({
  name: "earth",
  initialState: {
    future: [],
    city: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMeaasge: "",
  },

  reducers: {},
  extraReducers : () => {}
});

export default earthSlice.reducer
