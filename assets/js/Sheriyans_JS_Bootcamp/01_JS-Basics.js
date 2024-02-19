// 1) word vs keyword
    // chacha =  word 
    // for = keyword 


// 2) var (May change Value), let, const(values not change)


// 3) *) Hoisting = variables and functions are hoisted which means there declaration is moved on the top of code
// e.g:-We can use variable on line 4 and declare it on line 5 and it will return undefined
// var a;  = declaration
// a = 12;  = initialization
// console.log(a); == Undefined
// var a = 12;
// console.log(b); == not defined
// Not-define = It has not declared (Not existed )
// un-defined = It has declared but value is not initialized.


// 4) Types in js 
// primitive and reference variables
// primitives = numbers, string, null, undefined, boolean 
// reference = [] () {}
// aisi koi bhe value jisko copy karne par real copy nahi hote, balki us main value ka reference pass hojaata hai, use hum reference value kahte hai, aur jiska copy karne par real copy ho jaaye wo value primitive type value hoti hai

// e.g:- Primitive Variables
// var a = 12;
// var b = a;

// e.g:- Reference Variables
// var a = [12,13];
// var b = a;
// b.pop();


// 5) conditionals if else else-if
// if (true) {
// }else if(false){
// }else{
// }


// 6) Loops - For, while
// for(start, end, change){}
// for (let i = 25; i < 51; i++) {
//     console.log(i);
// }
// var a = 12;
// while (a<20) {
//     a++;
//     console.log(a);
// }


// 7) Functions are used for mainly 3 purposes 
// *) When you don't want to run code right now but you want to use it in future
// *) When you want to reuse your code 
// *) When you want to run code everytime with different data. 
// function hello() {
//     console.log("Hello");
// }
// hello();
// function abcd(a) { here a is parameter 
    // console.log(a);
// }
// abcd(12); here 12 is argument


// 8) Array = Used to store more than 1 values in a variable
// var arr = [12,13,14,15];
// console.log(arr[1]);

// .push = Used to add value in the end of array 
// .pop = Used to remove value from the end of array
// .unshift = Used to add value from the start of array
// .shift = Used to remove value in the start of array
// .splice = Used to remove value in the middle of array
// arr.push(88);
// arr.splice(2,1);
// console.log(arr);


// 9) Object = Used to store details about a variable, in a key(property) and value pair 
// *) blank obj 
// var a = {};

// *) filled object 
// var a = {
//     age: 24,
//     name: "XK",
//     email: "xk@gmail.com",
//     contact: 2265589574,
//     xyz: function(){} // it is method because it's value is function
// }

// a.name = "Xain Khan";
// console.log(a.name);