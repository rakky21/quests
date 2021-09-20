var body = document.body;

// for loop?
var h1El = document.createElement('h1');
h1El.textContent = "Press the button when you are ready to start the challenge!";
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center');
body.appendChild(h1El);

var btnEl = document.createElement('button');
btnEl.textContent = "Begin";
btnEl.setAttribute('style', 'width:5%;background:#0000FF; color:#FFD700');
body.appendChild(btnEl);
btnEl.addEventListener('click', startGame)
// var startBtn = document.getElementById("startBtn");
// startBtn.addEventListener("click",startGame)
function startGame() {
  startCountdown = setInterval(countdown, 1000);
}

var h2El = document.createElement('h2');
h2El.textContent = "High Score List:";
h2El.setAttribute('style', 'margin:25px; width:100%; text-align:center;');
body.appendChild(h2El);

// set seconds to minutes
var counter = 10//600
var startCountdown;
var countdown = function () {

  counter--;
  var timer = document.getElementById("timer");
  timer.textContent = counter
  if (counter === 0) {
    clearInterval(startCountdown);
  };
};


var score = 0;

for (var i = 0; i < questions.length; i++) {

  var ul = questionslist
  var ol = answerslist

  var startQuestions;
  var questions = function () {
    
    ul++;
    var questionslist = document.getElementById("questone");
    questionslist.textContent = ul
    if (ul === firstanswer) {
      score++;
      alert('corect!');
    } else {
      ('Wrong!');
    }
  }
  function startGame() {
    startQuestions = setInterval(quests);
  }
}

// // FINISH when it reaches 0 = give total score.
// // if wrong then subtract from the total time.
// // function to check if right if not subtract.
// var correctanswer = ['']
// // var questions = [
// //   { question: :li1 },
// //   { questtwoEl: li2 },
// //   { questthreeEl: li1 },
// //   { questfourEl: li2 },
// //   { questfiveEl: li1 }
// // ];
// var questions = [
// { q: 'This is the first question', answers: 'option 1' , 'option 2' , 'option 3'},

// function questions() {

// }

// // Loop over every question object
// for (var i = 0; i < questions.length; i++) {
//   // Display current question to user and ask OK/Cancel
//   var answer = confirm(questions[i].q);

//   // Compare answers
//   if (
//     (answer === true && questions[i].a === 't') ||
//     (answer === false && questions[i].a === 'f')
//   ) {
//     // Increase score
//     score++;
//     // Alert the user
//     alert('Correct!');
//   } else {
//     alert('Wrong!');
//   }
// }


// // // TRUE OR FALSE IF THEN.QUESTIONS 
// alert('You got' + score + '/' + questions);
// // QUESTION 1
// var questoneEl = document.createElement('div');
// var listEl = document.createElement('ol');
// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// var li3 = document.createElement('li');

// questoneEl.textContent = 'Questions 1:';
// li1.textContent = 'Answer 1';
// li2.textContent = 'Answer 2';
// li3.textContent = 'Answer 3';

// questoneEl.setAttribute('style', 'front-size:20px');
// listEl.setAttribute('style', 'position: center');

// body.appendChild(questoneEl);
// questoneEl.appendChild(listEl);
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);


// // QUESTION 2
// var infoEl = document.createElement('div');
// var listEl = document.createElement('ol');
// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// var li3 = document.createElement('li');

// // QUESTION 3
// var infoEl = document.createElement('div');
// var listEl = document.createElement('ol');
// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// var li3 = document.createElement('li');

// // QUESTION 4
// var infoEl = document.createElement('div');
// var listEl = document.createElement('ol');
// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// var li3 = document.createElement('li');

// // QUESTION 5
// var infoEl = document.createElement('div');
// var listEl = document.createElement('ol');
// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// var li3 = document.createElement('li');

// how to make it a-c instead of true or false??? possibilities?
// manual + Dom

// var questions = [
//   { q: 'Q1', c:["1","2","3"], a: '3' },
//   { q: 'Q2', a: 't' },
//   { q: 'Q3', a: 'f' },
//   { q: 'Q4', a: 'f' },
//   { q: 'Q5', a: 'f' },
// // second part?
//   { q: 'Q6', a: 't' },
//   { q: 'Q7', a: 't' },
//   { q: 'Q8', a: 'f' },
//   { q: 'Q9', a: 'f' },
//   { q: 'Q10', a: 'f' }
// ];


// storage scores
// localStorage.setItem('sample1', 'sample2');


// // RESULTS!!!
// // alert ('You got'+ results +'/' +questions.lenth);
// var totalQuestions = 

// if (currentQuestion === totalQuestions){
//   var results = sumValue()
//   alert(results);
// }else
// (currentQuestion);