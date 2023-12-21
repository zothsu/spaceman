# Project Planning 

## WIREFRAMING

[https://www.canva.com/](https://www.canva.com/design/DAF24Vo06aw/D_7EHH3YyJ_Zhe1gILqWAA/edit?utm_content=DAF24Vo06aw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## PSUEDOCODE

### Initialize the game
- Set **guessedLetters** to an empty array
- Define a list of words to choose from ( **wordList** arr)
    - Set **secretWord** to a randomly chosen **wordList** from array
- Set **maxAttempts** to the maximum number of incorrect guesses allowed (6)
- Set **currentAttemps** to 0

### Begin game play:
- Render game
- Display the rules of the game, next page
- Display topic choices and present "START GAME" btn
- Display the Spaceman graphic
- Display the current state of **secretWord** with MARGIN BOTTOM on unguessed letters
- Display the number of attempts left

#### Active game play

1. Ask the player to guess a letter
2. Check if the letter has already been guessed
    - If YES, inform the player and continue to next iteration
    - If NO, add the letter to the list of guessed letters
        
3. Check if the guessed letter is in the selected word
    - If YES, update the current state of the word with the guessed letter(s)
    - If NO, decrement the number of attempts left and update the hangman graphic
        
4. Check if all letters in the word have been guessed correctly
    - If YES, display a victory message and end the game
    - If NO, Check if the player has run out of attempts
        - If YES, display a defeat message and end the game
        - If NO, return to step 1 and REPEAT


## HTML/CSS

Need grid
3 columns, 1 row
1st column needs to be divided to accommodate for 27 letter
2nd column needs vertical text aligned center
3rd column needs a .box to contain our background photo (will need to have function that changes photo upon getting correct word)
1st row will contain 6 letter work ( separated into 6 items)


---


## Project Requirements

### Presentation

You will have 10 minutes to present your project following these guidelines:

- Introduce your game 
    - Paraphrase the README.
- Launch the game 
    - **click the link in the README**.
- Play the game! 
    - If necessary, manipulate the values of variables in the console to ensure a quick win or loss.
- **Show/discuss your code:**
    - Briefly show the HTML & CSS. 
	- Show the JavaScript and discuss your favorite function.
- **Share the experience:**
    - What was your biggest challenge?
	- What are your key learnings/takeaways?
- **Q & A + Feedback**

### Technical Requirements

[x] **Render a game in the browser**.

[x] **Include win/loss logic and render win/loss messages in HTML.**

[x] Include separate HTML, CSS & JavaScript files.

[x] Use vanilla JavaScript, not jQuery.

[x] Have **properly indented HTML, CSS & JavaScript**. 

> In addition, vertical whitespace needs to be consistent.

[_] No remaining **unused and/or commented out code** (code that will never be called)

[x] Have functions and variables that are named sensibly. Remember, functions are typically named as verbs and variables (data) named as nouns.

[_] **Be coded in a consistent** manner. For example, choose between your preference for function declarations vs. function expressions.

[x] **Be deployed online** using GitHub Pages so that the rest of the world can play your game!

---