"use client";
import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { selectData, deleteData } from "@/apiservices/commentapiservice";
import { useEffect, useState } from "react";
import myToast from "@/components/toast/toast";
import Image from "next/image";

function CommentCard(props) {
  const [comment, setComment] = useState();

  useEffect(() => {
    async function fetchData() {
      const payload = await selectData(null, null);
      setComment(payload);
    }
    fetchData();
  }, []);

  const updateHandler = props.updateHandler;

  const deleteHandler = (id) => {
    deleteData(id);
    myToast.danger(`item ${id} is deleted`);
    const updatedData = comment.data.filter((item) => item._id !== id);
    const constructeddata = {
      status: "Alhamdulillah",
      data: updatedData,
    };
    setComment(constructeddata);
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
                  src="/images/2.jpg"
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
                  Created at:{" "}
                  {new Date(item.commentCreatedDate).toLocaleDateString()}
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
                  Updated at:{" "}
                  {new Date(item.commentUpdatedDate).toLocaleDateString()}
                </div>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.userName.en} commented this
                  </h5>
                </a>

                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  Desgnation: {item.designation.en}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  পদবী: {item.designation.bn}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Username: {item.userName.en}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  ইউজার নেমঃ {item.userName.bn}{" "}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md relative">
                  Comment icon: {item.commentIcon}
                  <i
                    style={{ fontSize: 24 + "px" }}
                    className={`${item.commentIcon} absolute right-1`}
                  ></i>
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  Comment ID: {item.commentId}
                </p>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Comment
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 block max-h-24 overflow-y-scroll">
                  {item.comment.en}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 block max-h-24 overflow-y-scroll">
                  {item.comment.bn}
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
  } else if (comment) {
    return (
      <div className="container mx-auto mt-10">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-5 gap-y-20">
          {comment.data.map((item, i) => (
            <div
              key={i}
              className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
            >
              <a href="#">
              <Image
                  width={367}
                  height={256}
                  className="rounded-t-lg w-full h-64"
                  src="/images/2.jpg"
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
                  Created at:{" "}
                  {new Date(item.commentCreatedDate).toLocaleDateString()}
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
                  Updated at:{" "}
                  {new Date(item.commentUpdatedDate).toLocaleDateString()}
                </div>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.userName.en} commented this
                  </h5>
                </a>

                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  Desgnation: {item.designation.en}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  পদবী: {item.designation.bn}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  {" "}
                  Username: {item.userName.en}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  ইউজার নেমঃ {item.userName.bn}{" "}
                </p>
                <p className="mb-3 font-normal text-orange-700 dark:text-orange-400 bg-slate-50 py-1 rounded-md relative">
                  Comment icon: {item.commentIcon}
                  <i
                    style={{ fontSize: 24 + "px" }}
                    className={`${item.commentIcon} absolute right-1`}
                  ></i>
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-slate-50 py-1 rounded-md">
                  Comment ID: {item.commentId}
                </p>

                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Comment
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  block max-h-24 overflow-y-scroll">
                  {item.comment.en}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  block max-h-24 overflow-y-scroll">
                  {item.comment.bn}
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => {
                      updateHandler(item._id, comment);
                      console.log(comment);
                    }}
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

export default CommentCard;
