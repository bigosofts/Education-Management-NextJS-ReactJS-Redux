import "./quiz.css";
import AbacusPlay from "@/app/(withoutMenu)/content/abacusplay/page";

function QuizApp() {
  return (
    <div className="wrapperQuiz">
      <div className="style-3">
        <h2 className="style-4">{true ? "Practice kit" : "প্র্যাকটিস করুন"}</h2>
      </div>
      <div id="quiz">
        <AbacusPlay />
      </div>
    </div>
  );
}

export default QuizApp;
