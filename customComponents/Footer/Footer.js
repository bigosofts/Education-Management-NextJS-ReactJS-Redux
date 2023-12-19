"use client";

import { useState, useEffect } from "react";

import "./Footer.css";
import GoogleMap from "../MapComponent/Map";
import { selectData } from "@/apiservices/widgetapiservices";

const object = [
  {
    section1: {
      title: {
        en: "Talimul Quran Was Sunnah Internet Madrasa",
        bn: "তা’লীমুল কুরআন ওয়াস সুন্নাহ ইন্টারনেট মাদ্রাসা",
      },
      description: {
        en: "Ta'leemul Quran Was Sunnah Internet Madrasa is to acquire Islamic knowledge in Bengali language in the light of Quran and Sunnah and its proper application, self-purification, formation of good character; Above all, in the era of materialism, the online-based organization was created to make the masses Allah-centered and Akhiraat-oriented. It is an integrated educational center of Iman, Amal and Tarbiyyat formed in the light of Deobandi and Qaumi thought from Nisbat side. Internet Madrasa is completely non-political organization and the main objective of the Madrasa is only to make people towards Deen Islam and towards Allah. It does not favor corner type ferocity or violence.",
        bn: "তা’লীমুল কুরআন ওয়াস সুন্নাহ ইন্টারনেট মাদ্রাসা হল কুরআন এবং সুন্নাহ এর আলোকে বাংলাভাষায় ইসলামিক জ্ঞান অর্জন এবং তার যথাযথ প্রয়োগ, আত্মশুদ্ধিকরন, উত্তম আখলাক গঠন; সর্বোপরি বস্তুবাদের যুগে ব্যাপকভাবে জনসাধারণকে আল্লাহকেন্দ্রিক এবং আখিরাতমুখী করার উদ্দেশ্যে নির্মিত অনলাইনভিত্তিক প্রতিষ্ঠান। এটি নিসবতের দিক থেকে দেওবন্ধী এবং কওমী চিন্তাধারার আলোকে গঠিত ইমান, আমল এবং তরবিয়্যাতের সমন্বিত শিক্ষাকেন্দ্র। ইন্টারনেট মাদ্রাসা সম্পূর্ণরূপে একটি অরাজনৈতিক প্রতিষ্ঠান এবং শুধুমাত্র জনসাধারণকে দ্বীন ইসলামমুখী এবং আল্লাহমুখী করে গড়ে তোলাই মাদ্রাসার মূল উদ্দেশ্য। এটি কোণ ধরণের উগ্রতা বা সহিংসতার পক্ষপাতী নয়।",
      },
    },
    section2: {
      title: {
        en: "Quick Link",
        bn: "কুইক লিংক",
      },
      list: [
        {
          item: {
            en: "Online Admission",
            bn: "",
          },
          link: "/",
        },
        {
          item: {
            en: "Donote",
            bn: "",
          },
          link: "/",
        },
        {
          item: {
            en: "Blog",
            bn: "",
          },
          link: "/",
        },
        {
          item: {
            en: "Course",
            bn: "",
          },
          link: "/",
        },
        {
          item: {
            en: "Fatwa",
            bn: "",
          },
          link: "/",
        },
        {
          item: {
            en: "Book",
            bn: "",
          },
          link: "/",
        },
        {
          item: {
            en: "Disclaimer",
            bn: "",
          },
          link: "/",
        },
        {
          item: {
            en: "Noties",
            bn: "",
          },
          link: "/",
        },
        {
          item: {
            en: "Events",
            bn: "",
          },
          link: "/",
        },
      ],
    },
    section3: {
      title: {
        en: "Contact us",
        bn: "যোগাযোগ করুন",
      },
      list: [
        {
          item: {
            en: "	internetmadrasa@outlook.com",
            bn: "",
          },
          link: "/",
        },
        {
          item: {
            en: "+(88)01674040502",
            bn: "",
          },
          link: "/",
        },
        {
          item: {
            en: "12-30, Uttar Rajashon (Dalta Mor), Saver, Dhaka",
            bn: "",
          },
          link: "/",
        },
      ],
      socialMedia: [
        {
          name: "facebook",
          icon: "fa fa-facebook",
          link: "https://fb.com",
        },
        {
          name: "skype",
          icon: "fa fa-skypee",
          link: "https://skypee.com",
        },
        {
          name: "telegram",
          icon: "fa fa-telegram",
          link: "https://tg.com",
        },
      ],
    },
    section4: {
      copyRight: {
        en: "Copyright  2024 Talimul quran was sunna internet madrasa. All right reserved",
        bn: "",
      },
    },
  },
];

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
  } else {
    return <div>Loading...</div>;
  }
}

export default Footer;
