"use client";
import "./AbacusCourses.css";
import { useState, useEffect } from "react";
import { selectData } from "@/apiservices/commentapiservice";

function AbacusCourse({ info }) {
  const [syllabus, setSyllabus] = useState(3);
  const [comment, setComment] = useState();
  useEffect(() => {
    async function getData() {
      const idArray = [];
      info.commentID.map((item) => {
        idArray.push(item);
      });

      const res = await selectData({
        activeStatus: "active",
        commentId: { $in: idArray },
      });
      if (res) {
        setComment(res.data);
      }
    }
    getData();
  }, []);
  if (comment) {
    return (
      <main class="abacusCourse">
        <div class="style-1">
          <div class="style-2">
            <h1 class="style-3">{info.title.en}</h1>
            <div class="style-4">{info.description.en}</div>
          </div>
          <div class="style-5">
            <div class="style-6">
              <div class="style-7"></div>
            </div>
            <div class="style-8"></div>
            <div class="style-9">
              <div class="style-10">
                <div class="style-11">
                  <h2 class="style-12">
                    {true ? "Course Instructors" : "কোর্স ইন্সট্রাক্টর"}
                  </h2>
                  <div class="style-13">
                    {info.instructor.map((item, i) => (
                      <div key={i} class="style-14">
                        <div class="style-15">
                          <div class="style-16">
                            <img
                              alt=""
                              draggable="false"
                              loading="lazy"
                              width="73"
                              height="73"
                              decoding="async"
                              data-nimg="1"
                              class="style-17"
                              src="/images/shaikh.png"
                            />
                          </div>
                        </div>
                        <div class="style-18">
                          <h3 class="style-19">{item.name}</h3>
                          <div class="style-20">{item.experience}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div class="style-135"></div>
            <div class="style-136"></div>
            <div class="style-506">
              <div class="style-507">
                <div class="style-508">
                  <div class="style-509">
                    <h2 class="style-510">
                      {true ? "Course Syllabus" : "কোর্স সিলেবাস"}
                    </h2>
                  </div>
                  <div class="style-511">
                    <div class="style-512">
                      {info.courseSyllabus
                        .slice(0, `${syllabus}`)
                        .map((item, i) => (
                          <details key={i} class="style-513">
                            <summary class="style-514">
                              <div class="style-515">
                                <img
                                  alt="Orientation Class"
                                  draggable="false"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  data-nimg="1"
                                  class="style-516"
                                  src="https://cdn.10minuteschool.com/images/icons/live_class.png"
                                />
                              </div>
                              <h3 class="style-517">{item.text.en}</h3>
                            </summary>
                            <div class="style-518">
                              <ul class="style-519">
                                <li class="style-520">
                                  <span class="style-521">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      class="style-522"
                                      height="24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                        class="style-523"
                                      ></path>
                                      <path
                                        d="M19 5v9h-5v5H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2zm-7 11H7v-2h5v2zm5-4H7V8h10v2z"
                                        class="style-524"
                                      ></path>
                                    </svg>
                                  </span>
                                  <div class="style-525">
                                    <h4 class="style-526">{item.desc.en}</h4>
                                    <div class="style-527">
                                      <img src={item.img} />
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </details>
                        ))}
                    </div>
                    <button
                      onClick={() =>
                        syllabus == 3
                          ? setSyllabus(info.courseSyllabus.length)
                          : setSyllabus(3)
                      }
                      class="style-852"
                    >
                      সকল বিষয়{" "}
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="18"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        class="style-853"
                      >
                        <polyline
                          points="6 9 12 15 18 9"
                          class="style-854"
                        ></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="style-855">
              <div class="style-856">
                <div class="style-857">
                  <h2 class="style-858">
                    {true ? "Course Details" : "কোর্স সম্পর্কে বিস্তারিত"}
                  </h2>
                  <div class="style-859">
                    {info.detailData.map((item, i) => (
                      <details key={i} open="" class="style-860">
                        <summary class="style-861">
                          <div class="style-862">
                            <h2 class="style-863">
                              <b class="style-864">{item.title.en}</b>
                            </h2>
                          </div>
                        </summary>
                        <div class="style-865">
                          <div class="style-866">
                            <p class="style-867">{item.desc.en}</p>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div class="style-908"></div>
            <div class="style-909"></div>
            <div class="style-910">
              <div class="style-911">
                <h2 class="style-912">
                  {true
                    ? "What Students Says About Us"
                    : "শিক্ষার্থীরা যা বলছে"}
                </h2>
                <div class="style-913">
                  <div class="style-914">
                    <div class="style-915">
                      <div class="style-916">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="32"
                          fill="none"
                          viewBox="0 0 33 32"
                          class="style-917"
                        >
                          <path
                            fill="#000"
                            fill-opacity="0.5"
                            fill-rule="evenodd"
                            d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                            clip-rule="evenodd"
                            class="style-918"
                          ></path>
                        </svg>
                      </div>
                      <div class="style-919">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="32"
                          fill="none"
                          viewBox="0 0 33 32"
                          class="style-920"
                        >
                          <path
                            fill="#000"
                            fill-opacity="0.5"
                            fill-rule="evenodd"
                            d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                            clip-rule="evenodd"
                            class="style-921"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="style-922">
                      {comment.map((item) => (
                        <div class="style-923">
                          <div class="style-924">
                            <div class="style-925">
                              <div class="style-926">
                                <div class="style-927">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    fill="none"
                                    viewBox="0 0 20 30"
                                    class="style-928"
                                  >
                                    <path
                                      fill="#D33242"
                                      d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                      class="style-929"
                                    ></path>
                                  </svg>
                                </div>
                                <div class="style-930">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    fill="none"
                                    viewBox="0 0 20 30"
                                    class="style-931"
                                  >
                                    <path
                                      fill="#D33242"
                                      d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                      class="style-932"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div class="style-933">
                                <div class="style-934">{item.comment.en}</div>
                                <div class="style-935">
                                  <p class="style-936">
                                    আরও দেখুন
                                    <span class="style-937">
                                      <svg
                                        width="11"
                                        height="7"
                                        viewBox="0 0 11 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="style-938"
                                      >
                                        <path
                                          d="M7.05279e-05 1.5C-0.000690498 1.36839 0.0245342 1.23793 0.0742988 1.11609C0.124063 0.994256 0.197391 0.88344 0.290071 0.79C0.383035 0.696271 0.493634 0.621877 0.615494 0.571108C0.737353 0.52034 0.868059 0.494201 1.00007 0.494201C1.13208 0.494201 1.26279 0.52034 1.38465 0.571108C1.50651 0.621877 1.61711 0.696271 1.71007 0.79L5.00007 4.1L8.31007 0.92C8.49743 0.733749 8.75089 0.629208 9.01507 0.629208C9.27926 0.629208 9.53271 0.733749 9.72007 0.92C9.8138 1.01296 9.88819 1.12356 9.93896 1.24542C9.98973 1.36728 10.0159 1.49799 10.0159 1.63C10.0159 1.76201 9.98973 1.89272 9.93896 2.01458C9.88819 2.13644 9.8138 2.24704 9.72007 2.34L5.72007 6.2C5.53314 6.38323 5.28182 6.48586 5.02007 6.48586C4.75832 6.48586 4.507 6.38323 4.32007 6.2L0.32007 2.2C0.223138 2.11024 0.144952 2.00217 0.0900268 1.88202C0.0351018 1.76187 0.004528 1.63203 7.05279e-05 1.5Z"
                                          fill="#1CAB55"
                                          class="style-939"
                                        ></path>
                                      </svg>
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="style-940">
                              <div class="style-941">
                                <div class="style-942">
                                  <img
                                    alt="image"
                                    draggable="false"
                                    loading="lazy"
                                    width="50"
                                    height="50"
                                    decoding="async"
                                    data-nimg="1"
                                    class="style-943"
                                    src="https://cdn.10minuteschool.com/images/Landing_page/avatars/av_boy1.png"
                                  />
                                </div>
                              </div>
                              <div class="style-944">
                                <h3 class="style-945">{item.userName.en}</h3>
                                <p class="style-946">{item.designation.en}</p>
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
            <div class="style-1067">
              <div class="style-1068">
                <div class="style-1069">
                  <div class="style-1070">
                    <h2 class="style-1071">
                      {true
                        ? "What Will You Need?"
                        : "ক্লাস করার জন্য প্রয়োজন হবে"}
                    </h2>
                    <div class="style-1072">
                      <ul class="style-1073">
                        {info.courseMaterial.map((item, i) => (
                          <li key={i} class="style-1074">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              class="style-1075"
                              height="24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                class="style-1076"
                              ></path>
                            </svg>
                            <h3 class="style-1077">{item.en}</h3>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="style-1082">
              <div class="style-1083">
                <h2 class="style-1084">
                  {true ? "How Do You Make Payment?" : "যেভাবে পেমেন্ট করবেন"}{" "}
                </h2>
                <div class="style-1085">
                  <p class="style-1086">
                    {true
                      ? "Click this video if you want to learn how to pay"
                      : ""}{" "}
                    <span role="button" class="style-1087">
                      <a href="/">{true ? "Watch this video" : ""}</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="style-1088">
              <div class="style-1089">
                <div class="style-1090">
                  <div class="style-1091">
                    <h2 class="style-1092">{true ? "Common Question" : ""}</h2>
                    <div class="style-1093">
                      <div class="style-1094">
                        {info.commonQuestion
                          .slice(0, `${syllabus}`)
                          .map((item, i) => (
                            <details key={i} open="" class="style-1095">
                              <summary class="style-1096">
                                <h3 class="style-1097">{item.question.en}</h3>
                              </summary>
                              <div class="style-1098">
                                <div class="style-1099">{item.answer.en}</div>
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
                        class="style-1120"
                      >
                        সকল প্রশ্ন-উত্তর{" "}
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="18"
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          class="style-1121"
                        >
                          <polyline
                            points="6 9 12 15 18 9"
                            class="style-1122"
                          ></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="style-1088">
              <div class="style-1089">
                <div class="style-1090">
                  <div class="style-1091">
                    <h2 class="style-1092">{true ? "FAQ" : ""}</h2>
                    <div class="style-1093">
                      <div class="style-1094">
                        {info.faq.slice(0, `${syllabus}`).map((item, i) => (
                          <details key={i} open="" class="style-1095">
                            <summary class="style-1096">
                              <h3 class="style-1097">{item.question.en}</h3>
                            </summary>
                            <div class="style-1098">
                              <div class="style-1099">{item.answer.en}</div>
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
                        class="style-1120"
                      >
                        সকল প্রশ্ন-উত্তর{" "}
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="18"
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          class="style-1121"
                        >
                          <polyline
                            points="6 9 12 15 18 9"
                            class="style-1122"
                          ></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section class="style-1123">
              <div class="style-1124">
                <div class="style-1125">
                  <div class="style-1126">
                    <h2 class="style-1127">
                      {true
                        ? "Do you have any question?"
                        : "আরও কোন জিজ্ঞাসা আছে?"}
                    </h2>
                    <div class="style-1128">
                      <a href="tel:16910" class="style-1129">
                        <div class="style-1130">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="none"
                            viewBox="0 0 29 28"
                            class="style-1131"
                          >
                            <path
                              stroke="#1CAB55"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.223"
                              d="M17.246 2.917a9.298 9.298 0 018.213 8.204M17.246 7.05a5.164 5.164 0 014.083 4.083"
                              class="style-1132"
                            ></path>
                            <path
                              stroke="#1CAB55"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.223"
                              d="M13.37 14.551c4.655 4.653 5.71-.73 8.673 2.231 2.857 2.856 4.5 3.428.88 7.047-.454.364-3.334 4.748-13.457-5.373C-.658 8.335 3.722 5.451 4.086 4.998c3.629-3.628 4.193-1.977 7.05.879 2.961 2.962-2.42 4.022 2.235 8.674z"
                              clip-rule="evenodd"
                              class="style-1133"
                            ></path>
                          </svg>
                          <h3 class="style-1134">
                            কল করুন (+880) -1674- 040502 নম্বরে
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="style-1135">
          <div class="style-1136">
            <section class="style-1137">
              <div class="style-1138">
                <div class="style-1139">
                  <div class="style-1140">
                    {/* <iframe
                      width="853"
                      height="480"
                      src="https://www.youtube.com/embed/8D5zaUHi02U?si=BxqopKv_HVxW2keL"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                      title="Embedded youtube"
                      __idm_id__="245761"
                      class="style-1141"
                    ></iframe> */}
                    <img src={info.imageLink}/>
                  </div>

                  <div class="style-1145">
                    <div class="style-1146">
                      <div class="style-1147"></div>
                    </div>
                    <div class="style-1148">
                      <div class="style-1149">
                        <div class="style-1150">
                          <div class="style-1151">
                            <div class="style-1152">
                              Registration: {info.coursePrice.registration.tk} Taka <br/> 
                              <span style={{color: "red", fontSize:"16px"}}>(Foreigner: {info.coursePrice.registration.us} US Dollar)</span>
                            </div>
                            <div class="style-1152">
                              Monthly: {info.coursePrice.monthly.tk} Taka <br/>
                              <span style={{color: "red", fontSize:"16px"}}>(Foreigner: {info.coursePrice.monthly.us} US Dollar)</span>
                            </div>
                          </div>
                        </div>
                        <div class="style-1154"></div>
                      </div>
                      <button class="style-1155">
                        <a href="/signup/madrasa-student/alem-alema">
                          {info.courseButton.text.en}
                        </a>
                      </button>
                    </div>
                  </div>
                  <div class="style-1156">
                    {info.courseInfo.map((item, i) => (
                      <div key={i} class="style-1157">
                        <div class="style-1158">
                          <div class="style-1159">
                            <img
                              alt="icon"
                              draggable="false"
                              loading="lazy"
                              width="20"
                              height="20"
                              decoding="async"
                              data-nimg="1"
                              class="style-1160"
                              src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/subject.png"
                            />
                          </div>
                          <h4 class="style-1161">{item.title.en}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p class="style-1187">
                  <span class="style-1188">
                    কোর্সটি সম্পর্কে বিস্তারিত জানতে
                  </span>
                  <span class="style-1189">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="style-1190"
                    >
                      <path
                        d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                        class="style-1191"
                      ></path>
                    </svg>{" "}
                    <span class="style-1192">
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
  } else {
    return <div>Loading...</div>;
  }
}

export default AbacusCourse;
