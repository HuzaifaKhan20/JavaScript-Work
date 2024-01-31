// alert("Hello JS");

let a = prompt("Enter a here", "578");
a = Number.parseInt(a);
alert("You entered a of type " + (typeof a));
let b = confirm("Do you want to write on document");
if(b){
    document.write(a);
}
else{
    document.write("Please allow me to write");
}