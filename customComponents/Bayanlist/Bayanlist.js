"use client";

import { useState, useEffect } from "react";
import { selectData } from "@/apiservices/widgetapiservices";

import "./Bayanlist.css";

function BayanList() {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        widgetName: "majlis_music",
      });
      const res2 = await selectData({
        activeStatus: "active",
        widgetName: "majlis_music_two",
      });
      const res3 = await selectData({
        activeStatus: "active",
        widgetName: "majlis_music_three",
      });

      if (res.status == "Alhamdulillah") {
        setData(res.data[0]);
        setData2(res2.data[0]);
        setData3(res3.data[0]);
      } else {
        mytoast.danger("Data fetching error. Try Refreshing the page");
      }
    }
    getData();
  }, []);

  if (data && data2 && data3) {
    return (
      <div class="Bayanlist">
        <div class="style-1">
          <div class="style-2">
            <div class="style-3">
              <div class="style-4">
                <div class="style-5">
                  <div class="style-6">
                    <span class="style-7">
                      <i className="fa fa-wifi" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 class="style-8">Hazrat Wala R.A. Majalis</h1>
          <div class="style-9">
            <div class="style-10">
              <div class="style-11">
                <strong class="style-12">Bayanaat</strong>Bayanaat of Shaikh ul
                Arab wal Ajam
                <br class="style-13" />
                Arif Billah Mujaddid-e-Zamana Hazrat Maulana
                <br class="style-14" />
                Shah Hakeem Muhammad Akhtar Sahib R.A
                <strong class="style-15">Muhammad Akhtar</strong>
              </div>
            </div>
          </div>
          <ul class="style-16">
            {data.widgetPayload.map((item) => (
              <li class="style-17">
                <a href={item.link} class="style-18">
                  {item.title}
                </a>
                <div class="style-19">
                  <span class="style-20">({item.date})</span>
                  <a
                    class="style-21"
                    href={item.downloadLink}
                    target="_blank"
                    download=""
                  >
                    <span class="style-22">
                      <i className="fa fa-download" />
                    </span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div class="style-65">
            <a href="/bayanaat/waiz/hazrat-wala-ra" class="style-66">
              View More
            </a>
          </div>
        </div>
        <div class="style-67">
          <div class="style-68">
            <div class="style-69">
              <div class="style-70">
                <div class="style-71">
                  <span class="style-72">
                    <i className="fa fa-clock-o" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h1 class="style-73">Bayanaat</h1>
          <div class="style-74">
            <div class="style-75">
              <div class="style-76">
                <strong class="style-77">Bayanaat</strong>Bayanaat of Hazrat
                Aqdas Shah
                <br class="style-78" />
                <strong class="style-79">Feroz Abdullah Memon</strong>Feroz
                Abdullah Memon Sahib D.B
              </div>
            </div>
          </div>
          <ul class="style-80">
            {data2.widgetPayload.map((item) => (
              <li class="style-81">
                <a href={item.link} class="style-82">
                  {item.title}
                </a>
                <div class="style-83">
                  <span class="style-84">({item.date})</span>
                  <a
                    class="style-85"
                    href={item.downloadLink}
                    target="_blank"
                    download=""
                  >
                    <span class="style-86">
                      <i className="fa fa-download" />
                    </span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div class="style-129">
            <a href="/bayanaat/category/bayan" class="style-130">
              View More
            </a>
          </div>
        </div>
        <div class="style-131">
          <div class="style-132">
            <div class="style-133">
              <div class="style-134">
                <div class="style-135">
                  <span class="style-136">
                    <i className="fa fa-whatsapp" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h1 class="style-137">Majalis</h1>
          <div class="style-138">
            <div class="style-139">
              <div class="style-140">
                <strong class="style-141">Majalis</strong>Majalis of Hazrat
                Aqdas Shah
                <br class="style-142" />
                <strong class="style-143">Feroz Abdullah Memon</strong>Feroz
                Abdullah Memon Sahib D.B
              </div>
            </div>
          </div>
          <ul class="style-144">
            {data3.widgetPayload.map((item) => (
              <li class="style-145">
                <a href={item.link} class="style-146">
                  {item.title}
                </a>
                <div class="style-147">
                  <span class="style-148">({item.date})</span>
                  <a
                    class="style-149"
                    href={item.downloadLink}
                    target="_blank"
                    download=""
                  >
                    <span class="style-150">
                      <i className="fa fa-download" />
                    </span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div class="style-193">
            <a href="/bayanaat/category/majalis" class="style-194">
              View More
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading ... </div>;
  }
}

export default BayanList;
