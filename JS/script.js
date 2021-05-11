'use strict';
 
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoretext = document.querySelector('.score');
const check = document.querySelector('.check');
const again = document.querySelector('.again');

let score = 20;
let RandomNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;


check.addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No number!';
  } else if (guess === RandomNumber) {
      message.textContent = 'Correct Number!';
      
      number.textContent = RandomNumber;

      document.querySelector('body').style.backgroundImage = 'linear-gradient(rgba(96, 179, 71, 0.95),rgba(96, 179, 71, 0.85)), url(../Images/pay-1036469_1920.jpg)';

      document.querySelector('.number').style.width = '30rem'; 

      if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

  } else if (guess !== RandomNumber) {
    if (score > 1) {
        message.textContent = (guess - RandomNumber > 0) ? 'high': 'Low';
        score--;
        scoretext.textContent = score;
    } else {
        message.textContent = 'You lost the game!';
    }    
  }
});


again.addEventListener('click' , function() {
  score = 20;
  RandomNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  scoretext.textContent = score;
  number.textContent = '?';
  document.querySelector('body').style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.95),rgba(0, 0, 0, 0.85)), url(../Images/pay-1036469_1920.jpg)';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width = '15rem'; 
});