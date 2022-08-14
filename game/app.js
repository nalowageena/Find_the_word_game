import { words } from './words.js';

let word = '';
const word_space = document.querySelector('.word');
const check = document.querySelector('.check');
const points = document.querySelectorAll('.points');
const stars = document.querySelectorAll('.stars');

const lives = document.querySelectorAll('.life');
let livesArray = Array.from(lives);

const modal = document.querySelector('.modal');
const hintModal = document.querySelector('.hintModal')


const secretWord = document.querySelector('.secret-word');

const restart = document.querySelectorAll('.restart');

const hint = document.querySelector('.hint');

const hintStmt = document.querySelector('.hint-stmt')

function findWord() {
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (word.includes('-'));
  return word;
}

const definition = document.querySelectorAll('.definition');
let definitions;

function loadDefinition() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word, true);

  request.onload = function () {
    // begin accessing data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      definitions = data[0].meanings[0].definitions;
      definition.forEach(function (def) {
        def.textContent = definitions[getRandomInt(definitions.length)].definition;
      });
    } else {
      console.log('error');
    }
  }
  request.send();
}

function newWord() {
  word = findWord();
  loadDefinition();
}

newWord();

function changeInputStyle() {
  setTimeout(function () {
    check.innerHTML = '<i class="fa-solid fa-question"></i>';
    word_space.classList.remove('border-red', 'border-green');
    check.classList.remove('button-red', 'button-green');
    word_space.value = "";
    word_space.disabled = false;
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
    if (noPoints % 50 === 0) {
      stars.forEach(function (star) {
        star.textContent = parseInt(star.textContent) + 1;
      });
    }
    check.innerHTML = '<i class="fa-solid fa-check"></i>';
    word_space.classList.add('border-green');
    check.classList.add('button-green');
    newWord();
  }
  else {
    check.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    word_space.classList.add('border-red');
    check.classList.add('button-red');
    manageLives();
  }
  word_space.disabled = true; 
  changeInputStyle();
}

check.addEventListener('click', compareWord)

let count = livesArray.length - 1;
function manageLives() {
  if (count >= 0) {
    livesArray[count].classList.add("lost");
    count--;
  }
  if (count < 0) {
    gameOver();
  }
}
function gameOver() {
  secretWord.textContent = word;
  modal.classList.add('show');
}

restart.forEach(res => {
  res.addEventListener('click', function () {
    location.reload();
  });
}); 

hint.addEventListener('click', function () {
  hintModal.classList.add('show');
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == hintModal) {
    hintModal.classList.remove('show');
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


let i = 1;
let j;
do {
  j = getRandomInt(word.length)+1;
} while (i == j);



function hint2() {
  let randomHint = word[i-1];
  hintStmt.innerHTML = 'Letter ' + i + ' of the secret word is <span class="secret-word">'+ randomHint+ '</span>'; 
}
function hint1() {
  hintStmt.innerHTML = 'The secret word is <span class="secret-word">'+ word.length+ '</span> characters long'; 
}
hint1();
function hint3() {
  let randomHint = word[j-1];
  hintStmt.innerHTML = 'Letter ' + j + ' of the secret word is <span class="secret-word">'+ randomHint+ '</span>'; 
}


const firstHint = document.querySelector('.firstHint');
const secondHint = document.querySelector('.secondHint');
const thirdHint = document.querySelector('.thirdHint');

firstHint.addEventListener('click', hint1);
secondHint.addEventListener('click', hint2);
thirdHint.addEventListener('click', hint3);