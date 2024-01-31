/*let arr = [95,68,75,68,false,"Not Present"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log("The length of arr is", arr.length); // .length counting starts from 1
arr[6] = 89; // Adding a new value to the array
arr[0] = 95; // Changing a new value to the array
console.log(arr); // Arrays are mutable and it can be changed
console.log(typeof arr); */


// Array Methods
// let num = [1, 2, 3, 35, 4];
// let b = num.toString(); // b is now a string
// console.log(b);
// let c = num.join("_");
// console.log(c);
// let r = num.pop(); // pop returns the popped element
// console.log(num, r);
// let r = num.push(56); // push returns the new array length
// console.log(num, r);
// let r = num.shift(); // removes an element from the start of an array
// console.log(num, r);
// let r = num.unshift(53); // add an element to the start of an array
// console.log(num, r);
// console.log(num, num.length);
// delete num[0];  // it will delete element and put undefined in place of it in array
// console.log(num, num.length);
// let num_more = [11, 12,13,14,15];
// let num_even_more = [11, 12,13,14,15];
// let newArr = num.concat(num_more, num_more);
// console.log(newArr);

// Sort Method
// let numm = [551, 662, 4, 6, 773,122, 935, 334];
// numm.sort(); // it sorts alphabetically
// console.log(numm);
// let compare = (a,b)=>{
//     return a - b;
// }
// let compare1 = (a,b)=>{
//     return b - a;
// }
// numm.sort(compare); // it sorts in ascending order
// console.log(numm);
// numm.sort(compare1); // it sorts in descending order
// console.log(numm);
// console.log(numm.reverse()); // it reverse the order of array

// Splice Method
// let num = [1, 2, 3, 35, 4];
// num.splice(2,2,1025,1026,1027,1028); // it modifies the original array // Her it removes 2 elements starting from index 2.
// let deletedValues = num.splice(2,3,1025,1026,1027,1028); // it returns the deleted elements of an array
// console.log(deletedValues);

// let sliceArr = num.slice(2);
// let sliceArrNew = num.slice(2,4); // here end element will be 4-1 = 3
// console.log(sliceArr);
// console.log(sliceArrNew);



// Loops in Arrays
let num = [3, 54, 1, 2, 4];
// for(let i=0; i<num.length;i++){
//     console.log(num[i]);
// }

// num.forEach((element)=>{
//     console.log(element);
// })

// Array.from = Used to create an array from any other object 
// let namee = "Xain Khan" // it is a string
// let arr = Array.from(namee); // string is converted into an array
// console.log(arr);


// for...of loop
// for(let item of num){
//     console.log(item); // it returns the values of array
// }

//  for...in loop
// for(let i in num){
//     console.log(i); // it returns the indexes of values of array
// }


