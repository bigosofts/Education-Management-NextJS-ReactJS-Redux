"use client";
/*Object Constructor function for Question Object*/
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
};
/* End of Object Constructor function for Question Object */

/* Object Constructor function for Quiz Object */

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function (answer) {
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
};

/* end Object Constructor function for Quiz Object */

/*questions is an array where each element of this array is an object*/
var questions = [
  new Question("আরবি ভাষার মূলভিত্তি কয়টি ?", ["১টি", "২টি", "৪টি"], "৪টি"),
  new Question("আরবি ভাষার মূলভিত্তি কয়টি ?", ["১টি", "২টি", "৪টি"], "৪টি"),
  new Question("আরবি ভাষার মূলভিত্তি কয়টি ?", ["১টি", "২টি", "৪টি"], "৪টি"),
  new Question("আরবি ভাষার মূলভিত্তি কয়টি ?", ["১টি", "২টি", "৪টি"], "৪টি"),
  new Question("আরবি ভাষার মূলভিত্তি কয়টি ?", ["১টি", "২টি", "৪টি"], "৪টি"),
];

var quiz = new Quiz(questions); // Initialization of Quiz Constructor object by passing questions array

/*This function will populate the questions and choices through HTML DOM object methods*/
function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    //show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

populate(); //calling of populate function

//guess function  is use to accept user's answer and to check for its correctness
function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

// The function will show the progress of questions (eg. 1 of 5)
function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    '<div class="progress-number">' +
    currentQuestionNumber +
    "</div>" +
    " of " +
    '<div class="progress-number">' +
    quiz.questions.length +
    "</div>";
}

// This function will show result at the end of the quiz
function showScores() {
  var gameOver =
    "<h1>আলহামদুলিল্লাহ</h1><br/><h1>আপনার উত্তরগুলো গ্রহণ করা হয়েছে </h1>";
  gameOver +=
    "<h2 id='score' style='text-align:center;'>Your Score: " +
    quiz.score +
    "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOver;
}
