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


//initial state of spaceman
const spacemanImg = document.getElementById('spaceman')
spacemanImg.innerHTML = '<img src="" alt="image of astronaught in tractor beam">'





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