// Code to print marks of students from object by using FOR loop
// let marks = {
//     xk: 89,
//     xain:50,
//     aghu:99,
// }

// for(let i=0; i<Object.keys(marks).length; i++){
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }


//Code to print marks of students from objects by using FOR in loop
// for(let key in marks){
//     console.log("The marks of " + key + " are " + marks[key]);
// }


//Code to enter a correct number
/*let cn = 4;
let num;
while(num != cn){
    num = prompt("Enter a number");
}
console.log("You have entered the correct number");*/


//Code to find the mean
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}

console.log(mean(2, 3, 4, 5));