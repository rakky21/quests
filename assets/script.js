var body = document.body;
var questnum = 1;
// for loop?
var h1El = document.createElement("h1");
h1El.textContent =
  "Press the button when you are ready to start the challenge!";
document.querySelector(".container").appendChild(h1El);

var btnEl = document.createElement("button");
btnEl.textContent = "Begin";
btnEl.classList.add("row");
btnEl.setAttribute(
  "style", 
  "width:15%; margin:auto; text-align:center; width:15%; background:#0000FF; justify-content:center ;text-align:center; margin: auto;  color:#FFD700;"
);
document.querySelector(".container").appendChild(btnEl);
btnEl.addEventListener("click", startGame);


// START GAME
function startGame() {
  startCountdown = setInterval(countdown, 1000);
  btnEl.classList.add("hidden");
  h1El.classList.add("hidden");
  document.querySelector("#question" + questnum).classList.remove("hidden");
}


// HIGH SCORE
var h2El = document.createElement("h2");
h2El.textContent = "High Score List:";
// h2El.setAttribute("style", "margin:25px; width:100%; text-align:center;");
h2El.classList.add("hidden");
body.appendChild(h2El);

// set seconds to minutes
var counter = 60;
var startCountdown;
var countdown = function () {
  counter--;
  var timer = document.getElementById("timer");
  timer.textContent = counter;
  if (counter === 0) {
    gameOver();
  }
};

document.querySelectorAll("li").forEach(function (li) {
  li.addEventListener("click", changeQuestions);
});

function changeQuestions(event) {
  // check if answer is correct
  var correct = event.target.dataset.correct;
  console.log(correct);
  // if false take 10 secs.
  if (correct === "false") {
    counter = counter - 15;
    var timer = document.getElementById("timer");
    timer.textContent = counter;
  }
  document.querySelector("#question" + questnum).classList.add("hidden");
  questnum++;
  // check if there's a question
  if (questnum === 10) {
    console.log("You've answer all questions. Please enter your name score.");
    var h1EReset = document.createElement("h1");

    h1El.textContent =
      "You've answer all questions. Please enter your name for your final score.";
    document.querySelector(".container").appendChild(h1El);
  } else if (counter <= 0) {
    var h1El = document.createElement("h1");
    h1El.textContent =
      "You've missed too many questions. Please try again and press start when you're ready.";
    document.querySelector(".container").appendChild(h1El);
    console.log("Please try again.");
  // CHANGETOPROPER
  var btnE2 = document.createElement("button");
  btnE2.classList.add("row");

  btnE2.textContent = "Retry";
  btnE2.setAttribute(
    "style",
    "width:10%; background:#0000FF; text-align:center; margin: auto;  color:#FFD700;"
  );
  document.querySelector(".container").appendChild(btnE2);
  btnE2.addEventListener("click", startGame);
} else {
  document.querySelector("#question" + questnum).classList.remove("hidden");
}
}
// WHEN RESET. IT NEEDS TO GO BACK TO THE BEGINNING NOT GENERATE A NEW QUESTIONS WITHOUT RESET

function gameOver() {
  // highscore
  clearInterval(startCountdown);
  document.querySelector("#question" + questnum).classList.remove("hidden");
  document.querySelector(questnum).classList.remove("hidden");
}

function resetQuestions() {
  clearInterval(startCountdown);
  clearInterval(startGame);
  console.log("Done");
}
