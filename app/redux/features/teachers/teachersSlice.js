import { selectDataPlus } from "@/apiservices/teacherapiservices";
import { batchAPICall } from "@/helper/batchApiCall";

//this is async thunk example broilerplate
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  teachers: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const teachers = await batchAPICall(selectDataPlus, 5, 0);
    return teachers;
  }
);

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default teachersSlice.reducer;
