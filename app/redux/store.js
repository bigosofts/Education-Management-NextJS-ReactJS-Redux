"use client";
import { configureStore } from "@reduxjs/toolkit";
import isAdminSlice from "./features/isAdmin/isAdminSlice";

import counterReducer from "./features/counter/counterSlice";

import isCourseStateSlice from "./features/courseState/courseStateSlice";

import classesReducer from "./features/classes/classesSlice";
import studentsReducers from "./features/students/studentsSlice";
import teachersReducers from "./features/teachers/teachersSlice";
import booksReducers from "./features/books/booksSlice";
import coursesReducers from "./features/courses/coursesSlice";
import djsReducers from "./features/djs/djsSlice";
import noticesReducers from "./features/notices/noticesSlice";
import postFilterSlice from "./features/postFilter/postFilterSlice";
import baseApi from "./api/baseapi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    isAdmin: isAdminSlice,
    courseState: isCourseStateSlice,
    classes: classesReducer,
    students: studentsReducers,
    teachers: teachersReducers,
    books: booksReducers,
    courses: coursesReducers,
    djs: djsReducers,
    notices: noticesReducers,
    postFilter: postFilterSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleWear) =>
    getDefaultMiddleWear().concat(baseApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
