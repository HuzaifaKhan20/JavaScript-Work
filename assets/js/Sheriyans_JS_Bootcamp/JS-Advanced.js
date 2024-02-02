// 1) the difference b/w var let const 


// var old js mein tha 
// var function scoped hota hai, var apna parent function ma kahen bhe use ho sakta ha
// var adds itself to the window object 

// function abcd(){
//     for(var i = 1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i); //var will run
// }
// abcd();
// var a = 12; // Includes in window of browser

// let const new js mein hai 
// let const braces scoped hota hai .
// let const doesn't adds itself to the window object 

// function abcd(){
//     for(let i = 1; i<12; i++){
//         console.log(i); //let will work here
//     }
//     console.log(i); //let will through error because it works in braces scoped
// }
// abcd();

// let b = 12; // Not includes in window of browser


// 2) Window Object // it is the set of features given by browser which can be used by JS but not part of JS.


// 3) Browser Context Api: Browser 3 cheezai deta ha *)window, *)Stack, *) Heap Memory
// *) Stack : it deals with the which function or variable executes first or in the last.
// *) Heap Memory: jitna bhe variables hum banata ha unha store kahi to karna parta ha uske liya hota ha heap memory.
// 1+2+3+6+9 - During calculation partial result (1+2='3') store hota ha heap memory


// 4) Execution Context : it's a container where the function's code is executed and it's created whenever a function is called, it contains 3 things , variables, functions and lexical environment.
// Iska matlab jab bhe hum function chalaayege fnc apna ek khudka ek imaginary container bana lega jisma uski 3 cheezain hogi:
// 1) variables
// 2) functions inside that parent fnc
// 3) Lexical environment of that function
// ye jo container ha imaginary isa he hum Execution Context kahta ha.

// function abcd(){
//     var a =12;
//     function def(){
//         var b = 12;
//     }
// }

// Above function create execution context which have var a, fnc def(), and its Lexical Environment.
// **) Lexical Environment: batata ha ka functions kon se cheez use karsakta ha or kon se cheezon use nahi kar sakta means ka fnc abcd() var a use karsakta ha but var b use nhi kar sakta because var ka scope NEAREST PARENT tak hota ha.
// Lexical environment hota ha ek chart jisma ye likha hota ha ka apka particular function kin cheezon ko access kar sakta ha and kinki nahi, matlab ke it holda it's scope and scope chain


// 5) How to copy reference values 
// *) Three dots (...) = Spread Operators - they are used to copy exact value of variable a to vaiable b and when we pop on b so value of a will remian same

// var a = [1,2,3,4];
// var b = a; // Copy of reference values
// b.pop();

// var a = [2,3,4,5];
// var b = [...a];
// b.pop();

// Copy object
// var obj = {
//     name :'xk'
// }
// var objcopy = {...obj}


// 6) Truthy OR Falsy
// JS main kuch bhe likho wo truthy hoga ya falsy
// falsy values ye hai = 0 false undefined null NaN(Not A Number) document.all
// Uska illawa sub truthy ha

// if(-1){
//     console.log("hey");
// }
// else{
//     console.log("hello");
// }


// 7) Loops 

// foreach loop srf array pe chalta ha matlab ki jab bhe tumhara paas 1 array ho, tab us ma foreach loop chalta ha
// foreach ma actual value change nahi hoti array ke
// var a = [1,2,3,4,5,6,7,7889,36,9,9,909];

// a.forEach(function(val){
//     console.log(val+2);
// })

// objects par loop karna ka leya hota ha forin loop

// var obj = {
//     name: "XK",
//     age: 22,
//     city: "Khi",
// }
// for(var key in obj){
//     // console.log(key);
//     console.log(key, obj[key]);
// }

// var a = 12;
// do {
//     console.log(a);
//     a++;
// }
// while (a < 15);

// Callback functions
// jab bhi koi aisa code jo baad ma chalta ha aap likhoga, kyunki wo code baad ma chalta ha JS ko ya pata nhi hota ka wo complete hua ha ya nhi, asa code ke completiom par JS ko bataya jaata ha ka wo complete hogya aur usa chala sakta ho, ya batana ka kaam callback ka ha
// FB sa data ae gya ha ya batata ha Callback function
// aisa code jo baad ma chalta ha usa hum 1 function dedete ha ka jab complete hojana to ya function chala dana, aur wo function jo hum data ha wo 1 normal function he hota ha aur usa kahta ha callback function

// setTimeout(function(){
//     console.log("2 second baad chala");
// }, 2000);
 