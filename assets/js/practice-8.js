// Problem 1 - Take input and add to array
// let arr = [12,13,14,15,16];
// let addNum = prompt("Enter number to add");
// addNum = Number.parseInt(addNum);
// arr.push(addNum)
// console.log(arr);


// Problem 2 - Add numbers to array until 0 is input
// let arr = [12,13,14,15,16];
// let addNum;
// do {
//     addNum = prompt("Enter number to add");
//     addNum = Number.parseInt(addNum);
//     arr.push(addNum)
//     console.log(arr);
// }while(addNum != 0);


// Problem 3 - filter for numbers divisible by 10 from array
// let arr = [1,2,3,10,50,60,88];
// let divArr = arr.filter((x)=>{
//     return x%10 == 0;
// })
// console.log(divArr);


// Problem 4 - Create an array of square of given numbers
// let arr = [2,3,310,50,60,88];
// let squareArr = arr.map((values)=>{
//     return values*values;
// })
// console.log(squareArr);


// Problem 5 - Calculate factorial of input
let arr = [1,2,3];
let reduceArr = arr.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(reduceArr);
