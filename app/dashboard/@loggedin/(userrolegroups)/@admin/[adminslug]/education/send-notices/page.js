"use client";
import { selectDataTwo } from "@/apiservices/studentapiservices";
import { selectDataTwo as selectCourses } from "@/apiservices/courseapiservices";
import { useState, useEffect } from "react";
import { selectDataTwo as selectPushNotices } from "@/apiservices/pushNoticeapiservices";

function SendNotices() {
  const [students, setStudents] = useState();
  const [courses, setCourses] = useState();
  const [notices, setNotices] = useState();
  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo(null, null);
      const res2 = await selectCourses(null, null);
      const res3 = await selectPushNotices(null, null);

      if (
        res.status == "Alhamdulillah" &&
        res2.status == "Alhamdulillah" &&
        res3.status == "Alhamdulillah"
      ) {
        setStudents(res.data);
        setCourses(res2.data);
        setNotices(res3.data);
      }
    }
    getData();
  }, []);

  function sendNotice() {
    alert("Send");
  }
  function uniqueArray(old) {
    const modifiedArray = old.map((item) =>
      item.studentCourseCode
        ? item.studentCourseCode[item.studentCourseCode.length - 1].code
          ? item.studentCourseCode[item.studentCourseCode.length - 1].code
          : ""
        : ""
    );
    const uniqueNamesSet = new Set(modifiedArray);
    const uniqueNamesArray = Array.from(uniqueNamesSet);
    return uniqueNamesArray;
  }

  function getUser(username) {
    if (students) {
      let data = students.find((item) => {
        return item.userName == username;
      });
      return data;
    }
  }

  return (
    <div className="text-2xl font-bold">
      send Notices
      <div className="mt-12 flex flex-col md:flex-row justify-between gap-10">
        <div className="w-1/2">
          <form
            onSubmit={sendNotice}
            className="border-[1px] border-slate-900 p-5 rounded-3xl"
          >
            <label htmlFor="selectStudents" className="text-lg w-full">
              Select Students:
            </label>

            <select
              name="selectStudents"
              id="selectStudents"
              className="w-full p-4 rounded-3xl text-lg"
            >
              <option value="all">All Students</option>
              {courses &&
                courses.map((item, i) => (
                  <option key={"courses-" + i} value={item.courseCode}>
                    All Students of "{item.courseCode}"
                  </option>
                ))}
              {students &&
                students.map((item, i) => (
                  <option key={"students-" + i} value={item.userName}>
                    {item.userName} - {item.firstName.en} {item.lastName.en} (
                    {item.mobileNumber})
                  </option>
                ))}
            </select>
            <label htmlFor="subjecten" className="text-lg w-full">
              Subject in English:
            </label>
            <input
              name="subjecten"
              id="subjecten"
              className="mt-2 w-full rounded-3xl p-4"
            ></input>
            <label htmlFor="subjectbn" className="text-lg w-full">
              Subject in Bengali:
            </label>
            <input
              name="subjectbn"
              id="subjectbn"
              className="mt-2 w-full rounded-3xl p-4"
            ></input>
            <label htmlFor="texten" className="text-lg w-full">
              Message in English:
            </label>
            <input
              name="texten"
              id="texten"
              className="mt-2 w-full rounded-3xl p-4"
            ></input>
            <label htmlFor="textbn" className="text-lg w-full">
              Message in Bengali:
            </label>
            <input
              name="textbn"
              id="textbn"
              className="mt-2 w-full rounded-3xl p-4"
            ></input>
            <label htmlFor="link" className="text-lg w-full">
              Attachment/Link:
            </label>
            <input
              name="link"
              id="link"
              className="mt-2 w-full rounded-3xl p-4"
            ></input>
            <label htmlFor="status" className="text-lg w-full">
              Status:
            </label>
            <select
              name="status"
              id="status"
              className="w-full p-4 rounded-3xl text-lg"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button
              className="w-full p-4 rounded-3xl text-2xl bg-lime-500 hover:bg-lime-900 transition delay-150 ease-out mt-4 text-white"
              type="submit"
            >
              Send Notices
            </button>
          </form>
        </div>
        <div className="w-1/2 h-[1000px] overflow-y-scroll">
          {notices &&
            notices.map((item, i) => (
              <div
                key={i}
                className="w-full bg-lime-100 border-[1px] border-slate-300 rounded-3xl mb-5 overflow-hidden"
              >
                <div className="flex justify-between text-lg bg-slate-500 text-white p-5">
                  <div className="w-1/2 text-left">
                    Reciever: {item.reciever} <br />(
                    {getUser(item.reciever).emailAddress})
                  </div>
                  <div className="w-1/2 text-right">Sender: {item.sender}</div>
                </div>
                <div className="flex justify-between text-lg px-5">
                  <div className="w-1/2">Subject: {item.subject.en} </div>
                  <div className="w-1/2">বিষয়: {item.subject.bn} </div>
                </div>
                <div className="flex justify-between text-lg px-5">
                  <div className="w-1/2">Text: {item.text.en}</div>
                  <div className="w-1/2">টেক্সট: {item.text.bn}</div>
                </div>
                <div className="flex justify-between text-lg px-5">
                  <div className="w-1/2">
                    Active Status: {item.activeStatus}
                  </div>
                  <div className="w-1/2">
                    Read Status: {item.readStatus == false ? "Unseen" : "Seen"}
                  </div>
                </div>
                <div className="flex justify-between text-lg px-5 pb-5">
                  <div className="w-1/2">Created at: {item.createdDate}</div>
                  <div></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SendNotices;
