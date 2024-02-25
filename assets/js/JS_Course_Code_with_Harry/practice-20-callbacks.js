// Syncronous Programming 
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favourite color?");


// Asynchronous Programming 
// console.log("Start");
// setTimeout(() => {
//     console.log("Hey I am inside timeout");
// }, 3000);
// console.log("End");

// **) Asynchronous actions are the actions that we initiate now and they finish later.

// **) Call Back Function is a function passed into another function as an argument, which is then invoked inside the outer function toi complete an action.
function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Script Loaded", src);
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loading script with src", src);
        callback(new Error("Src got some error   "))
    }
    document.body.append(script);
}

function hello(error, src){
    if(error){
        console.log(error);
        return;
    }
    alert("Hello World!", src);
}

function goodMorning(error, src){
    if(error){
        console.log(error);
        return;
    }
    alert("Good Morning", src);
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", hello);