"use client";
import { useState, useEffect } from "react";
import DashWrapper from "@/components/dashboardPage/DashWrapper";
import DashSlider from "@/components/dashboardPage/DashSlider";
import DashExplore from "@/components/dashboardPage/DashExplore";

import { updateData } from "@/apiservices/studentapiservices";
import { useSelector } from "react-redux";
import mytoast from "@/components/toast/toast";

function page(props) {
  const data = useSelector((state) => state.isAdmin.value);

  useEffect(() => {
    async function getData() {
      function getDayDifference() {
        let date = data.data.userDetails.admissionSession;
        let currentDate = new Date();
        let paymentDate = new Date(date);

        let timeDifference = currentDate.getTime() - paymentDate.getTime();
        let oneYearInMillis = 1000 * 60 * 60 * 24 * 365; // milliseconds in one year
        let yearsDifference = timeDifference / oneYearInMillis;
        return yearsDifference;
      }
      if (getDayDifference() > 1) {
        async function upDateData() {
          let modifiedCourseCode = JSON.parse(
            JSON.stringify(data.data.userDetails.studentCourseCode)
          );

          if (modifiedCourseCode.length > 0) {
            modifiedCourseCode[modifiedCourseCode.length - 1].status =
              "inactive";
          }

          const res = await updateData(
            data.data.userDetails.userName,
            data.data.userDetails.firstName.en,
            data.data.userDetails.firstName.bn,
            data.data.userDetails.lastName.en,
            data.data.userDetails.lastName.bn,
            data.data.userDetails.nidNumber,
            data.data.userDetails.birthRegNumber,
            data.data.userDetails.fatherName.en,
            data.data.userDetails.fatherName.bn,
            data.data.userDetails.emailAddress,
            undefined,
            data.data.userDetails.mobileNumber,
            data.data.userDetails.occupation,
            modifiedCourseCode,
            data.data.userDetails.studentJamatCode,
            data.data.userDetails.gender,
            data.data.userDetails.dateOfBirth,
            data.data.userDetails.countryName,
            data.data.userDetails.fullPresentAddress,
            data.data.userDetails.fullPermanentAddress,
            data.data.userDetails.admissionSession,
            data.data.userDetails.admissionDate,
            data.data.userDetails.studentMotive,
            data.data.userDetails.details,
            {
              addmissionDueStatus: true,
              consequentDueStatus:
                data.data.userDetails.paymentStatus.consequentDueStatus,
              paymentID: data.data.userDetails.paymentStatus.paymentID,
            },
            data.data.userDetails.userRole,
            data.data.userDetails.extracurricular,
            data.data.userDetails.activeStatus,
            data.data.userDetails._id,
            data.data.userDetails.studentDepartment,
            data.data.userDetails.studentSemester
          );

          if (res.status == "Alhamdulillah") {
            mytoast.danger("Your Next Year Admission Fee is Overdue");
          } else {
            console.log(res);
          }
        }
        upDateData();
      }
    }
    getData();
  }, []);

  return (
    <DashWrapper>
      <DashSlider />
      <DashExplore />
    </DashWrapper>
  );
}

export default page;
