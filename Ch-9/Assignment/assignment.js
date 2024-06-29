//Question-1
let input = document.createElement("input");
input.placeholder = "input";
document.body.appendChild(input);

let button = document.createElement("button");
button.innerText = "Click Me";
document.body.appendChild(button);

//Question-2
let change = document.querySelector("input");
change.placeholder = "username";
// input.appendChild(change);

let id = document.querySelector("button");
id.setAttribute("button","btn");
id.getAttribute("btn");

//Question-3



//Question-4
let element = document.createElement("h1");
element.innerText = "DOM Practice";
element.style.textDecoration = "underline";
element.style.color = "purple";
document.body.appendChild(element);

//Question-5
let nextElement = document.createElement("p");
nextElement.innerText = "Apna College Delta Practice";
document.body.appendChild(nextElement);
