// Variables
var userScore = 0;
var computerScore = 0;

// Choosing elements
var userScoreSpan = document.querySelector('.user-score');
var computerScoreSpan = document.querySelector('.computer-score');
var resultText = document.querySelector('.result');
var userChoiceSpan = document.querySelector('.user-choice-span');
var computerChoiceSpan = document.querySelector('.computer-choice-span');
var resetInput = document.querySelector('.reset-input')
var rockDiv = document.querySelector('.hand-rock');
var paperDiv = document.querySelector('.hand-paper');
var scissorsDiv = document.querySelector('.hand-scissors');

var main = function () {
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

var game = function (userChoice) {
  var computerChoice = getComputerChoice();

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

var getComputerChoice = function () {
  var choices = ["r", "p", "s"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

var writeInWords = function (letter) {
  if(letter === 'r') {
    return 'Tosh';
  } else if (letter === 'p') {
    return `Qog'oz`;
  } else if (letter === 's') {
    return 'Qaychi';
  }
}

var draw = function (user, computer) {
  computerScoreSpan.textContent = computerScore;
  userScoreSpan.textContent = userScore;
  userChoiceSpan.textContent = writeInWords(user);
  computerChoiceSpan.textContent = writeInWords(computer);
  resultText.textContent = 'Teng';
  resultText.classList.remove('text-success');
  resultText.classList.remove('text-info');
  resultText.classList.add('text-warning');
}

var win = function (user, computer) {
  userScore++;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  userChoiceSpan.textContent = writeInWords(user);
  computerChoiceSpan.textContent = writeInWords(computer);
  resultText.textContent = 'Siz yutdingiz!';
  resultText.classList.remove('text-info');
  resultText.classList.remove('text-warning');
  resultText.classList.add('text-success');
}

var lose = function (user, computer) {
  computerScore++;
  computerScoreSpan.textContent = computerScore;
  userScoreSpan.textContent = userScore;
  userChoiceSpan.textContent = writeInWords(user);
  computerChoiceSpan.textContent = writeInWords(computer);
  resultText.textContent = 'Siz yutqazdingiz (';
  resultText.classList.remove('text-success');
  resultText.classList.remove('text-warning');
  resultText.classList.add('text-info');
}

// Reset the values
resetInput.addEventListener('click', function () {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  userChoiceSpan.textContent = 'User';
  computerChoiceSpan.textContent = 'Computer';
  resultText.textContent = `O'yinni boshlaymizmi? :)`;
  resultText.classList.remove('text-success');
  resultText.classList.remove('text-info');
  resultText.classList.remove('text-warning');
});
