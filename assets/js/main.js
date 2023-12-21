/*----- CONSTANTS/ FIXED VALUES, LOOKUP DATA STRUCTURES -----*/
const MAX_TRIES = 6;
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
const getAlphabetGuess = document.querySelector('#alphabet')
const spacemanImgEl = document.getElementById('spaceman')
const msgEl = document.getElementById('message')


let displayCorrectGuessEl = document.getElementById('display-correct-guess');


let displayWrongGuessEl = document.getElementById('display-wrong-guess');

let categoryEl = document.getElementById('category')

//initial state of greeting and then spaceman
// spacemanImgEl.innerHTML = '<img src="/assets/img/spaceman-0.jpg" alt="image of astronaught in tractor beam">'
// greetingMsgEl.innerHTML = '<p> Help the spaceman get out of the aliens teleportation beam before the aliens beam up his whole body!! Every wrong guess of the word transmits another part of his body. you only have 6 tries before his body is compleatly gone!!</p>'


/*----- STATE VARIABLES (DO NOT ASSIGN VALUES TO THEM - that will be done with the init function) -----*/
let secretWord;
let triesRemaining;
let guessedWrongLetters; //array to hold incorrect guesses to be displayed
let category;// change this on V2 to allow user to pick word categories

let outcome; // win or loose
let guessedWord; // display guessed word


/*----- EVENT LISTENERS -----*/
getAlphabetGuess.addEventListener('click', handleLetterGuess);
categoryEl.addEventListener('change', init)




/*----- FUNCTIONS -----*/
init();


function init(evt) {
    triesRemaining = MAX_TRIES;
    guessedWrongLetters = [];
    category = categoryEl.value;
    console.log(category)
    secretWord =  WORD_LIST[category][Math.floor(Math.random() * WORD_LIST[category].length)].word.toUpperCase();
    answer = secretWord.split("")
    guessedWord = answer.map(letter => "_")
    render();
}

function renderDisplayCorrectGuesses() {
    displayCorrectGuessEl.innerHTML = guessedWord.join("")
    displayWrongGuessEl.innerHTML = " "
    guessedWrongLetters.forEach((letter) => {
        let wrongLetterEl = document.createElement('div')
        wrongLetterEl = document.createTextNode(letter)
        displayWrongGuessEl.appendChild(wrongLetterEl)
    })

}

function renderCheckWin() {
    if (guessedWrongLetters.length === MAX_TRIES) {
        msgEl.textContent = "You loose" 
    } else if (secretWord === guessedWord.join("")) {
        msgEl.textContent = "you win"
    }
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
    spacemanImgEl.src = `assets/img/spaceman-${guessedWrongLetters.length}.jpg`;

}
