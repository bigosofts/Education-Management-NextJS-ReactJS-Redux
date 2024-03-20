"use client";
import { useEffect } from "react";
import "./quiz.css";

function QuizApp() {
  useEffect(() => {
    import("./quizCustom.js");
  }, []);
  return (
    <div class="wrapperQuiz">
      <div id="quiz">
        <h1>CSS Toggle Tutorial Part 1</h1>
        <iframe
          style={{ position: "unset", height: "420px", width: "100%" }}
          src="/abacusplay"
          title="description"
        ></iframe>
        <hr style={{ marginBottom: "30px" }} />
        <p id="question"></p>

        <div class="buttons">
          <button id="btn0">
            <span id="choice0"></span>
          </button>
          <button id="btn1">
            <span id="choice1"></span>
          </button>
          <button id="btn2">
            <span id="choice2"></span>
          </button>
          <button id="btn3">
            <span id="choice3"></span>
          </button>
        </div>
        <hr style={{ marginTop: "60px" }} />
        <footer>
          <p id="progress"></p>
        </footer>
      </div>
    </div>
  );
}

export default QuizApp;
