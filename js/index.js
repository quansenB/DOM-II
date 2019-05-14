// Your code goes here
let imgfunbus = document.querySelector(".intro img");

imgfunbus.addEventListener("click", (event) => {
    event.target.style.display = "none";
});

imgfunbus.addEventListener("mouseover", (event) => {
    event.target.style.width = "50%";
});

imgfunbus.addEventListener("mouseout", (event) => {
    event.target.style.width = "100%";
});


let logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", (event) => {
    event.target.style.transform = "rotate(-45deg)";
});

logo.addEventListener("dblclick", (event) => {
    event.target.style.transform = "rotate(180deg)";
});


let h2s = document.querySelectorAll("h2");

h2s.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
        event.target.style.color = "blue";
    });
});


let page = document;

page.addEventListener("wheel", (event) => {
    event.target.style.backgroundColor = "lightgrey";
});

page.addEventListener("keydown", (event) => {
    event.target.style.backgroundColor = "grey";
});


let buttons = document.querySelectorAll(".btn");

buttons.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.target.style.transform = "rotate(45deg)";
    });
});

buttons.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "red";
    });
});

let header = document.querySelector(".nav-container");
header.addEventListener("mouseover", (event) => {
    event.target.style.transform = "rotate(185deg)";
    event.stopPropagation();
    event.stopImmediatePropagation();
    /* event.preventDefault(); */
});
