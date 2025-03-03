import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const difficulties = {
    1: { name: "Easy", chances: 10 },
    2: { name: "Medium", chances: 5 },
    3: { name: "Hard", chances: 3 },
};

let highScore = Infinity;

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function playGame() {
    console.log("\n🎯 Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 1 and 100.");
    console.log("\nPlease select the difficulty level:");
    console.log("1. Easy (10 chances)");
    console.log("2. Medium (5 chances)");
    console.log("3. Hard (3 chances)");

    let difficultyChoice;
    while (true) {
        difficultyChoice = await askQuestion("Enter your choice (1-3): ");
        if (["1", "2", "3"].includes(difficultyChoice)) break;
        console.log("❌ Invalid choice! Please enter 1, 2, or 3.");
    }

    const { name, chances } = difficulties[difficultyChoice];
    console.log(`\nGreat! You have selected the ${name} difficulty level.`);
    console.log(`You have ${chances} chances. Let's start!\n`);

    const targetNumber = getRandomNumber();
    let attempts = 0;
    let startTime = Date.now();

    while (attempts < chances) {
        let userGuess = await askQuestion(`Enter your guess (${chances - attempts} left): `);
        userGuess = parseInt(userGuess);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            console.log("❌ Invalid input! Enter a number between 1 and 100.");
            continue;
        }

        attempts++;

        if (userGuess === targetNumber) {
            const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
            console.log(`🎉 Congratulations! You guessed the correct number (${targetNumber}) in ${attempts} attempts.`);
            console.log(`⏳ Time taken: ${timeTaken} seconds.`);

            if (attempts < highScore) {
                highScore = attempts;
                console.log("🏆 New High Score! 🎯");
            }

            break;
        } else {
            console.log(`❌ Incorrect! The number is ${userGuess > targetNumber ? "less" : "greater"} than ${userGuess}.`);
        }
    }

    if (attempts === chances) {
        console.log(`😢 You've run out of chances! The correct number was ${targetNumber}.`);
    }

    let playAgain = await askQuestion("🔄 Do you want to play again? (yes/no): ");
    if (playAgain.toLowerCase() === "yes") {
        playGame();
    } else {
        console.log("👋 Thanks for playing! Goodbye.");
        rl.close();
    }
}

// Start the game
playGame();
