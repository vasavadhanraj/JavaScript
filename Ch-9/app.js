//DOM means Document Object Module

// console.dir(document);
// console.dir(document.all);
// console.dir(document.all[8]);
// console.dir(document.all[8].innerText);
// console.dir(document.all[8].innerText = "Peter Parker");

//getElementById
document.getElementById("mainImg");
let imgObj = document.getElementById("mainImg");
console.dir(imgObj);
console.dir(imgObj.id);
console.dir(imgObj.src);
// console.dir(imgObj.src = "assets/msg1173904332-1680.jpg");

document.getElementById("description");
let descObj = document.getElementById("description");
console.dir(descObj);


console.dir("------------------------------------");
//getElementsByClassName
document.getElementsByClassName("oldImg");
let oldImgObj = document.getElementsByClassName("oldImg");
console.dir(oldImgObj);
for(let i=0;i<oldImgObj.length;i++){
    console.dir(oldImgObj[i].src);
}

//getElementsByTagName
document.getElementsByTagName("p");
let elep = document.getElementsByTagName("p");
console.dir(elep);

//querySelector(for only first match)
console.dir(document.querySelector("img"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("#description"));
//querySelectorAll(for all matches)
console.dir(document.querySelectorAll("img"));
console.dir(document.querySelectorAll(".oldImg"));
console.dir(document.querySelectorAll("#description"));

//setting content in Objects

console.dir(descObj.innerText);
console.dir(descObj.textContent);
console.dir(descObj.innerHTML);

//manipulating attributes

let img = document.querySelector("img");

console.log(img);
console.log(img.getAttribute("id"));
// img.setAttribute("id","newImg"); //for changing id
console.log(img.setAttribute("class","newImage"));

console.log(img.getAttribute("class"));

//manipulating style

let heading = document.querySelector("h1");
console.log(heading.style);
console.log(heading.style.color = "red");

let links = document.querySelectorAll(".box a");

// for(let i=0;i<links.length;i++){
//     links[i].style.color = "purple";
// }

for (link of links){
    link.style.color = "purple";//inline style
}

//classList property
console.log(img.classList);
console.log(img.classList.add("demo1"));
console.log(img.classList);
console.log(img.classList.remove("demo1"));
console.log(img.classList);
console.log(img.classList.contains("demo1"));
console.log(img.classList);
console.log(img.classList.toggle("demo1"));
console.log(img.classList);
console.log(img.classList.toggle("demo1"));
console.log(img.classList);

//navigation on page
let h4 = document.querySelector("h4");

console.log(h4.parentElement);
console.log(h4.children);
console.log(h4.nextElementSibling);
console.log(h4.previousElementSibling);

let ul = document.querySelector("ul");

console.log(ul.parentElement);
console.log(ul.children);
console.log(ul.childElementCount);

//creating element

let p = document.createElement("p");
p.innerText = "Hello";

p.style.color = "blue";

document.body.appendChild(p);

let btn = document.createElement("button");
btn.innerHTML = "Click Me";

let box = document.querySelector(".box");
box.appendChild(btn); //for nested element

//add new text
p.append(" This is new text.");

box.append(p); //add new element at first

let p1 = document.querySelector("p");

let btn1 = document.createElement("button");
btn1.innerHTML = "Click Me 1";
let btn2 = document.createElement("button");
btn2.innerHTML = "Click Me 2";
let btn3 = document.createElement("button");
btn3.innerHTML = "Click Me 3";
let btn4 = document.createElement("button");
btn4.innerHTML = "Click Me 4";

p1.insertAdjacentElement('beforebegin',btn1);
p1.insertAdjacentElement('afterbegin',btn2);
p1.insertAdjacentElement('beforeend',btn3);
p1.insertAdjacentElement('afterend',btn4);



//remove element

// let div = document.querySelector("h1");

// div.remove();

// let body = document.querySelector("body");
// body.removeChild(btn1);
// body.remove();
