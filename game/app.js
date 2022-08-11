import { words } from './words.js';

let word = '';
let word_space = document.querySelector('.word');
let check = document.querySelector('.check');
let points = document.querySelector('.points');

let lives = document.querySelectorAll('live');

function findWord() {
  // computer choses secret word
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (word.includes('-'));
  return word;
}
word = findWord();
console.log(word);


function compareWord() {
  // compare the word with the  secret word
  // return a boolean
  if(word_space.value == word){
    points.textContent = parseInt(points.textContent) + 10; 
  }
  else manageLives();
}

check.addEventListener('click', compareWord)

function manageLives(word) {
  // if comparing the words gives false, lives decreases by 01
  // color of live changes to grey
  // if lives = 0, gameover()
}
function gameOver() {
  // game over
}
