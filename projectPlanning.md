# Project Planning 

## PSUEDOCODE

### Initialize the game
Set secretWord to a randomly chosen word from array
Set maxAttempts to the maximum number of incorrect guesses allowed
Set attempts to 0
Set guessedLetters to an empty list


### Main game loop
While attempts < maxAttempts:
    // Display game information
    Display the current state of the spaceman
    Display the secret word with underscores for unguessed letters
    Display the guessed letters
    
    // Get user input
    Prompt the user to guess a letter
    Read the user's input
    
    // Process the user's guess
    If the guessed letter is in the secretWord:
        Add the guessed letter to the guessedLetters list
        If all letters in the secretWord have been guessed:
            Display a victory message
            Break out of the loop
    Else:
        Increment attempts by 1
    
### Game over
If attempts equals maxAttempts:
    Display a defeat message and reveal the secretWord


## HTML/CSS

Need grid
3 columns, 1 row
1st column needs to be divided to accommodate for 27 letter
2nd column needs vertical text aligned center
3rd column needs a .box to contain our background photo (will need to have function that changes photo upon getting correct word)
1st row will contain 6 letter work ( separated into 6 items)



## Technical Requirements
<img src="https://i.imgur.com/QgojyYY.png" width="400">

# Project 1<br>Browser-based Game

## Overview

Your first SEI project will start out with something fun - **a game!**

Thanks to the amount of logic there is in a game, there's no better app than a game to teach you how to **think like a programmer**!

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges**.  You got your feet wet with our game code-alongs during class - now it's time to pick a game and go for it.

**You will be working individually for this project**. However, your instructors and instructor assistants will be available for support via the support channel in Slack.  Please be sure to provide the details of the issue you are having - screenshots and relevant code are very helpful.

As a reminder, GA has a zero plagiarism policy - your project's code **must be substantially yours**. **Do not copy code from similar projects, tutorials, or other sources**.  However, using  lines of code from  StackOverflow to accomplish general techniques/algorithms is okay - an example would be using StackOverflow as a source for code that replaces a character at a certain position in a string. 

---

## Planning & Presentation Requirements

### Planning - Due 4:15 (Pacific) Thursday, 12/14/23:

- You will share:

	☐ Your choice of game.

	☐ A wireframe of your "main" game screen.

	☐ Pseudocode for the overall game play.

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

## Choose From the Following Games

> Note: Games are listed in approximate order of increasing difficulty.

1. **Spaceman**
    - A good icebox feature (optional feature) is to allow the player to choose from categories of words.
1. **Concentration (Memory Game)**
    - Use "cards" or other theme
    - Will need to display "wrong" guess until a timer expires or until the next click.
    - Must lose after a certain amount of time or after X number of bad guesses.
1. **Simon**
    - Requires audio
1. **Mastermind** (Guess the Code)
1. **Minesweeper**
    - Must implement "flood" feature
1. **Slot Machine**
    - Must implement wagering feature
1. **Blackjack**
    - Must implement wagering feature
    - Do not have to implement splitting hands
1. **Wordle** (NY Times game)
1. **Mancala**
    - Implementing "capturing" is not required
1. **Video Poker**
    - Must implement wagering feature
1. **Craps**
    - Must implement wagering feature
1. **Roulette**
    - Must implement wagering feature
1. **Solitaire**
1. **Battleship**
    - Requires some AI to implement the computer opponent

**Only the above games are approved.  Any deviation, which is extremely discouraged, must receive approval from your instructor before starting your planning (wireframes & pseudocode)!**

> IMPORTANT:  Because it's important to demonstrate your ability to perform DOM manipulation using JavaScript, all games should be DOM-based, not canvas-based.

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

## Project Feedback + Evaluation

- Your instructors will be using the [Project 1 Code Review](./project-1-code-review.pdf) form to determine whether or not the project passes all of the minimum requirements.
- Your instructors will endeavor to deliver your code review by EOD Monday following Friday's presentation.
- If your instructors determine that your project does not meet the above requirements (denoted using checkboxes), you may request to address the deficiencies identified. However, be aware that **there is only a single opportunity to resubmit a project during the course**.
- If there is a specific section of code that you would like an instructor to provide additional feedback, please ask!