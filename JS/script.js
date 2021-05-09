'use strict';
 
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoretext = document.querySelector('.score');
const check = document.querySelector('.check');

let score = 20;
const RandomNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = RandomNumber;

check.addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No number!';
  } else if (guess === RandomNumber) {
      message.textContent = 'Correct Number!';
  } else if (guess !== RandomNumber) {
    if (score > 1) {
        message.textContent = (guess > RandomNumber) ? 'Too high': 'Too low';
        score--;
        scoretext.textContent = score;
    } else {
        message.textContent = 'You lost the game!';
    }    
  }
});
