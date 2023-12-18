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
//const WORD_LIST = moved to WORD_LIST.js
const BLANK_CHAR = " _ "
const GUESSED_CHAR = " "


//initial state of greeting and then spaceman
const spacemanImg = document.getElementById('spaceman')
spacemanImg.innerHTML = '<img src="" alt="image of astronaught in tractor beam">'
const greetingMsg = document.getElementById('spaceman')
greetingMsg.innerHTML = '<p> Help the spaceman get out of the aliens teleportation beam before the aliens beam up his whole body!! Every wrong guess of the word transmits another part of his body. you only have 6 tries before his body is compleatly gone!!</p>'





/*----- STATE VARIABLES (DO NOT ASSIGN VALUES TO THEM - that will be done with the init function) -----*/
let category = 'space'

// guesses left

/*----- CACHED ELEMENTS-----*/
//select a random word from WORDBANK
// Will need to replace SPACE with "category" choice from user
const secretWord = WORD_LIST[category][Math.floor(Math.random() * WORD_LIST[category].length)].word;
console.log(secretWord)
//guessed letters
const guessedLetters = [];

/*----- EVENT LISTENERS -----*/

/*----- functions -----*/
init()

// Initialize all state, then call render()
function init() {
    guessesLeft = 6;
  };