"use client";
import { configureStore } from "@reduxjs/toolkit";
import isAdminSlice from "./features/isAdmin/isAdminSlice";

import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    isAdmin: isAdminSlice,
  },
});
