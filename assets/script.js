

var body = document.body;
var questnum = 1
// for loop?
var h1El = document.createElement('h1');
h1El.textContent = "Press the button when you are ready to start the challenge!";
h1El.setAttribute('style', 'margin:8rem auto; width:75%; text-align:center');
document.querySelector(".container").appendChild(h1El);

var btnEl = document.createElement('button');
btnEl.textContent = "Begin";
btnEl.setAttribute('style', 'width:10%; background:#0000FF; text-align:center; margin: auto;  color:#FFD700;');
document.querySelector(".container").appendChild(btnEl);
btnEl.addEventListener('click', startGame)
// var startBtn = document.getElementById("startBtn");
// startBtn.addEventListener("click",startGame)
function startGame() {
  startCountdown = setInterval(countdown, 1000);
  btnEl.classList.add("hidden")
  h1El.classList.add("hidden")
  document.querySelector("#question"+questnum).classList.remove('hidden')
}

var h2El = document.createElement('h2');
h2El.textContent = "High Score List:";
h2El.setAttribute('style', 'margin:25px; width:100%; text-align:center;');
h2El.classList.add("hidden")
body.appendChild(h2El);


// set seconds to minutes
var counter = 60
var startCountdown;
var countdown = function () {
  counter--;
  var timer = document.getElementById("timer");
  timer.textContent = counter
  if (counter === 0) {
   gameOver()
  };
};

document.querySelectorAll("li").forEach(function(li){
  li.addEventListener("click", changeQuestions)
})

function changeQuestions (event) {
  // check if answer is correct
  var correct = event.target.dataset.correct
  console.log(correct)
  // if false take 10 secs.
  if(correct === "false"){
    counter = counter - 10
    var timer = document.getElementById("timer");
    timer.textContent = counter
  }
  document.querySelector("#question"+questnum).classList.add('hidden')
  questnum++
  // check if there's a question 
  if(questnum === 100) {
  gameOver()
  } else {
  document.querySelector("#question"+questnum).classList.remove('hidden')
}
}

function gameOver(){
// highscore
clearInterval(startCountdown);
document.querySelector("#question"+questnum).classList.remove('hidden')

}
