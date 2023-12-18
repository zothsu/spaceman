/*----- CONSTANTS/ FIXED VALUES, LOOKUP DATA STRUCTURES -----*/
const MAX_TRIES = 12;
//const WORD_LIST = 
const BLANK_CHAR = " _ "
const GUESSED_CHAR = " "


//initial state of greeting and then spaceman
const spacemanImg = document.getElementById('spaceman')
spacemanImg.innerHTML = '<img src="" alt="image of astronaught in tractor beam">'
const greetingMsg = document.getElementById('spaceman')
greetingMsg.innerHTML = '<p> Help the spaceman get out of the aliens teleportation beam before the aliens beam up his whole body!! Every wrong guess of the word transmits another part of his body. you only have 6 tries before his body is compleatly gone!!</p>'





/*----- STATE VARIABLES (DO NOT ASSIGN VALUES TO THEM - that will be done with the init function) -----*/
  //select a random word from WORDBANK
  const secretWord = secretWords[Math.floor(Math.random() * (words.length +1))];

  //guessed letters
  const guessedLetters = [];

  // guesses left
  let guessesLeft;

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
init()

// Initialize all state, then call render()
function init() {
    guessesLeft = 6;
  };