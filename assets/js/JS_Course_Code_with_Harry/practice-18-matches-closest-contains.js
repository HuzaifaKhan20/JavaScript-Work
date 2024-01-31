let id1 = document.getElementById("id1");
// console.log(id1);
// Element.matches(css) = To check if the element matches the given CSS selector.
// console.log(id1.matches(".class"));
// console.log(id1.matches(".box"));

let sp1 = document.getElementById("sp1");
// elem.closest(css) = To look for the nearest ancestor that matches the given CSS selector. The elem itself is also checked
// console.log(sp1.closest(".box"))
// console.log(sp1.closest("#sp1"))


console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))