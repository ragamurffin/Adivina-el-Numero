'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 6;
// console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  const displayMesagge = function (message) {
    document.querySelector('.message').textContent = message;
  };
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Numero';
  } else if (guess === secretNumber) {
    // When players wins
    document.querySelector('.message').textContent = '🎉 Numero Correcto';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    if ((score = 0)) {
      document.querySelector('.again').textContent = again;
    }

    // When guest is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Muy Alto' : '📉 Muy Bajo';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 Tu Perdiste el Juego';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When the number is too hight
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too Hight';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lose The Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // When the number is too low
  // else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = '📉 Too Low';
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lose The Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

const again = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Empieza a Adivinar...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
