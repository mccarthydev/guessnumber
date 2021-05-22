'use strict';

let score = Number(document.querySelector('.score').textContent);
let guess;
let rdmNumber;
let highscore = 0;

const reset = function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  rdmNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(rdmNumber);
};

const message = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  guess = document.querySelector('.guess').value;

  if (score < 1) {
    message('You lost. Press "Again" to restart');
  } else if (
    document.querySelector('.message').textContent ===
    'Correct! Press "again" to restart'
  ) {
  } else if (score > 1) {
    if (guess > rdmNumber) {
      message('Too High');
      score--;
    } else if (guess < rdmNumber) {
      message('Too Low');
      score--;
    } else {
      message('Correct! Press "again" to restart');
      document.querySelector('body').style.backgroundColor = '#77dd76';
      document.querySelector('.number').textContent = rdmNumber;
      score++;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    }

    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  reset();
});

reset();
