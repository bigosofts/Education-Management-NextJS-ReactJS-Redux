import { selectDataTwo } from "@/apiservices/pushNoticeapiservices";

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
    const notices = await selectDataTwo({ reciever }, null);
    return notices.data;
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
