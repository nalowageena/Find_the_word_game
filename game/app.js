import { words } from './words.js';

let word = '';
let word_space = document.querySelector('.word');
let check = document.querySelector('.check');
let points = document.querySelectorAll('.points');

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
    word_space.value = "";
  }, 3000);
}

function compareWord() {
  // compare the word with the  secret word
  // return a boolean
  if(word_space.value == word){
    points.forEach(function (point) {
      point.textContent = parseInt(point.textContent) + 10; 
    });
    check.innerHTML = '<i class="fa-solid fa-check"></i>';
    word = findWord();
    console.log(word);
  }
  else {
    check.innerHTML = '<i class="fa-solid fa-xmark"></i>';
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
  
  if (count>=0 && !livesArray[count].classList.contains("blue")) {
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
})