const changeBgRed = ()=>{
    document.body.firstElementChild.style.background = "red";
}

let b = document.body;
console.log("First child of b is: ", b.firstChild); // it may return the space (between body and div)
console.log("First Element child of b is: ", b.firstElementChild); // it will return the first element ignoring space