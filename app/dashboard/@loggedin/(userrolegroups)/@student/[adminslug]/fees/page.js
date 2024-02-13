"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import FeeSection from "@/components/dashboardPage/feeSec";

import PreFeeSection from "@/components/dashboardPage/preFeeSec";
import ProfileUpdateLogicSecond from "@/components/dashboardPage/profileUpdateLogicSecond";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";

function FeesPage() {
  const data = useSelector((state) => state.isAdmin.value);

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

  if (blankArrayList.length > 0) {
    return <ProfileUpdateLogicSecond />;
  } else if (
    data.data.userDetails.studentCourseCode.length < 1 &&
    data.data.userDetails.paymentStatus.addmissionDueStatus == true
  ) {
    return <PreFeeSection profile={data} />;
  } else if (
    data.data.userDetails.studentCourseCode.length >= 1 &&
    data.data.userDetails.paymentStatus.addmissionDueStatus == true
  ) {
    return <WaitingApproval />;
  } else if (
    data.data.userDetails.studentCourseCode.length >= 1 &&
    data.data.userDetails.paymentStatus.addmissionDueStatus == false
  ) {
    return <FeeSection profile={data} />;
  }
}

export default FeesPage;
