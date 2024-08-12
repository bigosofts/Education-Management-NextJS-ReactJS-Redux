import { selectDataTwo } from "@/apiservices/classapiservices";

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
      classes = await selectDataTwo(null, null);
    } else {
      if (data.userName) {
        classes = await selectDataTwo({ "teacher.TID": userName }, null);
      } else {
        classes = await selectDataTwo({ batchNo: data.batch }, null);
      }
    }

    return classes.data;
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
