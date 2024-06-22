"use client";
import { configureStore } from "@reduxjs/toolkit";
import isAdminSlice from "./features/isAdmin/isAdminSlice";

import counterReducer from "./features/counter/counterSlice";

import isCourseStateSlice from "./features/courseState/courseStateSlice";

import postsReducer from "./features/posts/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    isAdmin: isAdminSlice,
    courseState: isCourseStateSlice,
    posts: postsReducer,
  },
});
