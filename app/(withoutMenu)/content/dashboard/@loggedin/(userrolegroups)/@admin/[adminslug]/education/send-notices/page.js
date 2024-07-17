"use client";

import { useState, useEffect, useRef } from "react";
import { createData } from "@/apiservices/pushNoticeapiservices";

import mytoast from "@/components/toast/toast";
import { useSelector } from "react-redux";
import { sendMail } from "@/apiservices/sendMailapiservices";

function SendNotices() {
  const [students, setStudents] = useState();
  const [courses, setCourses] = useState();

  const studentref = useRef();
  const subjectenref = useRef();
  const subjectbnref = useRef();
  const textenref = useRef();
  const textbnref = useRef();
  const linkref = useRef();
  const statusref = useRef();
  const data = useSelector((state) => state.isAdmin.value);
  const studentData = useSelector((state) => state.students.students);
  const courseData = useSelector((state) => state.courses.courses);

  useEffect(() => {
    async function getData() {
      let res = { data: null };
      let res2 = { data: null };

      res.data = studentData && JSON.parse(JSON.stringify(studentData));
      res2.data = courseData && JSON.parse(JSON.stringify(courseData));

      if (res.data.length > 0 && res2.data.length > 0) {
        setStudents(res.data);
        setCourses(res2.data);
      }
    }

    getData();
  }, [studentData, courseData]);

  // function getUser(username) {
  //   if (students) {
  //     let data = students.find((item) => {
  //       return item.userName == username;
  //     });
  //     return data;
  //   }
  // }

  function sendNotice(e) {
    e.preventDefault();
    if (studentref.current.value == "all") {
      let allArray = [];
      students.forEach((element) => {
        createData({
          subject: {
            en: subjectenref.current.value ? subjectenref.current.value : "",
            bn: subjectbnref.current.value ? subjectbnref.current.value : "",
          },
          text: {
            en: textenref.current.value ? textenref.current.value : "",
            bn: textbnref.current.value ? textbnref.current.value : "",
          },
          reciever: element.userName,
          sender: data.data.userDetails.userName,
          link: linkref.current.value ? linkref.current.value : "",
          readStatus: false,
          activeStatus: "active",
        });
        allArray.push(element.emailAddress);

        mytoast.success("Notification send to All Students");
      });
      sendMail(
        allArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "alemalema") {
      let alemalemaArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            alemalemaArray.push(element.emailAddress);

            mytoast.success(
              `Notification send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        alemalemaArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "farzeayinampara") {
      let farzeayinamparaArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            farzeayinamparaArray.push(element.emailAddress);

            mytoast.success(
              `Notification and Email send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        farzeayinamparaArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "ezranahusorof") {
      let ezranahusorofArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            ezranahusorofArray.push(element.emailAddress);

            mytoast.success(
              `Notification and Email send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        ezranahusorofArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "shishumaktab") {
      let shishumaktabArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            shishumaktabArray.push(element.emailAddress);

            mytoast.success(
              `Notification and Email send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        shishumaktabArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "abacus_teacher") {
      let abacus_teacherArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            abacus_teacherArray.push(element.emailAddress);

            mytoast.success(
              `Notification and Email send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        abacus_teacherArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "hifjulquran") {
      let hifjulquranArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            hifjulquranArray.push(element.emailAddress);

            mytoast.success(
              `Notification and Email send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        hifjulquranArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "farzeayinnajera") {
      let farzeayinnajeraArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            farzeayinnajeraArray.push(element.emailAddress);

            mytoast.success(
              `Notification and Email send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        farzeayinnajeraArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "farzeayinmaktab") {
      let farzeayinmaktabArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            farzeayinmaktabArray.push(element.emailAddress);

            mytoast.success(
              `Notification and Email send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        farzeayinmaktabArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "abacus_student") {
      let abacus_studentArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            abacus_studentArray.push(element.emailAddress);

            mytoast.success(
              `Notification and Email send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        abacus_studentArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "urdu") {
      let urduArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            urduArray.push(element.emailAddress);

            mytoast.success(
              `Notification and Email send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        urduArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "ramadanquranulkarim") {
      let ramadanquranulkarimArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            ramadanquranulkarimArray.push(element.emailAddress);

            mytoast.success(
              `Notification and Email send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        ramadanquranulkarimArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else if (studentref.current.value == "shishunajera") {
      let shishunajeraArray = [];
      students.forEach((element) => {
        if (
          element.studentCourseCode &&
          element.studentCourseCode.length !== 0
        ) {
          if (
            element.studentCourseCode[element.studentCourseCode.length - 1]
              .code == studentref.current.value
          ) {
            createData({
              subject: {
                en: subjectenref.current.value
                  ? subjectenref.current.value
                  : "",
                bn: subjectbnref.current.value
                  ? subjectbnref.current.value
                  : "",
              },
              text: {
                en: textenref.current.value ? textenref.current.value : "",
                bn: textbnref.current.value ? textbnref.current.value : "",
              },
              reciever: element.userName,
              sender: data.data.userDetails.userName,
              link: linkref.current.value ? linkref.current.value : "",
              readStatus: false,
              activeStatus: "active",
            });
            shishunajeraArray.push(element.emailAddress);

            mytoast.success(
              `Notification and Email send to All Students of ${studentref.current.value}`
            );
          }
        }
      });
      sendMail(
        shishunajeraArray,
        subjectenref.current.value
          ? subjectenref.current.value
          : subjectbnref.current.value,
        textbnref.current.value
          ? textbnref.current.value
          : textenref.current.value,
        `<h1>${
          textbnref.current.value
            ? textbnref.current.value
            : textenref.current.value
        }</h1>`
      );
    } else {
      students.forEach((element) => {
        if (element.userName == studentref.current.value) {
          createData({
            subject: {
              en: subjectenref.current.value ? subjectenref.current.value : "",
              bn: subjectbnref.current.value ? subjectbnref.current.value : "",
            },
            text: {
              en: textenref.current.value ? textenref.current.value : "",
              bn: textbnref.current.value ? textbnref.current.value : "",
            },
            reciever: element.userName,
            sender: data.data.userDetails.userName,
            link: linkref.current.value ? linkref.current.value : "",
            readStatus: false,
            activeStatus: "active",
          });
          sendMail(
            element.emailAddress,
            subjectenref.current.value
              ? subjectenref.current.value
              : subjectbnref.current.value,
            textbnref.current.value
              ? textbnref.current.value
              : textenref.current.value,
            `<h1>${
              textbnref.current.value
                ? textbnref.current.value
                : textenref.current.value
            }</h1>`
          );
          mytoast.success(`Notification and Email send to ${element.userName}`);
        }
      });
    }
  }
  // function uniqueArray(old) {
  //   const modifiedArray = old.map((item) =>
  //     item.studentCourseCode
  //       ? item.studentCourseCode[item.studentCourseCode.length - 1].code
  //         ? item.studentCourseCode[item.studentCourseCode.length - 1].code
  //         : ""
  //       : ""
  //   );
  //   const uniqueNamesSet = new Set(modifiedArray);
  //   const uniqueNamesArray = Array.from(uniqueNamesSet);
  //   return uniqueNamesArray;
  // }

  return (
    <div className="text-2xl font-bold">
      send Notices
      <div className="mt-12 flex flex-col md:flex-row justify-between gap-10">
        <div className="w-2/3 mx-auto">
          <form
            onSubmit={sendNotice}
            className="border-[1px] border-slate-900 p-5 rounded-3xl"
          >
            <label htmlFor="selectStudents" className="text-lg w-full">
              Select Students:
            </label>

            <select
              ref={studentref}
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
              ref={subjectenref}
              name="subjecten"
              id="subjecten"
              className="mt-2 w-full rounded-3xl p-4"
            ></input>
            <label htmlFor="subjectbn" className="text-lg w-full">
              Subject in Bengali:
            </label>
            <input
              ref={subjectbnref}
              name="subjectbn"
              id="subjectbn"
              className="mt-2 w-full rounded-3xl p-4"
            ></input>
            <label htmlFor="texten" className="text-lg w-full">
              Message in English:
            </label>
            <input
              ref={textenref}
              name="texten"
              id="texten"
              className="mt-2 w-full rounded-3xl p-4"
            ></input>
            <label htmlFor="textbn" className="text-lg w-full">
              Message in Bengali:
            </label>
            <input
              ref={textbnref}
              name="textbn"
              id="textbn"
              className="mt-2 w-full rounded-3xl p-4"
            ></input>
            <label htmlFor="link" className="text-lg w-full">
              Attachment/Link:
            </label>
            <input
              ref={linkref}
              name="link"
              id="link"
              className="mt-2 w-full rounded-3xl p-4"
            ></input>
            <label htmlFor="status" className="text-lg w-full">
              Status:
            </label>
            <select
              ref={statusref}
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
      </div>
    </div>
  );
}

export default SendNotices;
