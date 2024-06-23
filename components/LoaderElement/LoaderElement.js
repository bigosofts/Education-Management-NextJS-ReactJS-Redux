"use client";
import { useEffect } from "react";
import { fetchClasses } from "@/app/redux/features/classes/classesSlice";

import { fetchBooks } from "@/app/redux/features/books/booksSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "@/app/redux/features/students/studentsSlice";
import { fetchTeachers } from "@/app/redux/features/teachers/teachersSlice";

function LoaderElement() {
  const dispatch = useDispatch();

  const classesIsLoading = useSelector((state) => state.classes.isLoading);
  const classes = useSelector((state) => state.classes.classes);

  const studentsIsLoading = useSelector((state) => state.students.isLoading);
  const students = useSelector((state) => state.students.students);

  const teachersIsLoading = useSelector((state) => state.teachers.isLoading);
  const teachers = useSelector((state) => state.teachers.teachers);

  const booksIsLoading = useSelector((state) => state.books.isLoading);
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    if (!booksIsLoading && books.length == 0) {
      dispatch(fetchBooks());
    }
    if (
      !booksIsLoading &&
      books.length > 0 &&
      !classesIsLoading &&
      classes.length == 0
    ) {
      dispatch(fetchClasses());
    }
    if (
      !classesIsLoading &&
      classes.length > 0 &&
      !teachersIsLoading &&
      teachers.length == 0
    ) {
      dispatch(fetchTeachers());
    }
    if (
      !teachersIsLoading &&
      teachers.length > 0 &&
      !studentsIsLoading &&
      students.length == 0
    ) {
      dispatch(fetchStudents());
    }
  }, [books, classes, teachers]);
}

export default LoaderElement;
