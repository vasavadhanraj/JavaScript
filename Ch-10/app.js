//Single button
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     console.log("Clicked");
//     alert("click");
// }

//for Multiple button
let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onmouseenter = function() {
    //     console.log("You entered in button");
    // }

    //onclick like function you can only use one time for any objects
    // btn.onclick = SayHello;
    // btn.onclick = SayName;

    //onclick like function you can only use multiple times for any objects
    // btn.addEventListener("click",SayHello);
    // btn.addEventListener("click",SayName);
}

function SayHello(){
    alert("Hello");
}

function SayName(){
    alert("My Name is John");
}


///////////////////////////////////
let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log("Paragraph was clicked.");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("Mouse Entered in box.");
});

//this Keyword
let btn1 = document.querySelector(".btn");
let p1 = document.querySelector(".p");
let h1 = document.querySelector(".h1");
let h3 = document.querySelector(".h3");
// btn1.addEventListener("click",function(){
//     console.log(this);
//     console.dir(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "lightskyblue";
// });

function ChangeBG(){
    console.log(this.innerText);
    this.style.backgroundColor = "lightskyblue";
}

btn1.addEventListener("click",ChangeBG);
p1.addEventListener("click",ChangeBG);
h1.addEventListener("click",ChangeBG);
h3.addEventListener("click",ChangeBG);

let bt = document.querySelector(".bt");
// bt.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Button CLicked..");
// });
bt.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("Button CLicked..");
});

let inp = document.querySelector("input");

inp.addEventListener("keydown",function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    console.log("Key Down");
});