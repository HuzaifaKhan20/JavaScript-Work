// Browser Event: An event is a signal that something has happenned. All the dom nodes generate such signals.
// Adding a hanler with JavaScript overwrites the existing handler on HTML.


// let a = document.getElementsByClassName("container")[0];
// a.onclick = ()=>{
//     // let b = document.getElementsByClassName("container")[0];
//     console.log("clicked");
// }

// e.clientX, e.clientY = it tells the position of the cursor.

let btn = document.querySelector("#btn");
let x = function(e){
    console.log(e.type, e.clientX, e.clientY);
    // alert("Hello World1!");
}

let y = function(e){
    console.log(e);
    alert("Hello World2!");
}

btn.addEventListener('click', x);

// btn.addEventListener('click', y);

// let a = prompt("What is your favourite number?");

// if (a == "2") {
//     btn.removeEventListener('click', x);
// }


