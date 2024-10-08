import { selectDataPlus } from "@/apiservices/studentapiservices";
import { batchAPICall } from "@/helper/batchApiCall";

//this is async thunk example broilerplate
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  students: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async (batchCount) => {
    let students;

    if (batchCount == "all") {
      students = await batchAPICall(selectDataPlus, 5, 0);
    } else {
      students = await batchAPICall(selectDataPlus, 5, batchCount);
    }

    return students;
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default studentsSlice.reducer;
