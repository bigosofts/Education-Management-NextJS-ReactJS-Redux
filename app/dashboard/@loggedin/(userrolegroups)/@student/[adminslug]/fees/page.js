"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FeeSection from "@/components/dashboardPage/feeSec";

import PreFeeSection from "@/components/dashboardPage/preFeeSec";
import ProfileUpdateLogicSecond from "@/components/dashboardPage/profileUpdateLogicSecond";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";
import { selectDataTwo } from "@/apiservices/paymentapiservices";

function FeesPage() {
  const data = useSelector((state) => state.isAdmin.value);
  const [payment, setPayment] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo(
        { paymentID: data.data.userDetails.paymentStatus.paymentID },
        null
      );
      if (res.status == "Alhamdulillah") {
        setPayment(res.data[0]);
      }
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

  function getDayDifference() {
    if (payment) {
      let date = data.data.userDetails.admissionSession;
      let currentDate = new Date();
      let paymentDate = new Date(date);

      let timeDifference = currentDate.getTime() - paymentDate.getTime();
      let oneYearInMillis = 1000 * 60 * 60 * 24 * 365; // milliseconds in one year
      let yearsDifference = timeDifference / oneYearInMillis;
      return yearsDifference;
    }
  }

  console.log(getDayDifference());

  if (getDayDifference() > 1) {
    if (
      data.data.userDetails.paymentStatus.addmissionDueStatus == true &&
      data.data.userDetails.paymentStatus.consequentDueStatus == false
    ) {
      return <PreFeeSection profile={data} />;
    } else if (
      data.data.userDetails.paymentStatus.addmissionDueStatus == true &&
      data.data.userDetails.paymentStatus.consequentDueStatus == true
    ) {
      return <WaitingApproval />;
    } else if (
      data.data.userDetails.paymentStatus.addmissionDueStatus == false &&
      data.data.userDetails.paymentStatus.consequentDueStatus == false
    ) {
      return <FeeSection profile={data} />;
    }
  } else {
    if (blankArrayList.length > 0) {
      return <ProfileUpdateLogicSecond />;
    } else if (
      data.data.userDetails.studentCourseCode.length < 1 &&
      data.data.userDetails.paymentStatus.addmissionDueStatus == true
    ) {
      return <PreFeeSection profile={data} />;
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].status == "inactive" &&
      data.data.userDetails.paymentStatus.addmissionDueStatus == true
    ) {
      return <WaitingApproval />;
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].status == "active" &&
      data.data.userDetails.paymentStatus.addmissionDueStatus == false
    ) {
      return <FeeSection profile={data} />;
    }
  }
}

export default FeesPage;
