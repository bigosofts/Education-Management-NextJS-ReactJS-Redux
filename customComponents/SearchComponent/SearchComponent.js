"use client";
import { useRef, useState, useEffect } from "react";

import { selectData } from "@/apiservices/resultapiservices";

function SearchComponent(props) {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
      });
      setData(res.data);
    }
    getData();
  }, []);

  function uniqueMarhalaArray(old) {
    const modifiedArray = old.map((item) => item.marhala);
    const uniqueNamesSet = new Set(modifiedArray);
    const uniqueNamesArray = Array.from(uniqueNamesSet);
    return uniqueNamesArray;
  }
  function uniquePassingYearArray(old) {
    const modifiedArray = old.map((item) => item.passingYear);
    const uniqueNamesSet = new Set(modifiedArray);
    const uniqueNamesArray = Array.from(uniqueNamesSet);
    return uniqueNamesArray;
  }
 

  const resultRollNoref = useRef();
  const marhalaref = useRef();
  const passingYearref = useRef();

  function createSearchParams() {
    const hardRefreshCustom = (link) => {
      if (typeof window !== "undefined") {
        window.location.href = link;
      }
    };
    const resultRollNo = resultRollNoref.current.value;
    const marhala =
      marhalaref.current.value == "Select Marhala"
        ? ""
        : marhalaref.current.value;
    const passingYear =
      passingYearref.current.value == "Select Passing Year"
        ? ""
        : passingYearref.current.value;
    hardRefreshCustom(
      `/result?roll=${resultRollNo}&marhala=${marhala}&passingYear=${passingYear}`
    );
  }

  if (data) {
    return (
      <div
        style={{ marginTop: "0px" }}
        id="search-front"
        className="section-front"
      >
        <section id="hero">
          <div className="container">
            <div className="searchwrapper">
              <div className="searchbox">
                <div className="row">
                  <div className="col-md-5">
                    <input
                      ref={resultRollNoref}
                      type="number"
                      className="form-control"
                      placeholder="Enter Roll Number"
                    />
                  </div>
                  <div className="col-md-3">
                    <select ref={marhalaref} className="form-control category">
                      <option>Select Marhala</option>
                      {uniqueMarhalaArray(data).map((item, i) => (
                        <option key={i}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select ref={passingYearref} className="form-control category">
                      <option>Select Passing Year</option>
                      {uniquePassingYearArray(data).map((item, i) => (
                        <option key={i}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-1">
                    <input
                      onClick={createSearchParams}
                      type="button"
                      className="btn btn-primary"
                      value="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SearchComponent;
