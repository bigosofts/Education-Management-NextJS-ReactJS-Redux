import { selectDataPlus } from "@/apiservices/classapiservices";

import { batchAPICall } from "@/helper/batchApiCall";

//this is async thunk example broilerplate
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  classes: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchClasses = createAsyncThunk(
  "classes/fetchClasses",
  async (data) => {
    let classes;
    if (data.batch == "all") {
      classes = await batchAPICall(selectDataPlus, 5, 0);
    } else {
      if (data.userName) {
        classes = await batchAPICall(selectDataPlus, 5, data.userName);
      } else {
        classes = await batchAPICall(selectDataPlus, 5, data.batch);
      }
    }

    return classes;
  }
);

const classesSlice = createSlice({
  name: "classes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.classes = action.payload;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default classesSlice.reducer;
