import { words } from '../words.js';
let word = '';

let keys = document.querySelectorAll('.key');

let word_space = document.querySelector('.word');
let check = document.querySelector('.check');
let points = document.querySelector('.points');
let alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

function findWord() {
  // computer choses secret word
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (word.includes('-'));
  return word;
}
word = findWord();
console.log(word);

function createInput(word) {
  // let input = document.querySelector('.input');
  // let clonedInput;
  // for (let i = 0; i < word.length - 1; i++) {
  //   clonedInput = input.cloneNode(true);
  //   document.getElementById('word').appendChild(clonedInput);
  // }
}
createInput(word);

function disableBtns(keys) {
  // disables keys

  keys.forEach(function (key) {
    // first disable all keys without a char
    if (key.innerHTML == '') {
      key.disabled = true;
      key.style.backgroundColor = 'transparent';
    }
    // now disable all keys which the computer does not select
  });
}
disableBtns(keys);

function writeChar(key) {
  // on click key, writes char in input text
  key.addEventListener('click', function () {
    if (alphabets.includes(key.innerHTML)) {
      word_space.value += key.innerHTML;
      console.log(word_space.value);
    }
    if (key.classList.contains('backspace')) {
      word_space.value = word_space.value.slice(0, -1);
    }
  });
  // check that letter is valid
}
keys.forEach(writeChar);


check.addEventListener('click', compareWord)
function compareWord(word) {
  // compare the word with the  secret word
  // return a boolean
  if(word_space.value == word){
    points.innerHTML += 10; 
    console.log(points.innerHTML);
  }
  else return false;

}
function manageLives(word) {
  // if comparing the words gives false, lives decreases by 01
  // color of live changes to grey
  // if lives = 0, gameover()
}
function gameOver() {
  // game over
}
