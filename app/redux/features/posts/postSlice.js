//this is async thunk example broilerplate
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  const posts = await getPosts();
  return posts;
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default postSlice.reducer;
