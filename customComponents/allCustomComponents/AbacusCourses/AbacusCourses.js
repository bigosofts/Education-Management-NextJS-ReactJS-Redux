"use client";
import "./AbacusCourses.css";
import { useState } from "react";
import Image from "next/image";
import EnrollCondition from "@/components/dashboardPage/courses/enrollCondition";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function AbacusCourse({ info, comment, richtext, parameter }) {
  const [syllabus, setSyllabus] = useState(3);
  const pageName = parameter.courseID;

  function richtextoutput(text) {
    if (text.indexOf("rich-") !== -1) {
      const newArray = richtext.filter((item) => item.RichTextName === text);
      return (
        <div
          style={{ maxWidth: "720px", overflowX: "scroll" }}
          dangerouslySetInnerHTML={{ __html: newArray[0].TextPayload }}
        />
      );
    } else {
      return text;
    }
  }

  if (comment) {
    return (
      <main className="abacusCourse">
        <div className="style-1">
          <div className="style-2">
            <h1 className="style-3">{info.title.bn}</h1>
            <div className="style-4">{info.description.bn}</div>
          </div>
          <div className="style-5">
            <div className="style-6">
              <div className="style-7"></div>
            </div>
            <div className="style-8"></div>
            <div className="style-9">
              <div className="style-10">
                <div className="style-11">
                  <h2 className="style-12">{true ? "Ostad" : "ওস্তাদ"}</h2>
                  <div className="style-13">
                    {info.instructor.map((item, i) => (
                      <div key={i} className="style-14">
                        <div className="style-15">
                          <div className="style-16">
                            <Image
                              width={73}
                              height={73}
                              src={item.image}
                              alt=""
                              draggable="false"
                              loading="lazy"
                              decoding="async"
                              data-nimg="1"
                              className="style-17"
                            />
                          </div>
                        </div>
                        <div className="style-18">
                          <h3 className="style-19">{item.name.bn}</h3>
                          <div className="style-20">{item.experience.bn}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="style-135"></div>
            <div className="style-136"></div>
            <div className="style-506">
              <div className="style-507">
                <div className="style-508">
                 

                  <div className="style-509">
                    <h2 className="style-510">
                      {false ? "Syllabus" : "সিলেবাস"}
                    </h2>
                  </div>
                  <div className="style-511">
                    <div className="style-512">
                      {info.courseSyllabus.map((item, i) => (
                        <details key={i} className="style-513">
                          <summary className="style-514">
                            <div className="style-515">
                              <img
                                alt="Orientation Class"
                                draggable="false"
                                loading="lazy"
                                width="40"
                                height="40"
                                decoding="async"
                                data-nimg="1"
                                className="style-516"
                                src="https://cdn.10minuteschool.com/images/icons/live_class.png"
                              />
                            </div>
                            <h3 className="style-517">{item.text.bn}</h3>
                            <span
                              className="animated-arrow"
                              style={{
                                fontSize: "26px",
                                position: "absolute",
                                right: "0px",
                              }}
                            >
                              <MdKeyboardDoubleArrowDown />
                            </span>
                          </summary>
                          <div className="style-518">
                            <ul className="style-519">
                              <li className="style-520">
                                <div className="style-525">
                                  <h4 className="style-526">
                                    {richtextoutput(item.desc.en)}
                                  </h4>
                                  <div className="style-527">
                                    {item.img ? <img src={item.img} /> : ""}
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                  {pageName == "schoolalemalema" && (
                    <div className="style-509">
                      <h2
                        style={{
                          marginTop: "40px",
                          color: "green",
                          border: "1px solid #ddd",
                          borderRadius: "10px",
                          padding: "20px 10px",
                          lineHeight: "40px",
                        }}
                        className="style-510"
                      >
                        {false
                          ? ""
                          : "প্রতি শনিবার অ্যাবাকাস ম্যাথ ও প্রাকটিক্যাল ইংরেজীর ক্লাস হবে"}
                      </h2>
                    </div>
                  )}

                  <div className="style-509">
                    <h2
                      style={{
                        marginTop: "40px",
                        color: "red",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        padding: "20px 10px",
                        lineHeight: "40px",
                      }}
                      className="style-510"
                    >
                      {false
                        ? ""
                        : "প্রতি শুক্র ও রবিবার রাত ৯টা ৩০ মিনিটে ইসলাহী নফসের ক্লাস সকলের জন্য বাধ্যতামূলক"}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="style-1067">
              <div className="style-1068">
                <div className="style-1069">
                  <div className="style-1070">
                    <h2 className="style-1071">
                      {true
                        ? "What Will You Need?"
                        : "ক্লাস করার জন্য প্রয়োজন হবে"}
                    </h2>
                    <div className="style-1072">
                      <ul className="style-1073">
                        {info.courseMaterial.map((item, i) => (
                          <li key={i} className="style-1074">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              className="style-1075"
                              height="24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                                className="style-1076"
                              ></path>
                            </svg>
                            <h3 className="style-1077">{item.bn}</h3>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="style-855">
              <div className="style-856">
                <div className="style-857">
                  <h2 className="style-858">
                    {true ? "Details" : "বিস্তারিত"}
                  </h2>
                  <div className="style-859">
                    {info.detailData.map((item, i) => (
                      <details key={i} open="" className="style-860">
                        <summary className="style-861">
                          <div className="style-862">
                            <h2 className="style-863">
                              <b className="style-864">{item.title.bn}</b>
                            </h2>
                          </div>
                        </summary>
                        <div className="style-865">
                          <div className="style-866">
                            <p className="style-867">{item.desc.bn}</p>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="style-908"></div>
            <div className="style-909"></div>
            <div className="style-910">
              <div className="style-911">
                <h2 className="style-912">
                  {true
                    ? "What Students Says About Us"
                    : "শিক্ষার্থীরা যা বলছে"}
                </h2>
                <div className="style-913">
                  <div className="style-914">
                    <div className="style-915">
                      <div className="style-916">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="32"
                          fill="none"
                          viewBox="0 0 33 32"
                          className="style-917"
                        >
                          <path
                            fill="#000"
                            fillOpacity="0.5"
                            fillRule="evenodd"
                            d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                            clipRule="evenodd"
                            className="style-918"
                          ></path>
                        </svg>
                      </div>
                      <div className="style-919">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="32"
                          fill="none"
                          viewBox="0 0 33 32"
                          className="style-920"
                        >
                          <path
                            fill="#000"
                            fillOpacity="0.5"
                            fillRule="evenodd"
                            d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                            clipRule="evenodd"
                            className="style-921"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="style-922">
                      {comment.map((item, i) => (
                        <div key={i} className="style-923">
                          <div className="style-924">
                            <div className="style-925">
                              <div className="style-926">
                                <div className="style-927">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    fill="none"
                                    viewBox="0 0 20 30"
                                    className="style-928"
                                  >
                                    <path
                                      fill="#D33242"
                                      d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                      className="style-929"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="style-930">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    fill="none"
                                    viewBox="0 0 20 30"
                                    className="style-931"
                                  >
                                    <path
                                      fill="#D33242"
                                      d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                      className="style-932"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="style-933">
                                <div className="style-934">
                                  {item.comment.en}
                                </div>
                                <div className="style-935">
                                  <p className="style-936">
                                    আরও দেখুন
                                    <span className="style-937">
                                      <svg
                                        width="11"
                                        height="7"
                                        viewBox="0 0 11 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="style-938"
                                      >
                                        <path
                                          d="M7.05279e-05 1.5C-0.000690498 1.36839 0.0245342 1.23793 0.0742988 1.11609C0.124063 0.994256 0.197391 0.88344 0.290071 0.79C0.383035 0.696271 0.493634 0.621877 0.615494 0.571108C0.737353 0.52034 0.868059 0.494201 1.00007 0.494201C1.13208 0.494201 1.26279 0.52034 1.38465 0.571108C1.50651 0.621877 1.61711 0.696271 1.71007 0.79L5.00007 4.1L8.31007 0.92C8.49743 0.733749 8.75089 0.629208 9.01507 0.629208C9.27926 0.629208 9.53271 0.733749 9.72007 0.92C9.8138 1.01296 9.88819 1.12356 9.93896 1.24542C9.98973 1.36728 10.0159 1.49799 10.0159 1.63C10.0159 1.76201 9.98973 1.89272 9.93896 2.01458C9.88819 2.13644 9.8138 2.24704 9.72007 2.34L5.72007 6.2C5.53314 6.38323 5.28182 6.48586 5.02007 6.48586C4.75832 6.48586 4.507 6.38323 4.32007 6.2L0.32007 2.2C0.223138 2.11024 0.144952 2.00217 0.0900268 1.88202C0.0351018 1.76187 0.004528 1.63203 7.05279e-05 1.5Z"
                                          fill="#1CAB55"
                                          className="style-939"
                                        ></path>
                                      </svg>
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="style-940">
                              <div className="style-941">
                                <div className="style-942">
                                  <img
                                    alt="image"
                                    draggable="false"
                                    loading="lazy"
                                    width="50"
                                    height="50"
                                    decoding="async"
                                    data-nimg="1"
                                    className="style-943"
                                    src="https://cdn.10minuteschool.com/images/Landing_page/avatars/av_boy1.png"
                                  />
                                </div>
                              </div>
                              <div className="style-944">
                                <h3 className="style-945">
                                  {item.userName.bn}
                                </h3>
                                <p className="style-946">
                                  {item.designation.bn}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="style-1082">
              <div className="style-1083">
                <h2 className="style-1084">
                  {true ? "How Do You Make Payment?" : "যেভাবে পেমেন্ট করবেন"}{" "}
                </h2>
                <div className="style-1085">
                  <p className="style-1086">
                    {true
                      ? "Click this video if you want to learn how to pay"
                      : ""}{" "}
                    <span role="button" className="style-1087">
                      <a href="/">{true ? "Watch this video" : ""}</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="style-1088">
              <div className="style-1089">
                <div className="style-1090">
                  <div className="style-1091">
                    <h2 className="style-1092">
                      {true ? "Common Question" : ""}
                    </h2>
                    <div className="style-1093">
                      <div className="style-1094">
                        {info.commonQuestion
                          .slice(0, `${syllabus}`)
                          .map((item, i) => (
                            <details key={i} open="" className="style-1095">
                              <summary className="style-1096">
                                <h3 className="style-1097">
                                  {item.question.bn}
                                </h3>
                              </summary>
                              <div className="style-1098">
                                <div className="style-1099">
                                  {item.answer.bn}
                                </div>
                              </div>
                            </details>
                          ))}
                      </div>
                      <button
                        onClick={() =>
                          syllabus == 3
                            ? setSyllabus(info.commonQuestion.length)
                            : setSyllabus(3)
                        }
                        className="style-1120"
                      >
                        সকল প্রশ্ন-উত্তর{" "}
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="18"
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          className="style-1121"
                        >
                          <polyline
                            points="6 9 12 15 18 9"
                            className="style-1122"
                          ></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="style-1088">
              <div className="style-1089">
                <div className="style-1090">
                  <div className="style-1091">
                    <h2 className="style-1092">{true ? "FAQ" : ""}</h2>
                    <div className="style-1093">
                      <div className="style-1094">
                        {info.faq.slice(0, `${syllabus}`).map((item, i) => (
                          <details key={i} open="" className="style-1095">
                            <summary className="style-1096">
                              <h3 className="style-1097">{item.question.bn}</h3>
                            </summary>
                            <div className="style-1098">
                              <div className="style-1099">{item.answer.bn}</div>
                            </div>
                          </details>
                        ))}
                      </div>
                      <button
                        onClick={() =>
                          syllabus == 3
                            ? setSyllabus(info.faq.length)
                            : setSyllabus(3)
                        }
                        className="style-1120"
                      >
                        সকল প্রশ্ন-উত্তর{" "}
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="18"
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          className="style-1121"
                        >
                          <polyline
                            points="6 9 12 15 18 9"
                            className="style-1122"
                          ></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="style-1123">
              <div className="style-1124">
                <div className="style-1125">
                  <div className="style-1126">
                    {pageName == "abacus_student" && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "20px",
                          marginTop: "50px",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
                            border: "1px solid rgba(0,0,0,0.1)",
                          }}
                        >
                          <img src="/images/play_nursery.jpg" />
                          <div
                            style={{
                              padding: "10px 10%",
                              fontSize: "16px",
                              lineHeight: "22px",
                              textAlign: "center",
                              backgroundColor: "#efefef",
                              fontWeight: "900",
                            }}
                          >
                            <p>
                              Package 1: Brain Math Abacus (Play & Nursery) +
                              Abacus Kit
                            </p>
                          </div>
                          <a target="_blank" href="/abacus-purchase">
                            {" "}
                            <div className="style-1155">ক্রয় করুন</div>
                          </a>
                        </div>
                        <div
                          style={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
                            border: "1px solid rgba(0,0,0,0.1)",
                          }}
                        >
                          <img src="/images/Level-1.jpg" />
                          <div
                            style={{
                              padding: "10px 10%",
                              fontSize: "16px",
                              lineHeight: "22px",
                              textAlign: "center",
                              backgroundColor: "#efefef",
                              fontWeight: "900",
                            }}
                          >
                            <p>
                              Package 2: Brain Math Abacus (Level 1) + Abacus
                              Kit
                            </p>
                          </div>
                          <a target="_blank" href="/abacus-purchase">
                            {" "}
                            <div className="style-1155">ক্রয় করুন</div>
                          </a>
                        </div>
                      </div>
                    )}
                    {pageName == "abacus_teacher" && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "20px",
                          marginTop: "50px",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
                            border: "1px solid rgba(0,0,0,0.1)",
                          }}
                        >
                          <img src="/images/play_nursery.jpg" />
                          <div
                            style={{
                              padding: "10px 10%",
                              fontSize: "16px",
                              lineHeight: "22px",
                              textAlign: "center",
                              backgroundColor: "#efefef",
                              fontWeight: "900",
                            }}
                          >
                            <p>
                              Package 1: Brain Math Abacus (Play & Nursery) +
                              Abacus Kit
                            </p>
                          </div>
                          <a target="_blank" href="/abacus-purchase">
                            {" "}
                            <div className="style-1155">ক্রয় করুন</div>
                          </a>
                        </div>
                        <div
                          style={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
                            border: "1px solid rgba(0,0,0,0.1)",
                          }}
                        >
                          <img src="/images/Level-1.jpg" />
                          <div
                            style={{
                              padding: "10px 10%",
                              fontSize: "16px",
                              lineHeight: "22px",
                              textAlign: "center",
                              backgroundColor: "#efefef",
                              fontWeight: "900",
                            }}
                          >
                            <p>
                              Package 2: Brain Math Abacus (Level 1) + Abacus
                              Kit
                            </p>
                          </div>
                          <a target="_blank" href="/abacus-purchase">
                            {" "}
                            <div className="style-1155">ক্রয় করুন</div>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="style-1135">
          <div className="style-1136">
            <section className="style-1137">
              <div className="style-1138">
                <div className="style-1139">
                  <div className="style-1140">
                    {/* <iframe
                      width="853"
                      height="480"
                      src="https://www.youtube.com/embed/8D5zaUHi02U?si=BxqopKv_HVxW2keL"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                      title="Embedded youtube"
                      __idm_id__="245761"
                      className="style-1141"
                    ></iframe> */}
                    <Image width={398} height={306} src={info.imageLink} />
                  </div>

                  <div className="style-1145">
                    <div className="style-1146">
                      <div className="style-1147"></div>
                    </div>
                    <div className="style-1148">
                      <div className="style-1149">
                        <div className="style-1150">
                          <div className="style-1151">
                            <div className="style-1152">
                              Registration: {info.coursePrice.registration.tk}{" "}
                              Taka <br />
                              <span style={{ color: "red", fontSize: "16px" }}>
                                (প্রবাসীদের জন্য:{" "}
                                {info.coursePrice.registration.us} US Dollar)
                              </span>
                              <br />
                            </div>

                            <div className="style-1152">
                              Monthly: {info.coursePrice.monthly.tk} Taka <br />
                              <span style={{ color: "red", fontSize: "16px" }}>
                                (প্রবাসীদের জন্য: {info.coursePrice.monthly.us}{" "}
                                US Dollar)
                              </span>
                              <br />
                            </div>
                            <div className="style-1152">
                              Class Time: {info.coursePrice.time.heading.bn}
                              <br />
                              <span style={{ color: "red", fontSize: "16px" }}>
                                (Schedule: {info.coursePrice.time.text.bn})
                              </span>
                              <br />
                            </div>
                          </div>
                        </div>
                        <div className="style-1154"></div>
                      </div>
                      <div className="style-1155">
                        <EnrollCondition courseCode={info.courseCode} />
                      </div>
                    </div>
                  </div>
                  <div className="style-1156">
                    {info.courseInfo.map((item, i) => (
                      <div key={i} className="style-1157">
                        <div className="style-1158">
                          <div className="style-1159">
                            <img
                              alt="icon"
                              draggable="false"
                              loading="lazy"
                              style={{ width: "20px", height: "20px" }}
                              decoding="async"
                              data-nimg="1"
                              className="style-1160"
                              src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/subject.png"
                            />
                          </div>
                          <h4 className="style-1161">{item.title.bn}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="style-1187">
                  <span className="style-1188">
                    এটি সম্পর্কে বিস্তারিত জানতে
                  </span>
                  <span className="style-1189">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="style-1190"
                    >
                      <path
                        d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                        className="style-1191"
                      ></path>
                    </svg>{" "}
                    <span className="style-1192">
                      ফোন করুন (+880) -1674- 040502 নম্বরে
                    </span>
                  </span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default AbacusCourse;
