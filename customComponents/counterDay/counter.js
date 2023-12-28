"use client";
import { useState, useEffect } from "react";
import "./counter.css";

function Counter() {
  useEffect(() => {
    import("./counterCustom.js");
  }, []);
  return (
    <div className="CounterContWrap">
      <h1
        className="counterContainer"
        data-text="The next semester is about to start ..."
      >
        The next semester is about to start ...
      </h1>
      <div className="countDownContainer">
        <div id="countdown">
          <div id="tiles"></div>
          <div class="labels">
            <li>Days</li>
            <li>Hours</li>
            <li>Mins</li>
            <li>Secs</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
