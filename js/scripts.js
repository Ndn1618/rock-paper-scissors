// Variables
var userScore = 0;
var computerScore = 0;

// Choosing elements
var userScoreSpan = document.querySelector('.user-score');
var computerScoreSpan = document.querySelector('.computer-score');
var resultText = document.querySelector('.result');
var rockDiv = document.querySelector('.hand-rock');
var paperDiv = document.querySelector('.hand-paper');
var scissorsDiv = document.querySelector('.hand-scissors');

function getComputerChoice () {
  var choices = ["r", "p", "s"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer) {
  userScore++;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
}

function lose(user, computer) {

}

function draw(user, computer) {

}

function game (userChoice) {
  var computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);

  if (userChoice === computerChoice) {
    draw(userChoice, computerChoice);
  }
  else if (userChoice + computerChoice === 'rs' || userChoice + computerChoice === 'pr' || userChoice + computerChoice === 'sp') {
    win(userChoice, computerChoice);
  }
  else if (userChoice + computerChoice === 'rp' || userChoice + computerChoice === 'ps' || userChoice + computerChoice === 'sr') {
    lose(userChoice, computerChoice);
  }
}

function main () {
  rockDiv.addEventListener('click', function () {
    game('r');
  });
  paperDiv.addEventListener('click', function () {
    game('p');
  });
  scissorsDiv.addEventListener('click', function () {
    game('s');
  });
}

main();
