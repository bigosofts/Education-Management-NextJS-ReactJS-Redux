"use client";
import { useState, useEffect } from "react";
import { selectData } from "@/apiservices/widgetapiservices";

import "./AboutAbacus.css";

function AboutAbacus() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        widgetName: "abacus_page_benefit_of_abacus",
      });

      if (res.status == "Alhamdulillah") {
        setData(res.data[0]);
      } else {
        mytoast.danger("Data fetching error. Try Refreshing the page");
      }
    }
    getData();
  }, []);

  if (data) {
    return (
      <section className="aboutAbacus">
        <div className="style-1">
          <div className="style-2">
            <img src="/images/cta-line-1-2.png" className="style-3" alt="" />{" "}
            <img src="/images/cta-moc-1-2.png" alt="" className="style-4" />
          </div>
          <div className="style-5">
            <div className="style-6">
              <div className="style-7">
                <div className="style-8">
                  <h2 className="style-10">{data.widgetPayload[0].title.bn}</h2>
                </div>
                <p className="style-11">
                  {data.widgetPayload[0].list.map((item) => (
                    <>
                      <span>{item.bn}</span>
                      <br className="style-12" />
                    </>
                  ))}
                </p>
                <a href="#" className="style-19">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutAbacus;
