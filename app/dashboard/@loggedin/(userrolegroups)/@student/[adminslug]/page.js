"use client";
import { useState, useEffect } from "react";
import DashWrapper from "@/components/dashboardPage/DashWrapper";
import DashSlider from "@/components/dashboardPage/DashSlider";
import DashExplore from "@/components/dashboardPage/DashExplore";

import { selectDataTwo } from "@/apiservices/paymentapiservices";
import { updateData } from "@/apiservices/studentapiservices";
import { useSelector } from "react-redux";
import mytoast from "@/components/toast/toast";

function page(props) {
  const [payment, setPayment] = useState();
  const data = useSelector((state) => state.isAdmin.value);

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

  if (getDayDifference() > 1) {
    async function upDateData() {
      const res = await updateData(
        undefined,
        data.data.userDetails.firstName.en,
        data.data.userDetails.firstName.bn,
        data.data.userDetails.lastName.en,
        data.data.userDetails.lastName.bn,
        undefined,
        undefined,
        data.data.userDetails.fatherName.en,
        data.data.userDetails.fatherName.bn,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        {
          addmissionDueStatus: true,
          consequentDueStatus: false,
          paymentID: data.data.userDetails.paymentStatus.paymentID,
        },
        undefined,
        undefined,
        undefined,
        data.data.userDetails._id,
        undefined,
        undefined
      );

      if (res.status == "Alhamdulillah") {
        mytoast.success("Core updated");
      } else {
        console.log(res);
      }
    }
    upDateData();
  }
  return (
    <DashWrapper>
      <DashSlider />
      <DashExplore />
    </DashWrapper>
  );
}

export default page;
