"use client";
import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { selectData, deleteData } from "@/apiservices/courseapiservices";
import { useEffect, useState } from "react";
import myToast from "@/components/toast/toast";
import ReactHighlightSyntax from "react-highlight-syntax";
import Image from "next/image";

function CourseCard(props) {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const payload = await selectData(null, null);
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
                  src={item.imageLink}
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
              <div className="absolute top-2 left-2">
                <div className="bg-gray-100 text-gray-800 text-xs font-medium flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 mb-2">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Created at: {new Date(item.createdDate).toLocaleDateString()}
                </div>
                <div className="bg-blue-100 text-blue-800 text-xs font-medium flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 mb-2">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Updated at: {new Date(item.updatedDate).toLocaleDateString()}
                </div>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Courese Code: {item.courseCode}
                  </h5>
                </a>
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Course Title:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.title)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Description:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.description)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  categories:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.categories)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  startingDate:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.startingDate)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  popularity:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.popularity)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Jamat Name:
                </h5>

                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.jamatName)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Instructor:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.instructor)}
                </ReactHighlightSyntax>
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  coursePrice:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.coursePrice)}
                </ReactHighlightSyntax>
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Course Button:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.courseButton)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  course Info:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.courseInfo)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Detail Data:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.detailData)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Course Syllabus:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.courseSyllabus)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  FAQ:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.faq)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  commentID:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.commentID)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  courseMaterial:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.courseMaterial)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Common Question:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.commonQuestion)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Course Video ID:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.courseVideoID)}
                </ReactHighlightSyntax>

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
                  src={item.imageLink}
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
              <div className="absolute top-2 left-2">
                <div className="bg-gray-100 text-gray-800 text-xs font-medium flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 mb-2">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Created at: {new Date(item.createdDate).toLocaleDateString()}
                </div>
                <div className="bg-blue-100 text-blue-800 text-xs font-medium flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 mb-2">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Updated at: {new Date(item.updatedDate).toLocaleDateString()}
                </div>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Courese Code: {item.courseCode}
                  </h5>
                </a>
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Course Title:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.title)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Description:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.description)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  categories:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.categories)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  startingDate:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.startingDate)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  popularity:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.popularity)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Jamat Name:
                </h5>

                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.jamatName)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Instructor:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.instructor)}
                </ReactHighlightSyntax>
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  coursePrice:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.coursePrice)}
                </ReactHighlightSyntax>
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Course Button:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.courseButton)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  course Info:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.courseInfo)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Detail Data:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.detailData)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Course Syllabus:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.courseSyllabus)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  FAQ:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.faq)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  commentID:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.commentID)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  courseMaterial:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.courseMaterial)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Common Question:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.commonQuestion)}
                </ReactHighlightSyntax>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Course Video ID:
                </h5>
                <ReactHighlightSyntax
                  language={"JavaScript"}
                  theme={"Base16Darcula"}
                  copy={true}
                  copyBtnTheme={"Dark"}
                  showLineNumbers={true}
                >
                  {JSON.stringify(item.courseVideoID)}
                </ReactHighlightSyntax>
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

export default CourseCard;
