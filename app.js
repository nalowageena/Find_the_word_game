import { words } from './words.js';
let word = '';
function findWord() {
  // computer choses secret word
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (word.includes('-'));
  console.log(word);
}
findWord();
let keys = document.querySelectorAll('.key');
function disableBtns(keys) {
  // disables keys

  keys.forEach(function (key) {
    // first disable all keys without a char
    if (key.innerHTML == '') {
      key.disabled = true;
      key.style.backgroundColor = '#c28cdd';
    }
    // now disable all keys which the computer does not select
  });
}
disableBtns(keys);
let inputs = document.querySelector('.letter');
let alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
function writeChar(key) {
  // on click key, writes char in input text
  key.addEventListener('click', function () {
    if (alphabets.includes(key.innerHTML) && inputs.value == '') {
      inputs.value = key.innerHTML;
      console.log(inputs.value);
    }
    if (key.classList.contains('backspace')) {
      inputs.value = '';
    }
  });
  // check that letter is valid
}
keys.forEach(writeChar);

function compareWord() {
  // compare the word with the  secret word
  // return a boolean
}
function manageLives() {
  // if comparing the words gives false, lives decreases by 01
  // color of live changes to grey
  // if lives = 0, gameover()
}
function gameOver() {
  // game over
}
