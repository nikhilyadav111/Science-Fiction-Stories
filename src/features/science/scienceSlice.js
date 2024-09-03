import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import science from "./scienceService";
import service from "./scienceService";

const scienceSlice = createSlice({
  name: "science",
  initialState: {
    stories: [],
    store: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStories.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.stories = action.payload;
        state.message = "";
      })
      .addCase(getStories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleStories.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getSingleStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.store = action.payload;
        state.message = "";
      })
      .addCase(getSingleStories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default scienceSlice.reducer;

export const getStories = createAsyncThunk(
  "FETCH/STORIES",
  async (_, thunkAPI) => {
    try {
      return await service.fetchStories();
    } catch (error) {
      console.error("Error in getStories thunk:", error);
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getSingleStories = createAsyncThunk(
  "FETCH/SINGLE",
  async (id, thunkAPI) => {
    try {
      return await service.singleStories(id)
    } catch (error) {
      console.error("Error in getStories thunk:", error);
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
