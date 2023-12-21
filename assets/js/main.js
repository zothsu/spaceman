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


/*----- STATE VARIABLES (DO NOT ASSIGN VALUES TO THEM - that will be done with the init function) -----*/
let secretWord;
let category;
let triesRemaining;
let guessedWrongLetters; 
let guessedWord; 
let outcome; 
let secretHint;

/*----- CACHED ELEMENTS-----*/
const getAlphabetGuess = document.querySelector('#alphabet')
const spacemanImgEl = document.getElementById('spaceman')
const msgEl = document.getElementById('message')
let displayCorrectGuessEl = document.getElementById('display-correct-guess');
let displayWrongGuessEl = document.getElementById('display-wrong-guess');
let categoryEl = document.getElementById('category')
const restartBtn = document.getElementById('play-again')
let hint = document.getElementById('hint')



/*----- EVENT LISTENERS -----*/
getAlphabetGuess.addEventListener('click', handleLetterGuess);
categoryEl.addEventListener('change', init);
restartBtn.addEventListener('click', init);
hint.addEventListener('click', handleHint)


/*----- FUNCTIONS -----*/
init();

function handleHint() {
    hint.innerHTML = secretHint
}

function init(evt) {
    triesRemaining = MAX_TRIES;
    guessedWrongLetters = [];
    hint.innerHTML = "Hint"
    category = categoryEl.value;
    let categoryIdx = Math.floor(Math.random() * WORD_LIST[category].length)
    secretWord =  WORD_LIST[category][categoryIdx].word.toUpperCase();
    secretHint =  WORD_LIST[category][categoryIdx].hint;
    answer = secretWord.split("")
    guessedWord = answer.map(letter => "_ &nbsp")
    outcome = null;
    render();
}

function renderDisplayCorrectGuesses() {
    displayCorrectGuessEl.innerHTML = guessedWord.join("")
    displayWrongGuessEl.innerHTML = " "
    guessedWrongLetters.forEach((letter) => {
        let wrongLetterEl = document.createElement('div')
        wrongLetterEl.innerHTML = letter
        displayWrongGuessEl.appendChild(wrongLetterEl)
    })
}


function renderCheckWin() {
    if (guessedWrongLetters.length === MAX_TRIES) {
        outcome = "L"
        msgEl.textContent = "Oh no! The Aliens have teleported them away! Better luck next time!" 
    } else if (secretWord === guessedWord.join("")) {
        msgEl.textContent = "You have saved the Astronaught! Congratulations!"
        outcome = "W"
    } else if (guessedWrongLetters.length === 5) {
        msgEl.textContent = "A head is really the most important part!"
    } else if (guessedWrongLetters.length === 4) {
        msgEl.textContent = "Okay just one arm.."
    } else if (guessedWrongLetters.length === 3) {
        msgEl.textContent = "Gah! Well at least they still have arms!"
    } else if (guessedWrongLetters.length === 2) {
        msgEl.textContent = "Okay, a wheel chair"
    } else if (guessedWrongLetters.length === 1) {
        msgEl.textContent = "Well I suppose they could get a peg leg"
    } else {
        msgEl.textContent = "Help the Astronaught get out of the aliens teleportation beam before the aliens beam up their whole body!! You only have six tries!"
    }
}

function handleLetterGuess(evt) {
    let guessedLetter = (evt.target.textContent)
    if (outcome || evt.target.tagName !== "BUTTON" || guessedWrongLetters.includes(guessedLetter) || guessedWord.includes(guessedLetter)) return
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
    if (outcome) {
        restartBtn.style.visibility = "visible"
    } else {
        restartBtn.style.visibility = "hidden"
    }
}