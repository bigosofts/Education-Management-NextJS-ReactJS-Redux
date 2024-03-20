"use client";
import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { selectAllData, deleteData } from "@/apiservices/studentapiservices";
import { useEffect, useState } from "react";
import myToast from "@/components/toast/toast";
import Image from "next/image";
import ReactHighlightSyntax from "react-highlight-syntax";

function StudentCard(props) {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const payload = await selectAllData(null, null);
      setData(payload);
    }
    fetchData();
  }, []);
  const updateHandler = props.updateHandler;

  const deleteHandler = (id) => {
    deleteData(id);
    myToast.danger(`item ${id} is deleted`);
    const updatedData = data.data.filter((item) => item._id !== id);
    const constructeddata = {
      status: "Alhamdulillah",
      data: updatedData,
    };
    setData(constructeddata);
  };
  if (props.fromupdateform) {
    return (
      <div className="container mx-auto mt-10">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-5 gap-y-20">
          {props.fromupdateform.data.map((item, i) => (
            <div
              key={i}
              className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
            >
              <a href="#">
                <Image
                  width={367}
                  height={256}
                  className="rounded-t-lg w-full h-64"
                  src="/images/nature.jpg"
                  alt=""
                />
              </a>
              <div className="flex justify-between absolute top-2 right-2 gap-5">
                {item.activeStatus == "active" ? (
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    Active
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Inactive
                  </span>
                )}
              </div>

              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.firstName.en + " " + item.lastName.en}
                  </h5>
                </a>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.firstName.bn + " " + item.lastName.bn}
                  </h5>
                </a>

                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  NID Number: {item.nidNumber}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  Birth Registration: {item.birthRegNumber}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  Username: {item.userName}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  Father's name: {item.fatherName.en}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  বাবার নাম: {item.fatherName.bn}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Email: {item.emailAddress}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Role: {item.userRole}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Mobile: {item.mobileNumber}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Occupation: {item.occupation}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Student Enrolled in: {item.studentCourseCode}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Course Name:
                </p>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.studentCourseCode)}
                </ReactHighlightSyntax>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  jamat Name:
                </p>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.studentJamatCode)}
                </ReactHighlightSyntax>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Gender: {item.gender}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Date 0f Birth:{" "}
                  {new Date(item.dateOfBirth).toLocaleDateString()}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Country: {item.countryName}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Admission Date:{" "}
                  {new Date(item.admissionDate).toLocaleDateString()}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Admission Session: {item.admissionSession}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Student Motive: {item.studentMotive}
                </p>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Payment Status:
                </p>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.paymentStatus)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Address
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 block max-h-24 overflow-y-scroll">
                  Present Address: {item.fullPresentAddress}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 block max-h-24 overflow-y-scroll">
                  Permanent Address: {item.fullPermanentAddress}
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() =>
                      updateHandler(item._id, props.fromupdateform)
                    }
                    className="w-2 px-5 py-5 allColorFont"
                  >
                    <BiEdit size={24} />{" "}
                  </button>
                  <button
                    onClick={() => props.deleteHandler(item._id)}
                    className="w-2 px-5 py-5 text-red-400"
                  >
                    {" "}
                    <BiTrashAlt size={24} />{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (data) {
    return (
      <div className="container mx-auto mt-10">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-5 gap-y-20">
          {data.data.map((item, i) => (
            <div
              key={i}
              className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
            >
              <a href="#">
                <Image
                  width={367}
                  height={256}
                  className="rounded-t-lg w-full h-64"
                  src="/images/nature.jpg"
                  alt=""
                />
              </a>
              <div className="flex justify-between absolute top-2 right-2 gap-5">
                {item.activeStatus == "active" ? (
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    Active
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Inactive
                  </span>
                )}
              </div>

              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.firstName.en + " " + item.lastName.en}
                  </h5>
                </a>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.firstName.bn + " " + item.lastName.bn}
                  </h5>
                </a>

                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  NID Number: {item.nidNumber}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  Birth Registration: {item.birthRegNumber}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  Username: {item.userName}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  Father's name: {item.fatherName.en}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  বাবার নাম: {item.fatherName.bn}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Email: {item.emailAddress}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Role: {item.userRole}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Mobile: {item.mobileNumber}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Occupation: {item.occupation}
                </p>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Course Name:
                </p>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.studentCourseCode)}
                </ReactHighlightSyntax>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  jamat Name:
                </p>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.studentJamatCode)}
                </ReactHighlightSyntax>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Gender: {item.gender}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Date 0f Birth:{" "}
                  {new Date(item.dateOfBirth).toLocaleDateString()}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Country: {item.countryName}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Admission Date:{" "}
                  {new Date(item.admissionDate).toLocaleDateString()}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Admission Session: {item.admissionSession}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Student Motive: {item.studentMotive}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Payment Status:
                </p>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.paymentStatus)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Address
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 block max-h-24 overflow-y-scroll">
                  Present Address: {item.fullPresentAddress}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 block max-h-24 overflow-y-scroll">
                  Permanent Address: {item.fullPermanentAddress}
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => updateHandler(item._id, data)}
                    className="w-2 px-5 py-5 allColorFont"
                  >
                    <BiEdit size={24} />{" "}
                  </button>
                  <button
                    onClick={() => deleteHandler(item._id)}
                    className="w-2 px-5 py-5 text-red-400"
                  >
                    {" "}
                    <BiTrashAlt size={24} />{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default StudentCard;
