// fs is a file system module in Node.Js to read files
// let fs = require("fs")
let fs = require("fs/promises") // it is also a way to read file

// fs.readFile("file.txt", "utf-8", (err, data)=>{ // it is a callback function. It will run when file is ready meanwhile next lines are executed
//     console.log(err, data);
// })

// **) async-await = it is a way to change behaviour of JS from non-blocking to blocking

const readThree = async (file1, file2, file3)=>{ // here "async" means that this function runs in background but its inner code will follow await and run in sequence
    let a1 = fs.readFile(file1, "utf-8");
    let a2 = fs.readFile(file2, "utf-8");
    let a3 = fs.readFile(file3, "utf-8");
    let c2 = await a2;
    console.log(c2);
    let c1 = await a1;
    console.log(c1);
    let c3 = await a3;
    console.log(c3);

}

let a = fs.readFile("file.txt", "utf-8");
console.log(a);
a.then((data)=>{ // it will wait till the promise is true (File is read) then run the code inside it, meanwhile next lines are executed
    console.log(data);
});

console.log("This is end of program");


readThree("file1.txt","file2.txt","file3.txt");