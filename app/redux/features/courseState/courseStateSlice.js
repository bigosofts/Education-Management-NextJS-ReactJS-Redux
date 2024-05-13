"use client";

import { createSlice } from "@reduxjs/toolkit";

// Define the initial state as null
const initialState = {
  value: {
    course: null,
    department: null,
    jamat: null,
    semester: null,
    batch: null,
  },
};

export const isCourseStateSlice = createSlice({
  name: "courseState",
  initialState,
  reducers: {
    setInitialData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export the actions
export const { setInitialData } = isCourseStateSlice.actions;

export default isCourseStateSlice.reducer;
