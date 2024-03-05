"use client";

import { useState, useEffect } from "react";
import { selectData } from "@/apiservices/widgetapiservices";

import "./AbacusSectionOne.css";
function AbacusSectionOne() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        widgetName: "abacus_page_sohoj_maddhom",
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
      <div class="abacusSecOne">
        <div class="abacusOneOverlay">
          <div class="style-1">
            <div class="style-2">
              <div class="style-3">
                <h2 class="style-4">{data.widgetPayload[0].title.en}</h2>
              </div>
              <div class="style-5">{data.widgetPayload[0].subTitle.en}</div>
            </div>
          </div>
          <div class="style-6">
            <div class="style-7">
              <a href={`${data.widgetPayload[0].card[0].link}`} class="style-8">
                <div class="style-9">
                  <div class="style-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="72"
                      height="72"
                      fill="none"
                      viewBox="0 0 72 72"
                      class="style-11"
                    >
                      <mask
                        width="72"
                        height="72"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        class="style-12"
                      >
                        <path
                          fill="#D9D9D9"
                          d="M0 0H72V72H0z"
                          class="style-13"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_9494_67788)" class="style-14">
                        <path
                          fill="#F0766A"
                          fill-rule="evenodd"
                          d="M36.678 17.245a3.936 3.936 0 100-7.872 3.936 3.936 0 000 7.872zm0 3.374a7.31 7.31 0 100-14.619 7.31 7.31 0 000 14.619z"
                          clip-rule="evenodd"
                          class="style-15"
                        ></path>
                        <path
                          fill="#F0766A"
                          d="M59.623 41.779a4.398 4.398 0 014.397 4.398v9.794c0 2.195-1.456 3.965-3.26 3.965a5.535 5.535 0 01-5.535-5.535v-8.224a4.398 4.398 0 014.398-4.398zM12.42 41.779a4.398 4.398 0 00-4.399 4.398v9.794c0 2.195 1.456 3.965 3.262 3.965a5.535 5.535 0 005.534-5.535v-8.224a4.398 4.398 0 00-4.398-4.398z"
                          class="style-16"
                        ></path>
                        <path
                          fill="#F79C89"
                          d="M58.052 26.748v33.527a5.553 5.553 0 01-5.553 5.553H19.524a5.553 5.553 0 01-5.553-5.553V26.749c0-7.652 6.202-13.854 13.853-13.854H44.2c7.651 0 13.853 6.202 13.853 13.854z"
                          class="style-17"
                        ></path>
                        <path
                          fill="#FFF5F5"
                          d="M52.981 42.904v14.474a2.554 2.554 0 01-2.554 2.555H21.613a2.554 2.554 0 01-2.554-2.554V42.904a2.554 2.554 0 012.554-2.555h28.814a2.554 2.554 0 012.554 2.555z"
                          class="style-18"
                        ></path>
                        <path
                          fill="#F79C89"
                          d="M48.309 45.397v.694a.432.432 0 01-.432.432H24.159a.432.432 0 01-.432-.432v-.694c0-.239.193-.432.432-.432h23.718c.238 0 .432.193.432.432z"
                          class="style-19"
                        ></path>
                        <path
                          fill="#F9FAFB"
                          d="M43.386 28.458c0 3.58-2.9 6.48-6.48 6.48-3.58 0-6.48-2.9-6.48-6.48 0-3.58 2.9-6.48 6.48-6.48 3.58 0 6.48 2.9 6.48 6.48z"
                          class="style-20"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div class="style-21">
                    <h2 class="style-22">
                      {data.widgetPayload[0].card[0].title.en}
                    </h2>
                    <p class="style-23">
                      {data.widgetPayload[0].card[0].subTitle.en}
                    </p>
                  </div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="style-24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline
                      points="9 18 15 12 9 6"
                      class="style-25"
                    ></polyline>
                  </svg>
                </div>
              </a>
              <a
                href={`${data.widgetPayload[0].card[1].link}`}
                class="style-26"
              >
                <div class="style-27">
                  <div class="style-28">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="72"
                      height="72"
                      fill="none"
                      viewBox="0 0 72 72"
                      class="style-29"
                    >
                      <path
                        fill="#EE7673"
                        d="M31.93 23.054a1.62 1.62 0 00-1.512-.782l-13.152 1.016a4.27 4.27 0 00-3.254 1.915l-5.52 8.348a2.946 2.946 0 00-.237 2.828 2.945 2.945 0 002.252 1.727l10.664 1.652a1.619 1.619 0 001.611-.728l9.124-14.273c.33-.517.34-1.176.025-1.703zM48.187 39.311a1.618 1.618 0 00-1.703.025l-14.272 9.123c-.54.345-.826.978-.728 1.611l1.652 10.665c.155 1 .8 1.843 1.726 2.252a2.951 2.951 0 002.828-.238l8.349-5.519a4.27 4.27 0 001.914-3.254l1.016-13.152a1.618 1.618 0 00-.782-1.513z"
                        class="style-30"
                      ></path>
                      <path
                        fill="#FFCD6B"
                        d="M28.81 52.483c.645.644 1.56.945 2.459.795 13.175-2.203 23.6-13.112 27.57-20.786 4.407-8.52 4.57-17.525 4.34-21.748a2.837 2.837 0 00-2.68-2.68c-4.223-.23-13.227-.066-21.748 4.34-7.674 3.97-18.582 14.396-20.785 27.571-.15.898.15 1.814.795 2.458l10.05 10.05z"
                        class="style-31"
                      ></path>
                      <path
                        fill="#FDC72E"
                        d="M9.652 53.526c.414 0 .828-.158 1.144-.474l5.284-5.284a1.618 1.618 0 00-2.289-2.29l-5.284 5.285a1.618 1.618 0 001.145 2.763zM20.922 50.322a1.619 1.619 0 00-2.29 0L8.475 60.48a1.618 1.618 0 102.289 2.29l10.159-10.16a1.618 1.618 0 000-2.288zM25.765 55.162a1.619 1.619 0 00-2.288 0l-5.284 5.284a1.618 1.618 0 102.288 2.29l5.284-5.285a1.618 1.618 0 000-2.289z"
                        class="style-32"
                      ></path>
                      <path
                        fill="#fff"
                        d="M45.842 20.549a4.84 4.84 0 00-3.434 1.42 4.823 4.823 0 00-1.422 3.433c0 1.297.506 2.516 1.422 3.433a4.86 4.86 0 006.867 0 4.824 4.824 0 001.422-3.433 4.823 4.823 0 00-1.422-3.434 4.84 4.84 0 00-3.433-1.42z"
                        class="style-33"
                      ></path>
                    </svg>
                  </div>
                  <div class="style-34">
                    <h2 class="style-35">
                      {data.widgetPayload[0].card[1].title.en}
                    </h2>
                    <p class="style-36">
                      {data.widgetPayload[0].card[1].subTitle.en}
                    </p>
                  </div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="style-37"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline
                      points="9 18 15 12 9 6"
                      class="style-38"
                    ></polyline>
                  </svg>
                </div>
              </a>
              <a
                href={`${data.widgetPayload[0].card[2].link}`}
                class="style-39"
              >
                <div class="style-40">
                  <div class="style-41">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="69"
                      height="40"
                      fill="none"
                      viewBox="0 0 69 40"
                      class="style-42"
                    >
                      <path
                        fill="#E0D6FF"
                        d="M33.998 39.99c-4.76 0-9.5-.687-13.346-1.935-4.413-1.432-6.65-3.246-6.65-5.391v-16.67c0-1.1.892-1.992 1.992-1.992h36.007c1.1 0 1.992.892 1.992 1.992v16.67c0 2.145-2.237 3.959-6.65 5.39-3.846 1.25-8.586 1.937-13.345 1.937zM61.313 33.284c-1.23 0-2.229-.414-2.229-.926V14.145c0-.511.998-.926 2.23-.926 1.23 0 2.229.415 2.229.926v18.213c0 .512-.998.926-2.23.926z"
                        class="style-43"
                      ></path>
                      <path
                        fill="#E0D6FF"
                        d="M61.222 34.32a4.001 4.001 0 100-8.002 4.001 4.001 0 000 8.002z"
                        class="style-44"
                      ></path>
                      <path
                        fill="#9875FF"
                        d="M34.004 26.657a1.99 1.99 0 01-.667-.116L1.329 15.162a1.992 1.992 0 01.004-3.755L33.341.114a1.991 1.991 0 011.326 0l32.008 11.293a1.992 1.992 0 01.004 3.755l-32.008 11.38a1.988 1.988 0 01-.667.115z"
                        class="style-45"
                      ></path>
                    </svg>
                  </div>
                  <div class="style-46">
                    <h2 class="style-47">
                      {data.widgetPayload[0].card[2].title.en}
                    </h2>
                    <p class="style-48">
                      {data.widgetPayload[0].card[2].subTitle.en}
                    </p>
                  </div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="style-49"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline
                      points="9 18 15 12 9 6"
                      class="style-50"
                    ></polyline>
                  </svg>
                </div>
              </a>
              <a
                href={`${data.widgetPayload[0].card[3].link}`}
                class="style-51"
              >
                <div class="style-52">
                  <div class="style-53">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="72"
                      height="72"
                      fill="none"
                      viewBox="0 0 72 72"
                      class="style-54"
                    >
                      <mask
                        width="72"
                        height="72"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        class="style-55"
                      >
                        <path
                          fill="#D9D9D9"
                          d="M0 0H72V72H0z"
                          class="style-56"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_9494_67832)" class="style-57">
                        <path
                          fill="#C7C6FD"
                          d="M61.327 38.303v20.391c0 1.545-1.82 2.798-4.067 2.798H14.74c-2.245 0-4.066-1.252-4.066-2.798V38.303c0-1.545 1.82-2.798 4.067-2.798h42.52c2.245 0 4.066 1.252 4.066 2.798z"
                          class="style-58"
                        ></path>
                        <path
                          fill="#6572EF"
                          d="M64.236 21.851v19.782a4.067 4.067 0 01-4.067 4.066H11.833a4.067 4.067 0 01-4.067-4.066V21.85a4.067 4.067 0 014.067-4.067h48.336a4.067 4.067 0 014.067 4.067z"
                          class="style-59"
                        ></path>
                        <path
                          fill="#6572EF"
                          d="M39.194 45.572v6.807a.456.456 0 01-.688.393l-2.251-1.33a.504.504 0 00-.51-.002l-2.304 1.34a.456.456 0 01-.685-.395v-6.813h6.438z"
                          class="style-60"
                        ></path>
                        <path
                          fill="#fff"
                          d="M41.187 43.434v4.587c0 .6-.486 1.086-1.086 1.086h-8.199c-.6 0-1.086-.486-1.086-1.086v-4.587c0-.6.487-1.086 1.086-1.086h8.2c.599 0 1.085.486 1.085 1.086z"
                          class="style-61"
                        ></path>
                        <path
                          fill="#C7C6FD"
                          d="M45.404 17.787h-3.253v-3.342a.69.69 0 00-.689-.689H30.538a.69.69 0 00-.689.689v3.342h-3.253V13.97a3.468 3.468 0 013.467-3.468h11.874a3.468 3.468 0 013.467 3.468v3.817z"
                          class="style-62"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div class="style-63">
                    <h2 class="style-64">
                      {data.widgetPayload[0].card[3].title.en}
                    </h2>
                    <p class="style-65">
                      {data.widgetPayload[0].card[3].subTitle.en}
                    </p>
                  </div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="style-66"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline
                      points="9 18 15 12 9 6"
                      class="style-67"
                    ></polyline>
                  </svg>
                </div>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AbacusSectionOne;
