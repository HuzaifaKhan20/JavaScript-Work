// DOM tree refers to the HTML page where all the nodes are objects. There can be 3 main types of nodes in the DOM tree.
// 1) Text Node, 2) Element Node, 3) Comment Node.

// In an HTML page, <html> is at the root and <head> and <body> are its children.
// A text node is always a leaf of the DOM tree.

// Children of an element: Direct as well as deeply nested elements of an element are called its children
// Child Nodes: Elements that are direct children for example head & body are children of <html>.

// console.log(document.body.firstChild); // Space is also a text
// console.log(document.body.lastChild); 
// let arr = Array.from(document.body.childNodes);
// console.log(arr); 

// Following is always true
/*
    elem.childNodes[0] === elem.firstChild
    elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
*/


//elem.hasChildNodes() returns true if elem has any child nodes.
// childNodes is a collection but not an array.

// console.log(document.body.firstChild);
// let a = document.body.firstChild;
// console.log(a.parentNode);
// console.log(a.parentElement);
// console.log(a.firstChild.nextSibling);

