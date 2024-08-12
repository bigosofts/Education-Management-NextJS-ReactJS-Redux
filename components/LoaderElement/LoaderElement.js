// "use client";
// import { useEffect, useState } from "react";
// import { fetchClasses } from "@/app/redux/features/classes/classesSlice";

// import { fetchBooks } from "@/app/redux/features/books/booksSlice";
// import { useDispatch } from "react-redux";
// import { fetchStudents } from "@/app/redux/features/students/studentsSlice";
// import { fetchTeachers } from "@/app/redux/features/teachers/teachersSlice";
// import { fetchCourses } from "@/app/redux/features/courses/coursesSlice";
// import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";
// import { isAdmin } from "@/apiservices/checklogin";
// import { selectDataTwo } from "@/apiservices/studentapiservices";
// import { selectAllDataTwo } from "@/apiservices/teacherapiservices";

// import { selectDataTwo as selectInstitution } from "@/apiservices/abacusinstitutionapiservices";
// import { fetchDjs } from "@/app/redux/features/djs/djsSlice";
// import { fetchNotices } from "@/app/redux/features/notices/noticesSlice";

// function LoaderElement() {
//   const [userData, setUserData] = useState();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     async function fetchData() {
//       const payload = await isAdmin();

//       if (payload.status == "Alhamdulillah") {
//         if (payload.data.userRole == "student") {
//           const res = await selectDataTwo(
//             { userName: payload.data.userName },
//             null
//           );
//           if (res.status == "Alhamdulillah") {
//             const desiredObj = {
//               status: "Alhamdulillah",
//               data: {
//                 userName: res.data[0].userName,
//                 userRole: res.data[0].userRole,
//                 isAdmin: res.data[0].isAdmin,
//                 userDetails: res.data[0],
//               },
//             };

//             dispatch(setInitialData(desiredObj));
//             setUserData(desiredObj);
//           }
//         } else if (payload.data.userRole == "teacher") {
//           const res = await selectAllDataTwo(
//             { userName: payload.data.userName },
//             null
//           );
//           if (res.status == "Alhamdulillah") {
//             const desiredObj = {
//               status: "Alhamdulillah",
//               data: {
//                 userName: res.data[0].userName,
//                 userRole: res.data[0].userRole,
//                 isAdmin: res.data[0].isAdmin,
//                 userDetails: res.data[0],
//               },
//             };

//             dispatch(setInitialData(desiredObj));
//             setUserData(desiredObj);
//           }
//         } else if (payload.data.userRole == "abacus_teacher") {
//           const res = await selectInstitution(
//             { institutionID: payload.data.userName },
//             null
//           );
//           if (res.status == "Alhamdulillah") {
//             let desiredObj;
//             if (res.data.length < 1) {
//               desiredObj = {
//                 status: "noToken",
//               };
//             } else {
//               desiredObj = {
//                 status: "Alhamdulillah",
//                 data: {
//                   userName: res.data[0].institutionID,
//                   userRole: "abacus_teacher",
//                   isAdmin: false,
//                   userDetails: res.data[0],
//                 },
//               };
//             }

//             dispatch(setInitialData(desiredObj));
//             setUserData(desiredObj);
//           }
//         }
//       } else if (payload.status == "noToken") {
//         const desiredObj = {
//           status: "noToken",
//           data: null,
//         };

//         dispatch(setInitialData(desiredObj));
//       }
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     dispatch(fetchBooks());

//     dispatch(fetchCourses());

//     dispatch(fetchClasses());

//     dispatch(fetchTeachers());

//     dispatch(fetchStudents());

//     if (userData && userData.data && userData.data.userRole == "student") {
//       dispatch(fetchDjs(userData.data.userDetails.paymentStatus.paymentID));
//     } else {
//       dispatch(fetchDjs("all"));
//     }

//     if (userData && userData.data) {
//       dispatch(fetchNotices(userData.data.userName));
//     }
//   }, [userData]);
// }

// export default LoaderElement;

"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchClasses } from "@/app/redux/features/classes/classesSlice";
import { fetchBooks } from "@/app/redux/features/books/booksSlice";
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
  const [userData, setUserData] = useState(null);
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
    async function fetchSequentially() {
      await dispatch(fetchBooks()).unwrap(); // Unwrap to handle any potential errors
      await dispatch(fetchCourses()).unwrap();

      await dispatch(fetchTeachers()).unwrap();

      if (userData && userData.data) {
        if (userData.data.userRole === "student") {
          await dispatch(
            fetchDjs(userData.data.userDetails.paymentStatus.paymentID)
          ).unwrap();
        } else {
          await dispatch(fetchDjs("all")).unwrap();
        }

        await dispatch(fetchNotices(userData.data.userName)).unwrap();
        await dispatch(
          fetchClasses(userData.data.userDetails.batchCount)
        ).unwrap();
        await dispatch(
          fetchStudents(userData.data.userDetails.batchCount)
        ).unwrap();
      }
    }

    if (userData) {
      fetchSequentially();
    }
  }, [userData]);
}

export default LoaderElement;
