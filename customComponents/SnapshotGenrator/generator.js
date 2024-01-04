"use client";
import { useState, useEffect, useRef } from "react";
// import { selectAllData } from "@/apiservices/allAbacusApiServices/madrashaAbacusApiServices";
import mytoast from "@/components/toast/toast";
import html2canvas from "html2canvas";

const Page = () => {
  const componentref = useRef();
  const triggerCaptureAndDownload = async () => {
    var btn = document.getElementById("button-cptr");
    btn.style.display = "none";
    const container = componentref.current;

    if (container) {
      // Get the total height of the scrollable container
      const totalHeight = container.scrollHeight;

      // Set the height of the container to its total height to capture the entire content
      container.style.height = totalHeight + "px";

      const canvas = await html2canvas(container, {
        scale: 10,
        backgroundColor: null,
      });

      // Reset the container's height to its original value
      container.style.height = "";

      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "ticket.png";
      link.click();
    }
  };

  function niceDate(isoTime) {
    var date = new Date(isoTime);

    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }
  const [data, setData] = useState();
  useEffect(() => {
   
  }, []);
  if (data) {
   
    return (
      <div
        ref={componentref}
        className="main-box w-full min-w-[250px] overflow-y-scroll mx-5 pb-10"
      >
        <h1 className="animate__animated animate__backInDown text-xl  md:text-5xl font-bold py-10  text-center">
          {" "}
          Abacus Madrasha Information{" "}
        </h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Madrasha ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Madrasha Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Director Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Director Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Email Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Representative Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Representative Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Madrasha Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Submitted Date
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{item.madrashaAbacusID}</td>
                  <td className="px-6 py-4">{item.madrashaName}</td>
                  <td className="px-6 py-4">{item.directorName}</td>
                  <td className="px-6 py-4">{item.directorPhone}</td>
                  <td className="px-6 py-4">{item.madrashaEmail}</td>
                  <td className="px-6 py-4">{item.responsiblePerson}</td>
                  <td className="px-6 py-4">{item.responsiblePersonMobile}</td>
                  <td className="px-6 py-4">{item.madrashaAddress}</td>
                  <td className="px-6 py-4">{niceDate(item.createdDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          id="button-cptr"
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={triggerCaptureAndDownload}
            style={{
              width: "200px",
              padding: "20px 10px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            Download Table
          </button>
        </div>
      </div>
    );
  } 
};

export default Page;
