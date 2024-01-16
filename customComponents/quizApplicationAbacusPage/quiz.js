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
       
        <iframe
          style={{ position: "unset", height: "420px", width: "100%" }}
          src="/abacusplay"
          title="description"
        ></iframe>
        
      </div>
    </div>
  );
}

export default QuizApp;
