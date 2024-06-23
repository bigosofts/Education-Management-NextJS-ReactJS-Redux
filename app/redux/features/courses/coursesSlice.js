import { selectDataTwo } from "@/apiservices/courseapiservices";

//this is async thunk example broilerplate
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  courses: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchCourses= createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const courses = await selectDataTwo();
    return courses.data;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default coursesSlice.reducer;
