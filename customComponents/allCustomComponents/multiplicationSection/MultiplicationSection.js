"use client";
import { useState, useEffect } from "react";
import "./MultiplicationSection.css";
import { selectData } from "@/apiservices/widgetapiservices";

function Multiplication() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        widgetName: "abacus_page_roles_of_solution",
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
      <section className="multiplicationSection">
        <div className="style-1">
          <div className="style-2">
            <p className="style-3">{data.widgetPayload[0].subTitle.en}</p>
            <h2 className="style-4">{data.widgetPayload[0].title.en}</h2>
          </div>
          <div className="style-5">
            {data.widgetPayload[0].list.map((item) => (
              <div className="style-6">
                <div className="style-7">
                  <img
                    src={item.icon}
                    width="80"
                    height="80"
                    className="style-8"
                  />
                  <h3 className="style-9">
                    <a href="#" className="style-10">
                      {item.title}
                    </a>
                  </h3>
                </div>
              </div>
            ))}

            {/* <div className="style-11">
              <div className="style-12">
                <img
                  src="/images/math_addition.png"
                  width="80"
                  height="80"
                  class="style-13"
                />
                <h3 class="style-14">
                  <a href="#" class="style-15">
                    Addition
                  </a>
                </h3>
              </div>
            </div>
            <div class="style-16">
              <div class="style-17">
                <img
                  src="/images/math_subtraction.png"
                  width="80"
                  height="80"
                  class="style-18"
                />
                <h3 class="style-19">
                  <a href="#" class="style-20">
                    Subtraction
                  </a>
                </h3>
              </div>
            </div>
            <div class="style-21">
              <div class="style-22">
                <img
                  src="/images/math_multiplication.png"
                  width="80"
                  height="80"
                  class="style-23"
                />
                <h3 class="style-24">
                  <a href="#" class="style-25">
                    Multiplication
                  </a>
                </h3>
              </div>
            </div>
            <div class="style-26">
              <div class="style-27">
                <img
                  src="/images/math_division.png"
                  width="80"
                  height="80"
                  class="style-28"
                />
                <h3 class="style-29">
                  <a href="#" class="style-30">
                    Division
                  </a>
                </h3>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Multiplication;
