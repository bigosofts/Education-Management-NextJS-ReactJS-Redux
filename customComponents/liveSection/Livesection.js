"use client";

import "./Livesection.css";
import YouTubeEmbed from "../AudioPlayer/AudioPlayer";



function LiveSection() {
  
  
  return (
    <div className="Livestream">
      <div className="style-1">
        <h2 className="style-2">
          Live Broadcasting <span className="style-3">OFFAIR</span>
        </h2>
        <div style={{padding: "5px 0px", background:"url('/images/pattern.png')"}}>

        <YouTubeEmbed />


        </div>
        <h2 className="style-36">Get Mobile App</h2>
        <div className="style-37">
          <div className="style-38"></div>
          <div className="style-39">
            <a
              href="https://play.google.com/store/apps/details?id=com.khanqahbd"
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
              href="https://apps.apple.com/us/app/khanqah-bd/id1537836388"
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
            <div className="style-51">hours</div>
            <strong className="style-52">19</strong>
          </div>
          <div className="style-53">
            <div className="style-54">minutes</div>
            <strong className="style-55">20</strong>
          </div>
        </div>
        <div className="style-56">Tuesday Bayan at Khanqah</div>
        <div className="style-57">
          <a className="style-58">
            <span className="style-59"><i className="fa fa-calendar"/></span>Schedule & Map
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
                  src="/images/whatsapp.png"
                  height="50"
                  className="style-66"
                />
              </td>
              <td className="style-67">
                <span className="style-68">
                  <a href="https://wa.me/+8801715801869" className="style-69">
                    (+880)-1715-80-18-69
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
                  <a href="https://t.me/KhanqahBD" className="style-75">
                    t.me/KhanqahBD{" "}
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
                  <a href="mailto:info@khanqahbd.com" className="style-81">
                    info@khanqahbd.com
                  </a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LiveSection;
