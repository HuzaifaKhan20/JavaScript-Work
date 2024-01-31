// document.body.querySelector(".nav-link").style.color = "red"; 
// document.body.querySelector(".navbar-nav").style.color = "red"; 

// Practice # 1
document.getElementsByTagName("ul")[0].firstElementChild.firstElementChild.style.color = "red";

// Practice # 2
document.getElementsByTagName("ul")[0].firstElementChild.firstElementChild.style.color = "green";
document.getElementsByTagName("ul")[0].lastElementChild.firstElementChild.style.color = "green";

// Practice # 3
Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background = "cyan";
})
