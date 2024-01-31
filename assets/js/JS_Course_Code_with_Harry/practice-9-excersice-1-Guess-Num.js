// Exercise 1: Guess the number

// Write a Javascript program to generate a random number and store it in variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.
// 100 - (no. of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1 - 100.
alert("magicNumber");
let magicNumber = Math.floor(Math.random() * 100);
console.log(magicNumber);
let chances = 0;
let guessNumber;

do {
    guessNumber = prompt("Guess the magical number!");
    guessNumber = Number.parseInt(guessNumber);
    chances++
    if (guessNumber === magicNumber){
        console.log("Congratulations! You have guessed the magical number");
    }
    else if (guessNumber < magicNumber){
        console.log("Your guessed number is less than magical number");
    }
    else if (guessNumber > magicNumber){
        console.log("Your guessed number is greater than magical number");
    }
    else if (guessNumber > 100 || guessNumber < 1 || guessNumber == NaN || guessNumber == ""){
        console.log("Wrong Input. Please guess number between 1 to 100.");
    }
} while (guessNumber !== magicNumber){
    let score = 100 - chances;
    console.log("Your score = " + score);
}

