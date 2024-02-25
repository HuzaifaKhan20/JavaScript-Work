// // Task 1 - Write a program to show different alerts when different buttons are clicked

// document.getElementById("google").addEventListener("click", function() {
//     window.location = "https://www.google.com.pk/";
// })

// // Task - Fetch and show content after every few seconds
// const fetchContent = async (url)=>{
//     con = await fetch(url);
//     let a = await con.json();
//     return a;
// }

// setInterval(async function(){
//     let url = "https://jsonplaceholder.typicode.com/todos/1";
//     console.log(await fetchContent(url));
// }, 3000);


setInterval(function(){
    document.querySelector("#bulb").classList.toggle("bulb");
}, 300);