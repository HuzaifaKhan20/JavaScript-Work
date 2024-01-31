// Chapter 1: - Q1: add number to a string
let a = "XK";
let b = 6;
// let c = 3;
// console.log(a+b);

// Chapter 1: - Q2: Use typeof operator to find the datatype of the output of Q1
// console.log(typeof (a+b));

// Chapter 1: - Q3 : Can you change object value to a number
const c = {
    name: "Xk",
    age:29,
    isPrincipal: true,
}
// c = 74;
c['name'] = "Xain Khan";

// Chapter 1: - Q4 : Try to add a new key to object c
c['friend'] = "UK";
// console.log(c);

// Chapter 1: - Q5 : Create a dictionary of word meaning of 5 words

const dict = {
    hallucinate: "to produce false information contrary to the intent of the user",
    homebody: "a person who prefers pleasures and activities that center around the home.",
    wanderlust: "a strong, innate desire to rove or travel about.",
}

// console.log(dict.hallucinate); //Syntax 1
console.log(dict['hallucinate']); //Syntax 2

