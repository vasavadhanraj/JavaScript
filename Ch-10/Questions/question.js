//Question-1
let box1 = document.querySelector(".box");
box1.addEventListener("mouseout", function(){
    console.log("Mouse goes out of the box");
});

let input = document.querySelector("#input1");
input.addEventListener("keypress",function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.code);
});



//Question-2
let btn = document.createElement("button");
btn.innerText = "Button 1";
btn.addEventListener("click",function(){
    btn.style.color = "green";
})
document.body.appendChild(btn);