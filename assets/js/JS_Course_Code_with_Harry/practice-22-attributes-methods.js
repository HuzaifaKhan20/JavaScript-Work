let first = document.getElementById("first");
let a = first.getAttribute("class"); // it gets the value of class
// console.log(a);
// console.log(first.hasAttribute("class")); // it returns true if  first element has the class else it returns false.
// console.log(first.hasAttribute("style"));
// first.setAttribute("hidden","true");
// first.setAttribute("class","sach true");
// first.removeAttribute("class");
// console.log(first.attributes);
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);