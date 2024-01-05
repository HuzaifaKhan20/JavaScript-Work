// Exercise 1: Guess the number

// Write a Javascript program to generate a random number and store it in variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.
// 100 - (no. of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1 - 100.


let num = Math.floor(Math.random() * 100); // Generate random number here
console.log(num);
let chances = 0;
let numInput;
do{
    numInput = prompt("Enter the number to match magical number");
    numInput = Number.parseInt(numInput);
    chances++;
    // console.log(chances);
    // console.log(numInput === num);
    if(numInput > num){
        console.log("The number is greater than the magical number");
    }
    else if(numInput < num) {
        console.log("The number is less than the magical number");
    }
    else{
        console.log("Congratulation! You have guessed the number");
        let score = 100 - chances;
        console.log("Your score = " + score);
    }
}while(numInput !== num);