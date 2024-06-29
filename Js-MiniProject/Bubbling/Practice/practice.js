let div = document.querySelector("div");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("Div was Clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was Clicked");
})

for(li of list){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li was Clicked");
    });
}