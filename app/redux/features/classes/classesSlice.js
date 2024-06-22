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
  async () => {
    const classes = await selectDataTwo();
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
