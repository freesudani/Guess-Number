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

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem'; 

      if(score > highscore) {
        highscore = score;
        document.querySelector(.'highscore').textContent = highscore;
      }

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


again.addEventListener('click' , function() {
  score = 20;
  RandomNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  scoretext.textContent = score;
  number.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width = '15rem'; 
});