import "./quiz.css";

function QuizApp() {
  return (
    <div class="wrapperQuiz">
      <div class="style-3">
        <h2 class="style-4">{true ? "Practice kit" : "প্র্যাকটিস করুন"}</h2>
      </div>
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
