# Project Planning 

## WIREFRAMING

[https://www.canva.com/](https://www.canva.com/design/DAF24Vo06aw/D_7EHH3YyJ_Zhe1gILqWAA/edit?utm_content=DAF24Vo06aw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## PSUEDOCODE

### Initialize the game
- Set **guessedLetters** to an empty array
- Define a list of words to choose from ( **wordList** arr)
    - Set **secretWord** to a randomly chosen **wordList** from array
- Set **maxAttempts** to the maximum number of incorrect guesses allowed (12)
- Set **currentAttemps** to 0


Implement the main game loop: Create a loop that runs until the game ends. Within this loop, prompt the player for their guess, update the game state, and display the current progress.

Create a dictionary of words: Make a list of words to be used as answers in the game. You can choose to store them directly in your code or read them from an external file.

Randomly select a word: Use a random number generator to select a word from your dictionary for each game session.

Check the player's guess: Compare the player's guess with the selected word, and update the game state accordingly. Keep track of correct and incorrect guesses, as well as the number of attempts remaining.

Display the game progress: Show the player's progress by revealing correctly guessed letters and displaying the Hangman figure corresponding to incorrect guesses.

Determine game end conditions: Decide on the conditions for ending the game, such as correct guessing of the word or running out of attempts. Display an appropriate message indicating whether the player won or lost.

Add replay option: After the game ends, ask the player if they want to play again. If yes, restart the game loop; otherwise, exit the progr


### Begin game play:
- Initialize game
- Display the rules of the game, next page
- Display topic choices and present "START GAME" btn
- Display the Spaceman graphic
- Display the current state of **secretWord** with MARGIN BOTTOM on unguessed letters
- Display the number of attempts left

## Active game play

### Repeat until the game is over:
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


### End the game:

- Ask the player if they want to play again
    - If yes, go back to Initialize the game
    - If no, exit the program


## HTML/CSS

Need grid
3 columns, 1 row
1st column needs to be divided to accommodate for 27 letter
2nd column needs vertical text aligned center
3rd column needs a .box to contain our background photo (will need to have function that changes photo upon getting correct word)
1st row will contain 6 letter work ( separated into 6 items)




## Overview

Your first SEI project will start out with something fun - **a game!**

Thanks to the amount of logic there is in a game, there's no better app than a game to teach you how to **think like a programmer**!

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges**.  You got your feet wet with our game code-alongs during class - now it's time to pick a game and go for it.

**You will be working individually for this project**. However, your instructors and instructor assistants will be available for support via the support channel in Slack.  Please be sure to provide the details of the issue you are having - screenshots and relevant code are very helpful.

As a reminder, GA has a zero plagiarism policy - your project's code **must be substantially yours**. **Do not copy code from similar projects, tutorials, or other sources**.  However, using  lines of code from  StackOverflow to accomplish general techniques/algorithms is okay - an example would be using StackOverflow as a source for code that replaces a character at a certain position in a string. 

---

## Planning & Presentation Requirements

### Presentation - Friday Morning, 12/22/23:

You will have 10 minutes to present your project following these guidelines:

1. **Introduce the Project:**

	☐ Intro your game by paraphrasing the README.
	
2. **Demonstrate the Project:**

	☐ Launch the game by clicking the link in the README.
	
	☐ Play the game! If necessary, manipulate the values of variables in the console to ensure a quick win or loss.
	
3. **Show/discuss your code:**

	☐ Briefly show the HTML & CSS. 
	
	☐ Show the JavaScript and discuss your favorite function.

4. **Share the experience:**

	☐ What was your biggest challenge?
	
	☐ What are your key learnings/takeaways?
	
5. **Q & A + Feedback**

---

## Technical Requirements

### Your App Must:

☐ **Render a game in the browser**.

☐ **Include win/loss logic and render win/loss messages in HTML.** Popup alerts using the `alert()` method are okay during development, but not production.

☐ Include separate HTML, CSS & JavaScript files.

☐ Use vanilla JavaScript, not jQuery.

☐ Have **properly indented HTML, CSS & JavaScript**. In addition, vertical whitespace needs to be consistent.

☐ No remaining **unused and/or commented out code** (code that will never be called) .

☐ Have functions and variables that are named sensibly. Remember, functions are typically named as verbs and variables (data) named as nouns.

☐ **Be coded in a consistent** manner. For example, choose between your preference for function declarations vs. function expressions.

☐ **Be deployed online** using GitHub Pages so that the rest of the world can play your game!

---

## Necessary Deliverables

☐ The code for **a working game that meets or exceeds the above technical requirements, built by you, and hosted on GitHub Pages** (covered next week).

- **A ``README.md`` file** with these sections:

  ☐ **\<Your game's title\>**: A description of your game.  Background info of the game is a nice touch.
  
  ☐ **Screenshot(s):** Images of your actual game.
  
  ☐ **Technologies Used**: List of the technologies used, e.g., JavaScript, HTML, CSS...
  
  ☐ **Getting Started**: In this section include the link to your deployed game and any instructions you deem important. 
  
  ☐ **Next Steps**: Planned future enhancements (icebox items).
  
  > Note: Don't underestimate the value of a well crafted `README.md`. The `README.md` introduces your project to prospective employers and forms their first impression of your work!

☐ **Frequent commits (at least 1 every day) dating back to the very beginning of the project**. Never delete you repo to "start over".  Commit messages should be in the present tense, e.g., "Style game board" instead of "Styled game board". **Be sure to create the repo on your personal GitHub account and ensure that it is "public".** 

---

## Suggestions

- **The BEST advice is to follow the guidelines and principles in the** [Guide to Building a Browser App](https://gist.github.com/jim-clark/6f1919291f6007b2c0b2c93d925d6bac). The guide will give you a step-by-step process to get you started and its MVC design pattern will result in clearer, more concise code that can scale functionality more easily.
- **Theme your game** to give it a more personal touch and make it more unique!
- **Use your Development Tools** (Chrome DevTools rock!) to debug and solve issues.
- Keep it simple. Minimum Viable Product (MVP) functionality that looks great is better than extra functionality added to a game without polish.
- If you choose a card-based game, there is a CSS library in the _resources_ directory of the class repo that will help you render **beautiful** cards of any size, front and back.
- Review and check regularly the [Project 1 Code Review](./project-1-code-review.pdf) to ensure that your project is going to meet the minimum requirements.
- **Consult documentation and other resources** to better understand methods, etc.
- Write **DRY (Don't Repeat Yourself)** code. Check for repeating code and refactor into functions that accept arguments.

---