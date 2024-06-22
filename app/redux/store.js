"use client";
import { configureStore } from "@reduxjs/toolkit";
import isAdminSlice from "./features/isAdmin/isAdminSlice";

import counterReducer from "./features/counter/counterSlice";

import isCourseStateSlice from "./features/courseState/courseStateSlice";

import classesReducer from "./features/classes/classesSlice";
import studentsReducers from "./features/students/studentsSlice";
import teachersReducers from "./features/teachers/teachersSlice";
import booksReducers from "./features/books/booksSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    isAdmin: isAdminSlice,
    courseState: isCourseStateSlice,
    classes: classesReducer,
    students: studentsReducers,
    teachers: teachersReducers,
    books: booksReducers,
  },
});
