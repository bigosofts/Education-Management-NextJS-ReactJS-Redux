"use client";
import { useState, useEffect } from "react";
import "./hifzGrid.css";
import Loader from "../loader/Loader";

import { selectData } from "@/apiservices/widgetapiservices";

function HifzGrid() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        widgetName: "hifz_result",
      });

      if (res.status == "Alhamdulillah") {
        setData(res.data);
      } else {
        mytoast.danger("Data fetching error. Try Refreshing the page");
      }
    }
    getData();
  }, []);

  if (data) {
    return (
      <>
        <h2 className="style-14h1">
          {false
            ? "যারা ইন্টারনেট মাদ্রাসা থেকে হিফজ সম্পন্ন করেছেন"
            : "Who Completed Their Hifz by Internet Madrasa"}
        </h2>
        <div className="hifzResult">
          {data[0].widgetPayload.slice(0,4).map((item, i) => (
            <div key={i} className="style-6">
              <div className="style-7">
                <div className="style-8">
                  <img src={item.image} alt="Photo" className="style-9" />
                </div>
                <div className="style-10">
                  <p className="style-11">{item.designation.bn}</p>
                  <h4 className="style-12">{item.name.bn}</h4>
                  <p className="style-13">
                    {true ? "পিতার নামঃ" : "Fathers's name:"}{" "}
                    {item.fatherName.bn}
                  </p>
                  <p className="style-13">
                    {true ? "মাতার নামঃ" : "Mother's name:"}{" "}
                    {item.motherName.bn}
                  </p>
                  <p className="style-13">
                    {true ? "ঠিকানাঃ" : "Address:"} {item.country.bn}
                  </p>
                  <p className="style-13">
                    {true ? "পাশের সন" : "Year:"} {item.year.bn}
                  </p>
                  <p className="style-13">
                    {true ? "পেশাঃ" : "Profession:"} {item.profession.bn}
                  </p>
                  <p className="style-13">
                    {true
                      ? "কয়েদিনে হিফজ শেষ করেছেনঃ"
                      : "How long it takes to complete hifz:"}{" "}
                    {item.time.bn}
                  </p>
                  {item.comment ? (
                    <p className="style-13">
                      {true ? "অনুভূতিঃ " : "Comment:"} {item.comment}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
}

export default HifzGrid;
