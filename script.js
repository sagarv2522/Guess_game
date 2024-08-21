'use strict';

let screatNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//define a repeat function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// click the button check
document.querySelector('.check').addEventListener('click', function () {
  /* This is a function used to do action when an even occurs at click button */

  const guess = Number(document.querySelector('.guess').value);

  // No input is entered
  if (!guess) {
    displayMessage('Enter a Number');
  }
  // If out of range
  else if (guess > 20) {
    displayMessage('Hey! You are out of range. Choose between 1 to 20');
    document.querySelector('body').style.backgroundColor = '#bf9111';
  }
  // guess is correct
  else if (guess === screatNumber) {
    displayMessage('Congrats..! 🥳 Correct Answer');
    document.querySelector('.number').textContent = screatNumber;
    document.querySelector('body').style.backgroundColor = '#399418';
    document.querySelector('.number').style.width = '40rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //guess is wrong
  else if (guess !== screatNumber) {
    if (score > 1) {
      displayMessage(
        guess < screatNumber
          ? 'Oopps..! Your guess is low 😥'
          : 'Oopps..! Your guess is high 🫥'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Great Try Buddy 😄, but You loss');
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#ba2d1a';
    }
  }
});

// click the button again
document.querySelector('.again').addEventListener('click', function () {
  screatNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing.....!');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = highscore;
});
