"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import mytoast from "@/components/toast/toast";
import { isAdmin } from "@/apiservices/checklogin";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";

function EnrollButton({ courseCode, setProfileUpdate }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const data = useSelector((state) => state.isAdmin.value);

  useEffect(() => {
    async function getData() {
      const response = await isAdmin();

      dispatch(setInitialData(response));
    }
    getData();
  }, []);

  const [finalData, setFinalData] = useState({
    firstNameen: data.data.userDetails.firstName.en,
    lastNameen: data.data.userDetails.lastName.en,
    firstnamebn: data.data.userDetails.firstName.bn,
    lastnamebn: data.data.userDetails.lastName.bn,
    nidNumber: data.data.userDetails.nidNumber,
    birthRegNumber: data.data.userDetails.birthRegNumber,
    fatherNameen: data.data.userDetails.fatherName.en,
    fatherNamebn: data.data.userDetails.fatherName.bn,

    occupation: data.data.userDetails.occupation,

    gender: data.data.userDetails.gender,
    dateOfBirth: data.data.userDetails.dateOfBirth,
    countryName: data.data.userDetails.countryName,

    fullPresentAddress: data.data.userDetails.fullPresentAddress,
    fullPermanentAddress: data.data.userDetails.fullPermanentAddress,

    studentMotive: data.data.userDetails.studentMotive,

    extracurricular: data.data.userDetails.birthRegNumber,
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
        Enroll Now
      </Link>{" "}
    </>
  );
}

export default EnrollButton;
