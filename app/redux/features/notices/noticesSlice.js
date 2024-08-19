import { selectDataPlus } from "@/apiservices/pushNoticeapiservices";
import { batchAPICall } from "@/helper/batchApiCall";

//this is async thunk example broilerplate
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  notices: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async (reciever) => {
    const notices = await batchAPICall(selectDataPlus, 5, reciever);

    return notices;
  }
);

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotices.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.notices = action.payload;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default noticesSlice.reducer;
