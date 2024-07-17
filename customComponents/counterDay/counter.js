"use client";
import { useEffect } from "react";
import "./counter.css";
import NoteCard from "../note/note";
import Image from "next/image";

function Counter() {
  useEffect(() => {
    import("./counterCustom.js");
  }, []);

  return (
    <div className="grandOut">
      <div className="counterFlex">
        <div className="CounterContWrap">
          <h1 className="counterContainer">
            {true
              ? "আলেম/আলেমা পরবর্তী একাডেমিক সেশন শুরু হতে বাকি"
              : "Alem Alema Academic session is about to start after"}
          </h1>
          <div className="countDownContainer">
            <div id="countdown">
              <div id="tiles"></div>
              <div className="labels">
                <li>Days</li>
                <li>Hours</li>
                <li>Mins</li>
                <li>Secs</li>
              </div>
            </div>
          </div>
        </div>
        <div className="otherSection1">
          <NoteCard />
        </div>
        <div className="otherSection2">
          <div className="style-60">
            <h2 className="style-61"> {true ? "যোগাযোগ" : "Contact Us"}</h2>
            <table className="style-62">
              <tbody className="style-63">
                <tr className="style-64">
                  <td className="style-65">
                    <Image
                      width={62}
                      height={62}
                      src="/images/skype.png"
                      className="style-66"
                    />
                  </td>
                  <td className="style-67">
                    <span className="style-68">
                      <a
                        target="_blank"
                        href="https://join.skype.com/invite/NxyjksCQosR4"
                        className="style-69"
                      >
                        internetmadrasa
                      </a>
                    </span>
                  </td>
                </tr>
                <tr className="style-70">
                  <td height="40" className="style-71">
                    <Image
                      width={62}
                      height={62}
                      src="/images/telegram.png"
                      className="style-72"
                    />
                  </td>
                  <td className="style-73">
                    <span className="style-74">
                      <a
                        href="https://t.me/internet_madrasa"
                        className="style-75"
                      >
                        (+880)-1674-04-05-02 (Male)
                      </a>
                    </span>
                  </td>
                </tr>
                <tr className="style-70">
                  <td height="40" className="style-71">
                    <Image
                      width={62}
                      height={62}
                      src="/images/telegram.png"
                      className="style-72"
                    />
                  </td>
                  <td className="style-73">
                    <span className="style-74">
                      <a
                        href="https://t.me/internet_madrasa_female"
                        className="style-75"
                      >
                        (+880)-1791-84-51-22 (Female)
                      </a>
                    </span>
                  </td>
                </tr>
                <tr className="style-76">
                  <td height="50" className="style-77">
                    <Image
                      width={62}
                      height={62}
                      src="/images/gmail.png"
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
      </div>
    </div>
  );
}

export default Counter;
