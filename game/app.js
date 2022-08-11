import { words } from './words.js';

let word = '';
let word_space = document.querySelector('.word');
let check = document.querySelector('.check');
let points = document.querySelectorAll('.points');
let stars = document.querySelectorAll('.stars');

let lives = document.querySelectorAll('.life');
let livesArray = Array.from(lives);

let modal = document.querySelector('.modal')
let secretWord = document.querySelector('.secret-word');

let restart = document.querySelector('.restart')

function findWord() {
  // computer choses secret word
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (word.includes('-'));
  return word;
}
word = findWord();
console.log(word);

function newWord() {
  setTimeout(function () {
    check.innerHTML = '<i class="fa-solid fa-question"></i>';
    word_space.classList.remove('border-red', 'border-green');
    check.classList.remove('button-red', 'button-green');
    word_space.value = "";
  }, 2000);
}


var noPoints = 0;
function compareWord() {
  // compare the word with the  secret word
  // return a boolean
  if (word_space.value == word) {
    points.forEach(function (point) {
      point.textContent = parseInt(point.textContent) + 10;
      noPoints = parseInt(point.textContent);
    });
    if (noPoints % 100 === 0) {
      stars.forEach(function (star) {
        star.textContent = parseInt(star.textContent) + 1;
      });
    }
  check.innerHTML = '<i class="fa-solid fa-check"></i>';
  word_space.classList.add('border-green');
  check.classList.add('button-green');
    word = findWord();
    console.log(word);
  }
  else {
    check.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    word_space.classList.add('border-red');
    check.classList.add('button-red');
    manageLives();
  }
  newWord();
}

check.addEventListener('click', compareWord)

let count = livesArray.length - 1;
function manageLives() {
  // if comparing the words gives false, lives decreases by 01
  // color of live changes to grey
  // if lives = 0, gameover()
  console.log(count);

  if (count >= 0) {
    livesArray[count].classList.add("lost");
    count--;
  }
  if (count < 0) {
    gameOver();
  }
}
function gameOver() {
  // game over
  // modal open with you lost written on it and a button to restart game or go back to welcome page
  // on click restart game, the page reloads
  secretWord.textContent = word;
  modal.classList.add('show');
}

restart.addEventListener('click', function () {
  location.reload();
});
