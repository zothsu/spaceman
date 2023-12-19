/*----- CONSTANTS/ FIXED VALUES, LOOKUP DATA STRUCTURES -----*/

const WORD_LIST = {
    space: [
        { word: "astronaut", hint: "A person who travels in space" },
        { word: "galaxy", hint: "A system of stars, dust, and gas held together by gravity" },
        { word: "asteroid", hint: "A small rocky object that orbits the Sun"},
        { word: "star", hint: "A luminous ball of gas that generates energy through nuclear fusion"},
        { word: "rocket", hint: "A vehicle that travels through space" },
        { word: "planet", hint: "A celestial body that orbits a star" },
        { word: "moon", hint: "A natural satellite that orbits a planet" }, 
        { word: "quasar", hint: "an extremely luminous and distant active galactic nucleus" },
    ],
    food: [
        { word: "pizza", hint: "A popular Italian dish with a round, flat base topped with various ingredients" },
        { word: "burger", hint: "A sandwich consisting of a cooked patty of ground meat" },
        { word: "sushi", hint: "A Japanese dish consisting of vinegared rice and various ingredients" },
        { word: "pasta", hint: "Italian food made from flour, water, and sometimes eggs" },
        { word: "ice cream", hint: "A frozen dessert made from dairy products and flavored with various ingredients" }
    ],
    games: [
        { word: "chess", hint: "A strategic board game for two players" },
        { word: "monopoly", hint: "A popular board game where players buy, sell, and trade properties" },
        { word: "jenga", hint: "A game where players take turns removing one block at a time from a tower and balancing it on top"},
        { word: "football", hint: "A team sport played with an oval-shaped ball" },
        { word: "tetris", hint: "A tile-matching puzzle video game" },
        { word: "scrabble", hint: "A word game where players score points by placing tiles with letters onto a board" }
        ]
    };
const MAX_TRIES = 12;
const BLANK_CHAR = " _ "




/*----- STATE VARIABLES (DO NOT ASSIGN VALUES TO THEM - that will be done with the init function) -----*/
let secretWord;
let triesRemaining;
let guessedWrongLetters; //array to hold incorrect guesses to be displayed
let guessedCorrectLetters = BLANK_CHAR;
let category = 'space' // change this on V2 to allow user to pick word categories




/*----- CACHED ELEMENTS-----*/

// RENDER GREETING AND GAME PLAY FAQ ON START
const greetingMsgEl = document.getElementById('message')

//DISPLAY WORD AREA ON START
const displayCorrectGuessesEl = document.getElementById('')

//CAPTURE USER GUESS
const getAlphabetGuess = document.querySelector('button.alphabet')


//DISPLAY CORRECTLY GUESSED LETTER
let displayCorrectGuessEl = document.querySelector('display-correct-guess');

//DISPLAY WORNG LETTER IN GRAVEYARD
const displayWrongGuessEl = document.querySelector('section#display-wrong-guess');

//REDER IMAGE OF SPACEMAN AFTER USER GUESS
const spacemanImgEl = document.getElementById('spaceman')



//initial state of greeting and then spaceman
spacemanImgEl.innerHTML = '<img src="/assets/img/spaceman-0.jpg" alt="image of astronaught in tractor beam">'
greetingMsgEl.innerHTML = '<p> Help the spaceman get out of the aliens teleportation beam before the aliens beam up his whole body!! Every wrong guess of the word transmits another part of his body. you only have 6 tries before his body is compleatly gone!!</p>'

//select a random word from WORDBANK
// Will need to replace SPACE with "category" choice from user

//guessed letters
const guessedLetters = [];

const getGuessResultEl = document.getElementById('getGuessResult')


/*----- EVENT LISTENERS -----*/

/*----- FUNCTIONS -----*/
init();


// Initialize all states && call render()
function init() {
    triesRemaining = MAX_TRIES;
    guessedWrongLetters = [];
    guessedCorrectLetters = BLANK_CHAR;
    secretWord =  WORD_LIST[category][Math.floor(Math.random() * WORD_LIST[category].length)].word;
    displayCorrectGuessEl = '_'.repeat(secretWord.length);
    render();
    }

function renderDisplayCorrectGuesses() {
//
}

function renderCheckWin() {
//
}


function render() {
    renderDisplayCorrectGuesses()
    renderCheckWin();
}
