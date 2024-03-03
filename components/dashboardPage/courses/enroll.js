"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import mytoast from "@/components/toast/toast";
import { isAdmin } from "@/apiservices/checklogin";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";
import { selectDataTwo } from "@/apiservices/studentapiservices";
import { selectAllDataTwo as selectTeachers } from "@/apiservices/teacherapiservices";

function EnrollButton({ courseCode, setProfileUpdate }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const data = useSelector((state) => state.isAdmin.value);

  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();
      if (payload.status == "Alhamdulillah") {
        if (payload.data.userRole == "teacher") {
          const res = await selectTeachers(
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
        } else if (payload.data.userRole == "student") {
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
        }
      }
    }
    fetchData();
  }, []);

  const [finalData, setFinalData] = useState({
    firstNameen: data.data.userDetails.firstName.en,
    lastNameen: data.data.userDetails.lastName.en,

    fatherNameen: data.data.userDetails.fatherName.en,

    gender: data.data.userDetails.gender,
    dateOfBirth: data.data.userDetails.dateOfBirth,
    countryName: data.data.userDetails.countryName,

    fullPresentAddress: data.data.userDetails.fullPresentAddress,
    fullPermanentAddress: data.data.userDetails.fullPermanentAddress,
  });

  let obj = { ...finalData };

  let blankArrayList = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (!obj[key]) {
        blankArrayList.push(key);
      }
    }
  }

  function enrollFunction(e) {
    e.preventDefault();

    if (data.data) {
      if (blankArrayList.length == 0) {
        router.push(
          `/dashboard/${data.data.userName}/fees?enroll=${courseCode}`
        );
      } else {
        mytoast.danger(
          "You need to update your profile from settings. Go to Dashboard/Settings"
        );
        if (setProfileUpdate) {
          setProfileUpdate(true);
        }
      }
    } else {
      mytoast.info("You need to Signin to enroll a Class. Go to Signin");
    }
  }

  return (
    <>
      <Link href="#" onClick={enrollFunction} className="style-16">
        রেজিস্ট্রেশন
      </Link>{" "}
    </>
  );
}

export default EnrollButton;
