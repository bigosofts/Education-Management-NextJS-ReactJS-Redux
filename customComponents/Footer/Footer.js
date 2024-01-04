"use client";

import { useState, useEffect } from "react";

import "./Footer.css";
import GoogleMap from "../MapComponent/Map";
import { selectData } from "@/apiservices/widgetapiservices";

function Footer() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        widgetName: "main_footer",
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
      <footer className="Footer">
        <div className="style-1">
          <div className="style-2">
            <div className="style-3">
              <div className="style-4">
                <h3 className="style-5">
                  {data.widgetPayload[0].section1.title.en}
                </h3>
                <p className="style-6">
                  {data.widgetPayload[0].section1.description.en}{" "}
                </p>
              </div>
            </div>
            <div className="style-7">
              <div className="style-8">
                <h3 className="style-9">
                  {data.widgetPayload[0].section2.title.en}
                </h3>
                <ul className="style-10">
                  {data.widgetPayload[0].section2.list.map((item) => (
                    <li className="style-11">
                      <a
                        href={`${item.link}`}
                        target="_blank"
                        className="style-12"
                      >
                        {item.item.en}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="style-29">
              <div className="style-30">
                <h3 className="style-31">
                  {data.widgetPayload[0].section3.title.en}
                </h3>
                <div className="style-32">
                  <table className="style-33">
                    <tbody className="style-34">
                      {data.widgetPayload[0].section3.list.map((item) => (
                        <tr className="style-35">
                          <td className="style-36">
                            <i className="style-37" aria-hidden="true"></i>
                          </td>
                          <td className="style-38">{item.item.en}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="style-47">
                  <h5 className="style-48">Follow us :</h5>
                  <ul className="style-49">
                    {data.widgetPayload[0].section3.socialMedia.map((item) => (
                      <li className="style-50">
                        <a
                          href={`${item.link}`}
                          target="_blank"
                          className="style-51"
                        >
                          <i className={`${item.icon}`} aria-hidden="true"></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="style-68">
              <div className="style-69">
                <GoogleMap />
              </div>
            </div>
          </div>
          <div className="style-75">
            <p className="style-76">
              &copy;<i className="style-77" aria-hidden="true"></i>{" "}
              {data.widgetPayload[0].section4.copyRight.en}
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
