/*----- CONSTANTS/ FIXED VALUES, LOOKUP DATA STRUCTURES -----*/
const MAX_TRIES = 12;
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


/*----- CACHED ELEMENTS-----*/

// RENDER GREETING AND GAME PLAY FAQ ON START
const greetingMsgEl = document.getElementById('message')


//CAPTURE USER GUESS
const getAlphabetGuess = document.querySelector('#alphabet')


//DISPLAY CORRECTLY GUESSED LETTER
let displayCorrectGuessEl = document.getElementById('display-correct-guess');

//DISPLAY WORNG LETTER IN GRAVEYARD
const displayWrongGuessEl = document.getElementById('display-wrong-guess');

//REDER IMAGE OF SPACEMAN AFTER USER GUESS
const spacemanImgEl = document.getElementById('spaceman')

//initial state of greeting and then spaceman
spacemanImgEl.innerHTML = '<img src="/assets/img/spaceman-0.jpg" alt="image of astronaught in tractor beam">'
greetingMsgEl.innerHTML = '<p> Help the spaceman get out of the aliens teleportation beam before the aliens beam up his whole body!! Every wrong guess of the word transmits another part of his body. you only have 6 tries before his body is compleatly gone!!</p>'

//select a random word from WORDBANK
// Will need to replace SPACE with "category" choice from user


const getGuessResultEl = document.getElementById('getGuessResult')


/*----- STATE VARIABLES (DO NOT ASSIGN VALUES TO THEM - that will be done with the init function) -----*/
let secretWord;
let triesRemaining;
let guessedWrongLetters; //array to hold incorrect guesses to be displayed
let category = 'space' // change this on V2 to allow user to pick word categories

let outcome; // win or loose
let guessedWord; // display guessed word


/*----- EVENT LISTENERS -----*/
//START GAME
// document.querySelector('section > button').addEventListener('click', handlegameStart);

//Letter GUESS
getAlphabetGuess.addEventListener('click', handleLetterGuess);





/*----- FUNCTIONS -----*/
init();


function init() {
    triesRemaining = MAX_TRIES;
    guessedWrongLetters = [];
    // guessedCorrectLetters = BLANK_CHAR;
    secretWord =  WORD_LIST[category][Math.floor(Math.random() * WORD_LIST[category].length)].word.toUpperCase();
    answer = secretWord.split("")
    guessedWord = answer.map(letter => "_")
    render();
}

function renderDisplayCorrectGuesses() {
    displayCorrectGuessEl.innerHTML = guessedWord.join("")
    displayWrongGuessEl.innerHTML = " "
    guessedWrongLetters.forEach((letter) => {
        const wrongLetterEl = document.createElement('div')
        wrongLetterEl.textContent = letter
    })

}

function renderCheckWin() {
//stubbed
}

function handleLetterGuess(evt) {
    let guessedLetter = (evt.target.textContent)
    if (secretWord.includes(guessedLetter)) {
        answer.forEach((letter, iDx) => {
            if (guessedLetter === letter) {
                guessedWord[iDx] = letter
            }
        })
        
    } else {
        guessedWrongLetters.push(guessedLetter)
        
    }
    render()
}


function render() {
    renderDisplayCorrectGuesses()
    renderCheckWin();
}
