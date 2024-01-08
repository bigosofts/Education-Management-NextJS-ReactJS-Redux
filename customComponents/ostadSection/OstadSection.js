"use client";
import { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import { selectAllData } from "@/apiservices/teacherapiservices";

import "./OstadSection.css";

function OstadSection() {
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectAllData({
        activeStatus: "active",
        gender: "male",
      });
      const res2 = await selectAllData({
        activeStatus: "active",
        gender: "female",
      });

      if (res.status == "Alhamdulillah" && res2.status == "Alhamdulillah") {
        setData(res.data);
        setData2(res2.data);
      } else {
        mytoast.danger("Data fetching error. Try Refreshing the page");
      }
    }
    getData();
  }, []);
  if (data && data2) {
    return (
      <section className="OstadSection">
        <div className="style-1">
          <section className="style-2">
            <h2 className="style-3">Our Teaching exparts</h2>
            <p className="style-4">
              আমাদের ইন্টারনেট মাদ্রাসা পরিচালিত হচ্ছে কিছু অভিজ্ঞ, বিচক্ষণ এবং
              মেধাবী আলেম দ্বারা যাদের অক্লান্ত পরিশ্রম এবং গভীর চিন্তাধারা
              এগিয়ে নিয়ে চলেছে ইন্টারনেট মাদ্রাসা এর কার্যক্রম। আমাদের শিক্ষকগণ
              অত্যন্ত যত্নের সাথে জ্ঞানকে ছাত্র/ছাত্রীদের মাঝে বণ্টন করে থাকে
              এবং তাদের পড়াশুনা সংক্রান্ত যেকোনো সহায়তায় প্রস্তুত থাকে।
            </p>
          </section>
          <div className="style-5">
            {data.map((item, i) => (
              <div className="style-6">
                <div className="style-7">
                  <div className="style-8">
                    <img
                      src="images/shaikh.png"
                      alt="Photo"
                      className="style-9"
                    />
                  </div>
                  <div className="style-10">
                    <p className="style-11">{item.designation}</p>
                    <h4 className="style-12">
                      {item.firstName.bn} {item.lastName.bn}
                    </h4>
                    <p className="style-13">{item.educationalBackground}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="style-205">
            {data.map((item, i) => (
              <div key={i} className="style-413">
                <div className="style-414">
                  <div className="style-415">
                    <img
                      src="images/female_teacher.png"
                      alt="Photo"
                      className="style-416"
                    />
                  </div>
                  <div className="style-417">
                    <p className="style-418">{item.designation}</p>
                    <h4 className="style-419">
                      {item.firstName.bn} {item.lastName.bn}
                    </h4>
                    <p className="style-420">{item.educationalBackground}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return <Loader />;
  }
}

export default OstadSection;
