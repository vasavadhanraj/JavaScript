//Call Stack
function example(){
    console.log("This text is inside example function");
}

function example2(){
    console.log("This text is inside example2 function");
}
function demoText(){
    console.log("Calling example function");
    example();
    console.log("Calling example2 function");
    example2();
    console.log("Done!");
}

demoText();

//Visualizing the Call Stack
function first(){
    return 4;
}

function second(){
    return first() * first();
}

function total(){
    let value = second() + first();
    console.log(value);
}

total();

// Callback hell
let h2 = document.querySelector("h2");

function ChangeBackgroundColor(backgroundColor, delay, nextColor){
    setTimeout(() => {
        h2.style.backgroundColor = backgroundColor;
        if(nextColor) nextColor();
    }, delay);
}

// ChangeBackgroundColor("skyblue",1000);
// ChangeBackgroundColor("lightseagreen",2000);
// ChangeBackgroundColor("lawngreen",3000);
// ChangeBackgroundColor("orange",4000);

//Callback nesting -> Callback hell
ChangeBackgroundColor("red",1000, () =>{
    ChangeBackgroundColor("pink",1000,() =>{
        ChangeBackgroundColor("gray",1000,() =>{
            ChangeBackgroundColor("yellow",1000)
        });
    });
});

//Promise
function savetoData(data) {
    return new Promise((resolve,reject) =>{
        let internetSpeed = Math.floor(Math.random() * 8) + 2;
        if(internetSpeed > 10){
            resolve("success data was saved")
        }else{
            reject("weak connection");
        }
    });
}

savetoData("Example")