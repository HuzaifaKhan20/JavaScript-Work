/*
Snake -> Water --- Snake Win
Gun -> Water --- Water Win
Snake -> Gun --- Gun Win
*/

let userTool;
const randomNum = Math.floor(Math.random() * 3);
const tools = ['s', 'w', 'g'];
const pcTool = tools[randomNum];
let userScore = 0;
let pcScore = 0;
let round = 0;

while(round<10){
    userTool = prompt("Enter your Tool (s = Snake, w = Water, g = Gun");
    if ((userTool === "s" && pcTool === "w") || (userTool === "w" && pcTool === "g") || (userTool === "g" && pcTool === "s")) {
        console.log("Congratz! You win");
        userScore++;
    }
    else if ((userTool === "s" && pcTool === "g") || (userTool === "w" && pcTool === "s") || (userTool === "g" && pcTool === "w")) {
        console.log("Oops! You lost");
        pcScore++;
    }
    else if ((userTool === "s" && pcTool === "s") || (userTool === "w" && pcTool === "w") || (userTool === "g" && pcTool === "g")) {
        console.log("Game Drawn")
    }
    round++;
}

const result = {
    User: userScore,
    Computer: pcScore,
}

console.table(result);