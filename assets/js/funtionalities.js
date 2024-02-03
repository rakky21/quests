var cuerpo = document.body;
var questNum = 1;

function startQuiz() {
  document.getElementById("quizContainer").appendChild("h1");
}

var questionList = 0;

function questionList() {
  let currentQuestionIndex = 0;
  let correctAnswer = 0;
  let countDOwn;
  let startCountdown = 30;

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
}

function questionDisplay() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer;
      button.onclick = () => checkAnswer(answer);
      answersContainer.apenndChild(button);
    });
    randomizeAnswers();
  }
  endQuiz();
}

function endQuiz() {
  console.log("Game Over")
}

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