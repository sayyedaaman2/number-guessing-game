# Number Guessing Game (CLI)

This is a simple CLI-based Number Guessing Game built using Node.js. The game randomly selects a number between 1 and 100, and the player has a limited number of attempts to guess the correct number based on the chosen difficulty level.

## Features
✅ Difficulty Levels: Easy (10 chances), Medium (5 chances), Hard (3 chances)  
✅ Random number generation between 1 and 100  
✅ Hint system: Tells if the guess is higher or lower than the correct number  
✅ Tracks the number of attempts taken  
✅ Timer to measure the time taken to guess correctly  
✅ High Score tracking (lowest number of attempts)  
✅ Option to play multiple rounds  

## Installation & Setup

1. **Clone the repository** or **download the file**:
   ```sh
   git clone https://github.com/your-repo/number-guessing-game.git
   cd number-guessing-game
   ```

2. **Ensure Node.js is installed** (Check with `node -v`). If not installed, download it from [Node.js official site](https://nodejs.org/).

3. **Run the game**:
   ```sh
   node game.js
   ```

## How to Play

1. The game starts with a welcome message and rules.
2. The player selects a difficulty level:
   - Easy (10 attempts)
   - Medium (5 attempts)
   - Hard (3 attempts)
3. The player enters a guess (between 1 and 100).
4. The game provides hints if the guess is incorrect (higher or lower).
5. The game ends when the player guesses correctly or runs out of attempts.
6. After each round, the player is asked if they want to play again.
7. The high score (minimum attempts) is tracked.

## Example Gameplay
```
🎯 Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2

Great! You have selected the Medium difficulty level.
You have 5 chances. Let's start!

Enter your guess: 50
❌ Incorrect! The number is less than 50.

Enter your guess: 30
❌ Incorrect! The number is greater than 30.

Enter your guess: 40
🎉 Congratulations! You guessed the correct number (40) in 3 attempts.
⏳ Time taken: 15.2 seconds.
🏆 New High Score! 🎯
🔄 Do you want to play again? (yes/no): no
👋 Thanks for playing! Goodbye.
```

## Contributing
Feel free to fork this repository and submit pull requests with improvements or bug fixes.

## License
This project is open-source and available under the MIT License.
