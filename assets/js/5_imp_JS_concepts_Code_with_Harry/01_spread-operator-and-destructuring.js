// **)Spread operators
// *) Spread Operator (...) sa array ka elements alag alag (spread)ho jata ha

let arr = [1, 2, 4];
const avg = (a, b, c)=>{
    return a+b+c/3;
}
let r = avg(...arr);
// console.log(r)
let b =[4,7,...arr,9,5];
// console.log(b);


let obj1 = {
    name1: "Xain Khan",
    class1: "j1",
    favLang: "Javascript"
}
// *) Method 1
// let obj2 = {};
// obj2.name1 = obj1.name1;
// obj2.class1 = obj1.class1;
// obj2.favLang = obj1.favLang;

// *) Method 2
let obj2 = {...obj1, favLang: "Python"}
// console.log(obj2);


// **) Destructuring
//Method 1 (Of declaring variables)
// let name1 = obj1.name1;
// let class1 = obj1.class1;
// let favLang = obj1.favLang;

//Method 2 (Of declaring variables with Destructuring)
let {name1, class1, favLang} = obj1;  // This is called destructuring
console.log(name1,class1,favLang);