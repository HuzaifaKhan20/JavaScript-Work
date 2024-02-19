// JS nature is async
// Async means that first line will execute first but it will go to second line and also run it while first line is running. (JS not wait for first line to complete and move on to the second line)

console.log("Xain Khan is a good programmer");

setTimeout(()=>{
    console.log("Xain Khan is a inside timeout");
}, 1000);

console.log("Xain Khan is a bad programmer");