var body = document.body;

var questionNum = 1;

var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var h3El = document.createElement("h3");

var btnEL = document.createElement("button");

var startCountDown = countDown();



/*
FOR LOOP THIS
      <div class="row align-items-start hidden" id="question1">
        <div class="col">
          <h3 id="questionaire1">1 ) What is the supreme law of the land?</h3>
          <ul id="answerslist1">
            <li data-correct="false">The Supreme Court</li>
            <li data-correct="false">The Vice President</li>
            <li data-correct="false">The Army</li>
            <li data-correct="true">The Constitution</li>
          </ul>
        </div>
      </div>
*/

function QuestionList() {

    const questions = [
      {
        question: "What does the constution do?",
        answer: ["Sets up the goverment", "blue", "red", "white"],
        correctAnswer: "Sets up the goverment",
      },
      {
        question: "What does the constution do?",
        answer: ["Sets up the goverment", "blue", "red", "white"],
        correctAnswer: "Sets up the goverment",
      },
      {
        question: "What does the constution do?",
        answer: ["Sets up the goverment", "blue", "red", "white"],
        correctAnswer: "Sets up the goverment",
      },
    ] = props;
  
    for (let i = 0; i < questionList; i++) {
      {questions.map(question => (
          <h2> {question}</h2>
      ))}
    }
  }

function countDown() {
  var counter = 30;
  counter--;
  var timer = document.getElementById("timer");
  timer.textContent = counter;
  if (counter === 0) {
    gameOver();
  }
}

//CARD
function questionCard({ questionList, answerList }) {
  return (
    <div className="container_questions">
      <h2 className="listOfQuestions"> Questions </h2>
      {questionList.map((questionDisplay) => (
        <ul>
          <a> Answer </a>
          <a> Answer </a>
          <a> Answer </a>
          <a> Answer </a>
        </ul>
      ))}
    </div>
  );
}
function gameOver() {
  console.log("Doneso!");
}
