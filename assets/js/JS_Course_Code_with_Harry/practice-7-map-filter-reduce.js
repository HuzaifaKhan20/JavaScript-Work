// ** Map and filter returns new array and reduce return the value
let arr = [45, 23, 21];
// .map creates a new array
let a = arr.map((value, index, array)=>{
    // console.log(value, index, array);
    return value + 1;
})

// console.log(a);

// Array filter method
let arr2 = [45,23,21,0,3,5];
let a2 = arr2.filter((a)=>{
    return a<10;
})
// console.log(a2);


// Array reduce method
let arr3 = [1,2,3,4,8,2,1];
let newarr3 = arr3.reduce((h1, h2)=>{ // it will first add 1 + 2 = 3, then add result(3) with 3 (3+3 = 6), then add result(6) with 4 (6+4 = 10) and continue till last element
    return h1 + h2;
})
// console.log(newarr3);