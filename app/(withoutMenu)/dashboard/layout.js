"use client";
import "./dashsidebar.css";
import "@/customComponents/dashboardNav/css/dashheader.css";
import "@/customComponents/dashboardNav/vendor/mdi-font/css/material-design-iconic-font.min.css";

import { useState, useEffect } from "react";
import { isAdmin } from "@/apiservices/checklogin";
import { useSelector, useDispatch } from "react-redux";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";

import { selectDataTwo } from "@/apiservices/studentapiservices";
import { selectAllDataTwo } from "@/apiservices/teacherapiservices";
import { fetchClasses } from "@/app/redux/features/classes/classesSlice";
import { fetchStudents } from "@/app/redux/features/students/studentsSlice";
import { fetchTeachers } from "@/app/redux/features/teachers/teachersSlice";
import Loader from "@/customComponents/loader/Loader";
import { fetchBooks } from "@/app/redux/features/books/booksSlice";

function DashboardLayout({ loggedin, notloggedin }) {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();

      if (payload.status == "Alhamdulillah") {
        if (payload.data.userRole == "student") {
          const res = await selectDataTwo(
            { userName: payload.data.userName },
            null
          );
          if (res.status == "Alhamdulillah") {
            const desiredObj = {
              status: "Alhamdulillah",
              data: {
                userName: res.data[0].userName,
                userRole: res.data[0].userRole,
                isAdmin: res.data[0].isAdmin,
                userDetails: res.data[0],
              },
            };

            dispatch(setInitialData(desiredObj));
          }
        } else if (payload.data.userRole == "teacher") {
          const res = await selectAllDataTwo(
            { userName: payload.data.userName },
            null
          );
          if (res.status == "Alhamdulillah") {
            const desiredObj = {
              status: "Alhamdulillah",
              data: {
                userName: res.data[0].userName,
                userRole: res.data[0].userRole,
                isAdmin: res.data[0].isAdmin,
                userDetails: res.data[0],
              },
            };

            dispatch(setInitialData(desiredObj));
          }
        }
      }
      setData(payload);
      dispatch(fetchClasses());
      dispatch(fetchStudents());
      dispatch(fetchTeachers());
      dispatch(fetchBooks());
    }
    fetchData();
  }, []);

  if (data) {
    if (data.status == "noToken") {
      return notloggedin;
    } else {
      return loggedin;
    }
  } else {
    return <Loader />;
  }
}

export default DashboardLayout;
