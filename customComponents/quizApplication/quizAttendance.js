"use client";

import "./quiz.css";

function QuizAttendance({ classSelection }) {
  function niceDate(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  function niceDateDay(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      day: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  function niceDateMonth(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      month: "long",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  let currentDate
  return (
    <div class="wrapperQuiz">
      <div id="quiz">
        <p id="question">আরবি ভাষার মূলভিত্তি কয়টি ?</p>

        <div class="buttons">
          <button id="btn0">
            <span id="choice0">১টি</span>
          </button>
          <button id="btn1">
            <span id="choice1">২টি</span>
          </button>
          <button id="btn2">
            <span id="choice2">৪টি</span>
          </button>
        </div>

        <footer>
          <p id="progress">
            <div className="progress-number">1</div> of{" "}
            <div className="progress-number">5</div>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default QuizAttendance;
