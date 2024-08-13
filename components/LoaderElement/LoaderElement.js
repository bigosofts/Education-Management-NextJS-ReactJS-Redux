"use client";
import { useEffect, useState } from "react";
import { fetchClasses } from "@/app/redux/features/classes/classesSlice";

import { fetchBooks } from "@/app/redux/features/books/booksSlice";
import { useDispatch } from "react-redux";
import { fetchStudents } from "@/app/redux/features/students/studentsSlice";
import { fetchTeachers } from "@/app/redux/features/teachers/teachersSlice";
import { fetchCourses } from "@/app/redux/features/courses/coursesSlice";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";
import { isAdmin } from "@/apiservices/checklogin";
import { selectDataTwo } from "@/apiservices/studentapiservices";
import { selectAllDataTwo } from "@/apiservices/teacherapiservices";

import { selectDataTwo as selectInstitution } from "@/apiservices/abacusinstitutionapiservices";
import { fetchDjs } from "@/app/redux/features/djs/djsSlice";
import { fetchNotices } from "@/app/redux/features/notices/noticesSlice";

function LoaderElement() {
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();

      if (payload.status === "Alhamdulillah") {
        let res;
        if (payload.data.userRole === "student") {
          res = await selectDataTwo({ userName: payload.data.userName }, null);
        } else if (payload.data.userRole === "teacher") {
          res = await selectAllDataTwo(
            { userName: payload.data.userName },
            null
          );
        } else if (payload.data.userRole === "abacus_teacher") {
          res = await selectInstitution(
            { institutionID: payload.data.userName },
            null
          );
        }

        if (res && res.status === "Alhamdulillah") {
          const desiredObj = {
            status: "Alhamdulillah",
            data: {
              userName: res.data[0].userName || res.data[0].institutionID,
              userRole: payload.data.userRole,
              isAdmin: res.data[0].isAdmin || false,
              userDetails: res.data[0],
            },
          };

          dispatch(setInitialData(desiredObj));
          setUserData(desiredObj);
        } else if (
          payload.data.userRole === "abacus_teacher" &&
          res &&
          res.data.length < 1
        ) {
          const desiredObj = {
            status: "noToken",
          };
          dispatch(setInitialData(desiredObj));
          setUserData(desiredObj);
        }
      } else if (payload.status === "noToken") {
        const desiredObj = {
          status: "noToken",
          data: null,
        };
        dispatch(setInitialData(desiredObj));
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    dispatch(fetchBooks()).unwrap();

    dispatch(fetchCourses()).unwrap();

    

    dispatch(fetchTeachers()).unwrap();

    dispatch(fetchStudents());

    if (userData && userData.data) {
      if (userData.data.userRole === "student") {
        dispatch(
          fetchDjs(userData.data.userDetails.paymentStatus.paymentID)
        ).unwrap();

        dispatch(
          fetchClasses({
            batch: userData.data.userDetails.batchCount,
            userName: "",
          })
        ).unwrap();
        dispatch(
          fetchStudents(userData.data.userDetails.batchCount)
        ).unwrap();
      } else if (userData.data.userRole === "teacher") {
        // await dispatch(fetchDjs("all")).unwrap();
        dispatch(
          fetchClasses({
            batch: "",
            userName: userData.data.userDetails.userName,
          })
        ).unwrap();

        dispatch(fetchStudents("all")).unwrap();
      } else {
        dispatch(fetchDjs("all")).unwrap();
        dispatch(
          fetchClasses({
            batch: "all",
            userName: "",
          })
        ).unwrap();
        dispatch(fetchStudents("all")).unwrap();
      }

      dispatch(fetchNotices(userData.data.userName)).unwrap();
    }
  }, [userData]);
}

export default LoaderElement;


