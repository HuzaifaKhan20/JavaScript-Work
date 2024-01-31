// console.log shows the element DOm tree
// console.dir shows the element as an object with its properties
// let x = document.getElementsByTagName("span")[0];
// console.log(x);
// let y = document.getElementsByTagName("span")[0];
// console.dir(y);


// tagName = Only exists for element nodes
// nodeName = defined for any node (text, comment etc)
// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.nodeName);


// innerHTML get the inside HTML of any element
// outerHTML get the whole (inner + element) HTML of any element
let x = document.getElementsByTagName("span")[0];
// console.log(x.innerHTML);
// console.log(x.innerHTML ="<i>I am changed by inner HTML</i>");
// console.log(x.outerHTML);
// console.log(x.outerHTML = "<div>This is done by outer HTML</div>");

console.log(x.textContent);
// let b = document.getElementsByTagName("b")[0];
// console.log(b);
// console.log(b.hidden = false);


