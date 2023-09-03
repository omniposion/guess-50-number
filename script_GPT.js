'use strict';

let number = Math.round(Math.random() * 50) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  checkGuess();
});

// document.querySelector('.guess').addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     checkGuess();
//   }
// });

const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  if (!guess || guess > 50) {
    displayMessage('⛔ Not a valid number!');
  } else if (guess === number) {
    displayMessage('🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('☠ You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = score = 20;
  number = Math.round(Math.random() * 50) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkGuess();
  }
});

// write your problem down, write possible solutions to the problem and do research online, google, stackoverflow, mdn, chatgpt.
// just keep writing every step of the way, explaining the code, commenting, teaching yourself
// keep going, you will find your way, program yourself while programming
// get better at it, by commiting every day.
