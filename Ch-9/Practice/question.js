let p = document.createElement("p");
p.innerText = "Hey I'm red!";

p.style.color = "red";
document.body.appendChild(p);

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";

h3.style.color = "blue";
document.body.appendChild(h3);

let div = document.createElement("div");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";
document.body.appendChild(div);

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
div.appendChild(h1);


let p1 = document.createElement("p");
p1.innerText = "Me TOO!";
div.appendChild(p1);
