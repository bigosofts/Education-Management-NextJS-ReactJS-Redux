"use client";
import "./hifz.css";
import { selectDataTwo, updateData } from "@/apiservices/studentapiservices";
import { useState, useEffect } from "react";
import { selectAllData } from "@/apiservices/teacherapiservices";

export default function HifzTableTeacher({ id }) {
  const [students, setStudents] = useState();
  const [teachers, setTeacher] = useState();
  const [detailsC, setDetailsC] = useState();

  function getTeacherName(tid) {
    if (teachers) {
      let desiredData = teachers.find((item) => item.userName == tid);

      return desiredData.firstName.en + " " + desiredData.lastName.en;
    }
  }

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo({ userName: id }, null);

      if (res.status == "Alhamdulillah") {
        setStudents(res.data[0]);
        setDetailsC(res.data[0].details);
      }

      const res2 = await selectAllData(null, null);

      if ((res2.status = "Alhamdulillah")) {
        setTeacher(res2.data);
      }
    }
    getData();
  }, []);

  let myJson = [];

  if (detailsC && detailsC.hifzInfo) {
    function niceDate2(startDate) {
      const startDateObj = new Date(startDate);

      // Check if the start date is valid
      if (isNaN(startDateObj.getTime())) {
        // Invalid start date string
        return null;
      }

      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 30); // Set end date to 30 days after the start date

      const dates = [];

      // Loop through each day from start date to end date
      while (startDateObj <= endDate) {
        const options = {
          month: "long",
          day: "numeric",
          year: "numeric",
        };

        const formattedDate = startDateObj.toLocaleDateString("en-US", options);
        dates.push(formattedDate);

        // Move to the next day
        startDateObj.setDate(startDateObj.getDate() + 1);
      }

      return dates;
    }

    // Example usage:
    const startingDate = detailsC && detailsC.hifzInfo[0].date; // Your choice of starting date
    const datesArray = niceDate2(startingDate);

    datesArray.forEach((item) => {
      const hifzInfoMatch = detailsC.hifzInfo.find(
        (item2) => item2.date === item
      );
      if (hifzInfoMatch) {
        myJson.push({
          date: item,
          day: hifzInfoMatch.day,
          week: hifzInfoMatch.weeknumber ? hifzInfoMatch.weeknumber.text : "--",
          sabak: {
            para: hifzInfoMatch.sabak ? hifzInfoMatch.sabak.para : "--",
            page: hifzInfoMatch.sabak ? hifzInfoMatch.sabak.page : "--",
          },

          satsabak: {
            para: hifzInfoMatch.satsabak ? hifzInfoMatch.satsabak.para : "--",
            page: hifzInfoMatch.satsabak ? hifzInfoMatch.satsabak.page : "--",
            amount: hifzInfoMatch.satsabak
              ? hifzInfoMatch.satsabak.amount
              : "--",
            lokma: hifzInfoMatch.satsabak ? hifzInfoMatch.satsabak.lokma : "--",
            dohorana: hifzInfoMatch.satsabak
              ? hifzInfoMatch.satsabak.dohorana
              : "--",
          },
          amukhta: {
            para: hifzInfoMatch.amukhta ? hifzInfoMatch.amukhta.para : "--",
            page: hifzInfoMatch.amukhta ? hifzInfoMatch.amukhta.page : "--",
            amount: hifzInfoMatch.amukhta ? hifzInfoMatch.amukhta.amount : "--",
            lokma: hifzInfoMatch.amukhta ? hifzInfoMatch.amukhta.lokma : "--",
            dohorana: hifzInfoMatch.amukhta
              ? hifzInfoMatch.amukhta.dohorana
              : "--",
          },
          dailyTilwat: hifzInfoMatch.dailytilwat
            ? hifzInfoMatch.dailytilwat.text
            : "--",
          signature: hifzInfoMatch.signature
            ? hifzInfoMatch.signature
            : "দেখে নাই",
        });
      } else {
        myJson.push({
          date: item,
          day: "--",
          week: "--",
          sabak: { para: "--", page: "--" },
          satsabak: {
            para: "--",
            page: "--",
            amount: "--",
            lokma: "--",
            dohorana: "--",
          },
          amukhta: {
            para: "--",
            page: "--",
            amount: "--",
            lokma: "--",
            dohorana: "--",
          },
          dailyTilwat: "--",
          signature: "--",
        });
      }
    });
  }

  return (
    <div className="mt-10 p-5">
      <div className="hifz_table">
        <h5 className="text-center">
          শিক্ষার্থীর নাম:{" "}
          {students && students.firstName.en + " " + students.lastName.en}
        </h5>
        <h5 className="text-center">
          ক্লাস গ্রুপ:{" "}
          {detailsC && detailsC.hifzClass && detailsC.hifzClass.groupName}
        </h5>

        <h5 className="text-center">
          ওস্তাদ/ওস্তাজার নাম:{" "}
          {detailsC &&
            detailsC.hifzClass &&
            getTeacherName(detailsC.hifzClass.ostad)}
        </h5>
        <div class="table_container mt-10">
          <table>
            <thead className="sticky top-0">
              <tr>
                <th rowSpan={2}>তারিখ</th>
                <th rowSpan={2}>বার</th>
                <th rowSpan={2}>সপ্তাহ</th>
                <th colSpan={2}>সবক</th>
                <th colSpan={5}>সাতসবক</th>
                <th colSpan={5}>আমুখতা</th>
                <th rowSpan={2}>দৈনিক তিলওয়াত</th>
                <th rowSpan={2}>শিক্ষকের মন্তব্য</th>
              </tr>
              <tr>
                <th>পারা</th>
                <th>পৃষ্ঠা</th>
                <th>পারা</th>
                <th>পৃষ্ঠা</th>
                <th>পরিমাণ</th>
                <th>লোকমা</th>
                <th>দোহরানা</th>
                <th>পারা</th>
                <th>পৃষ্ঠা</th>
                <th>পরিমাণ</th>
                <th>লোকমা</th>
                <th>দোহরানা</th>
              </tr>
            </thead>
            <tbody>
              {myJson &&
                myJson.map((item, i) => (
                  <tr key={i}>
                    <td>{item.date}</td>
                    <td>{item.day}</td>
                    <td>{item.week}</td>
                    <td>{item.sabak.para}</td>
                    <td>{item.sabak.page}</td>
                    <td>{item.satsabak.para}</td>
                    <td>{item.satsabak.page}</td>
                    <td>{item.satsabak.amount}</td>
                    <td>{item.satsabak.lokma}</td>
                    <td>{item.satsabak.dohorana}</td>
                    <td>{item.amukhta.para}</td>
                    <td>{item.amukhta.page}</td>
                    <td>{item.amukhta.amount}</td>
                    <td>{item.amukhta.lokma}</td>
                    <td>{item.amukhta.dohorana}</td>
                    <td>{item.dailyTilwat}</td>
                    <td>{item.signature}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
