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



Technical Requirements
Your App Must:
☐ Render a game in the browser.
☐ Include win/loss logic and render win/loss messages in HTML. Popup alerts using the alert() method are okay during development, but not production.
☐ Include separate HTML, CSS & JavaScript files.
☐ Use vanilla JavaScript, not jQuery.
☐ Have properly indented HTML, CSS & JavaScript. In addition, vertical whitespace needs to be consistent.
☐ No remaining unused and/or commented out code (code that will never be called) .
☐ Have functions and variables that are named sensibly. Remember, functions are typically named as verbs and variables (data) named as nouns.
☐ Be coded in a consistent manner. For example, choose between your preference for function declarations vs. function expressions.
☐ Be deployed online using GitHub Pages so that the rest of the world can play your game!
Necessary Deliverables
☐ The code for a working game that meets or exceeds the above technical requirements, built by you, and hosted on GitHub Pages (covered next week).
A README.md file with these sections:
☐ <Your game's title>: A description of your game. Background info of the game is a nice touch.
☐ Screenshot(s): Images of your actual game.
☐ Technologies Used: List of the technologies used, e.g., JavaScript, HTML, CSS...
☐ Getting Started: In this section include the link to your deployed game and any instructions you deem important.
☐ Next Steps: Planned future enhancements (icebox items).
Note: Don't underestimate the value of a well crafted README.md. The README.md introduces your project to prospective employers and forms their first impression of your work!
☐ Frequent commits (at least 1 every day) dating back to the very beginning of the project. Never delete you repo to "start over". Commit messages should be in the present tense, e.g., "Style game board" instead of "Styled game board". Be sure to create the repo on your personal GitHub account and ensure that it is "public".

1. Define the Concept:
Game Objective: Clearly define the main goal of the game. For example, the spaceman could be on a mission to explore planets, avoid obstacles, or solve puzzles.
Game Mechanics: Outline the core gameplay mechanics. Will it involve navigation, shooting, resource management, or a combination?

2. Target Audience:
Identify the target age group and interests of the players. This will influence the overall design, complexity, and theme of the game.

3. Platform and Technology:
Decide on the platform(s) for which the game will be developed (e.g., web, mobile, desktop).
Choose the technology stack and tools (e.g., game engines like Unity, programming languages, graphic design software).

4. Game Design:
Storyboarding: Create a simple storyboard to visualize the game flow and key scenes.
Level Design: Plan different levels, challenges, and environments the spaceman will encounter.
Character Design: Define the appearance, abilities, and characteristics of the spaceman and other entities in the game.

5. Technical Requirements:
Outline the technical aspects such as physics, animations, and user input.
Determine if additional features like multiplayer support, leaderboards, or in-app purchases are needed.

6. Development:
Coding: Break down the development process into manageable tasks. Create a development timeline.
Prototyping: Develop a basic prototype to test core mechanics and gameplay early in the process.
Iterative Development: Plan for iterative development and testing cycles.

7. Art and Sound:
Graphics: Decide on the art style, create character designs, backgrounds, and other visual elements.
Sound Design: Plan for background music, sound effects, and voiceovers.

8. Testing:
Implement a testing strategy to identify and fix bugs.
Conduct playtesting to gather feedback from potential players.

9. Deployment:
Decide on the release strategy (e.g., soft launch, beta testing).
Submit the game to the chosen platform(s).

