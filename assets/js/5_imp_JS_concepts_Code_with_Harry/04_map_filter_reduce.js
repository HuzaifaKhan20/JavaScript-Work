// JavaScript Map
let arr = [1,2,3,4];
let arr2 = arr.map((value)=>{
    return value+2;
});

// console.log(arr, arr2);

//JavaScript Filter
let arr3 = arr.filter((value)=>{
    return value>4;
});

// console.log(arr, arr3);

//JavaScript Reduce
let newArr = [1,2,4]
let arr4 = newArr.reduce((val1, val2)=>{
    return val1 + val2; // it will first add 1 + 2 = 3, then this 3 will be added with 4.
});

console.log(arr4);