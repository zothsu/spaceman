/*----- constants -----*/
//word bank
const secretWords = [
  'comets',
  'planet',
  'rocket',
  'nebula',
  'galaxy',
  'cosmic',
  'meteor',
  'orbital',
  'cosmos',
  'saturn',
  'quasar',
];

//select a random word from WORDBANK
const secretWord = secretWords[Math.floor(Math.random() * (words.length +1))];


//initial state of greeting and then spaceman
const spacemanImg = document.getElementById('spaceman')
spacemanImg.innerHTML = '<img src="" alt="image of astronaught in tractor beam">'
const greetingMsg = document.getElementById('spaceman')
greetingMsg.innerHTML = '<p> Help the spaceman get out of the aliens teleportation beam before the aliens beam up his whole body!! Every wrong guess of the word transmits another part of his body. you only have 6 tries before his body is compleatly gone!!</p>'





/*----- app's state (variables) -----*/
//guessed words
const guessedLetters = [];

// guesses left
const guessesLeft = [];

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
init()

// Initialize all state, then call render()
function init() {
    //stubbed up
  };