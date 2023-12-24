"use client";
import { useState, useEffect } from "react";
import { selectData } from "@/apiservices/widgetapiservices";

import "./Livesection.css";
import YouTubeEmbed from "../AudioPlayer/AudioPlayer";

function LiveSection() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        widgetName: "live_stream",
      });

      if (res.status == "Alhamdulillah") {
        setData(res.data[0]);
      } else {
        mytoast.danger("Data fetching error. Try Refreshing the page");
      }
    }
    getData();
  }, []);

  function dayDifferenceWithTime(iso1, iso2) {
    const date1 = new Date(iso1);
    const date2 = new Date(iso2);

    const timeDifference = date1 - date2;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingTime = timeDifference % (1000 * 60 * 60 * 24);

    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );

    let result = "";

    if (daysDifference > 0) {
      result += daysDifference + (daysDifference === 1 ? " day " : " days ");
    }

    if (hours > 0) {
      result += hours + (hours === 1 ? " hour " : " hours ");
    }

    if (minutes > 0) {
      result += minutes + (minutes === 1 ? " minute " : " minutes ");
    }

    return result.trim();
  }


  if (data) {
    return (
      <div className="Livestream">
        <div className="style-1">
          <h2 className="style-2">
            Live Broadcasting{" "}
            <span className="style-3">{data.widgetPayload[0].live}</span>
          </h2>
          <div
            style={{
              padding: "5px 0px",
              background: "url('/images/pattern.png')",
            }}
          >
            <YouTubeEmbed link={data.widgetPayload[0].liveLink} />
          </div>
          <h2 className="style-36">Get Mobile App</h2>
          <div className="style-37">
            <div className="style-38"></div>
            <div className="style-39">
              <a
                href={`${data.widgetPayload[0].androidAppLink}`}
                target="_blank"
                className="style-40"
              >
                <img
                  src="/images/google-play.png"
                  width="165"
                  height="50"
                  className="style-41"
                />
              </a>
            </div>
            <div className="style-42">
              <a
                href={`${data.widgetPayload[0].iosAppLink}`}
                target="_blank"
                className="style-43"
              >
                <img
                  src="/images/appstore.png"
                  width="165"
                  height="50"
                  className="style-44"
                />
              </a>
            </div>
            <div className="style-45"></div>
          </div>
        </div>
        <div className="style-46">
          <h2 className="style-47">Next Majlis</h2>
          <div className="style-48">After</div>
          <div className="style-49">
            <div className="style-50">
              <div className="style-51">Remaining...</div>
              <strong className="style-52">{dayDifferenceWithTime(data.widgetPayload[0].nextLive, new Date(Date.now()).toISOString())}</strong>
            </div>
            
          </div>
          <div className="style-56">Tuesday Bayan at Khanqah</div>
          <div className="style-57">
            <a className="style-58">
              <span className="style-59">
                <i className="fa fa-calendar" />
              </span>
              Schedule & Map
            </a>
          </div>
        </div>
        <div className="style-60">
          <h2 className="style-61">Contact Us</h2>
          <table className="style-62">
            <tbody className="style-63">
              <tr className="style-64">
                <td className="style-65">
                  <img
                    src="/images/skype.png"
                    height="50"
                    className="style-66"
                  />
                </td>
                <td className="style-67">
                  <span className="style-68">
                    <a href="" className="style-69">
                      (+880)-1674-04-05-02
                    </a>
                  </span>
                </td>
              </tr>
              <tr className="style-70">
                <td height="40" className="style-71">
                  <img
                    src="/images/telegram.png"
                    height="40"
                    className="style-72"
                  />
                </td>
                <td className="style-73">
                  <span className="style-74">
                    <a
                      href="https://t.me/internet_madrasa"
                      className="style-75"
                    >
                      (+880)-1674-04-05-02
                    </a>
                  </span>
                </td>
              </tr>
              <tr className="style-76">
                <td height="50" className="style-77">
                  <img
                    src="/images/gmail.png"
                    height="35"
                    className="style-78"
                  />
                </td>
                <td className="style-79">
                  <span className="style-80">
                    <a
                      href="mailto:internetmadrasa@outlook.com"
                      className="style-81"
                    >
                      internetmadrasa@outlook.com
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <div>Loading ... </div>;
  }
}

export default LiveSection;
