let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started === false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.textContent = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    //random btn choose
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br/>Press any key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}

function btnPress(){
    //console.log(this);
    let btn = this;
    userFlash(btn);

    useColor = btn.getAttribute("id");
    userSeq.push(useColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}