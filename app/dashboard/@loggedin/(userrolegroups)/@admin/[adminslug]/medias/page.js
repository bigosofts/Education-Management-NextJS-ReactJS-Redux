"use client";
import { BiUserPlus } from "react-icons/bi";
import { selectData } from "@/apiservices/readImageapiservices";
import { useState, useEffect } from "react";
import Image from "next/image";

function MediaPage(props) {
  const [data, setData] = useState();
  const [fileData, setFileData] = useState();
  useEffect(() => {
    async function fetchData() {
      const payload = await selectData();
      setData(payload.data);
    }
    fetchData();
  }, [fileData]);
  const sendImageHandler = async () => {
    try {
      let fileInput = document.getElementById("fileInput");
      let fileUploadData;

      if (fileInput.files[0]) {
        const formData = new FormData();
        formData.append("fileInput", fileInput.files[0]); // Upload the selected file

        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/upload`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          fileUploadData = "";
        } else {
          const data = await response.json();
          fileUploadData = data;
          setFileData(fileUploadData);
        }
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  if (data) {
    return (
      <div className="main-box w-full min-w-[250px] overflow-y-scroll mx-5 pb-10">
        <h1 className="animate__animated animate__backInDown text-xl  md:text-5xl font-bold py-10  text-center">
          {" "}
          Medias Management{" "}
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <input
              accept="image/png image/jpeg image/gif"
              type="file"
              id="fileInput"
            ></input>
            <button
              onClick={sendImageHandler}
              className="flex allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white"
            >
              Upload Image{" "}
              <span className="px-1">
                <BiUserPlus size={23} />
              </span>
            </button>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="container mx-auto mt-10">
            <h1 style={{ margin: "100px 0px", textAlign: "center" }}>
              {fileData ? `file is Uploaded: ${fileData.fileUrl}` : ""}
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-5 gap-y-20">
              {data.map((item) => (
                <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
                  <a href={item}>
                    <Image
                      width={367}
                      height={256}
                      className="rounded-t-lg w-full h-64"
                      src={item}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href={item}>
                      <span
                        style={{
                          overflowWrap: "break-word",
                          fontSize: "20px",
                          fontWeight: "800",
                        }}
                      >
                        {item}
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading ... </div>;
  }
}

export default MediaPage;
