//Async Function

async function greet(){
    //throw keyword use for throw some error
    throw "Some Random Error";
    return "Hello";
}

//run in console
// greet();

// greet().then((result) =>{
//     console.log((result));
//     console.log("Promise was resolved");
// }).catch((err) =>{
//     console.log(err);
//     console.log("Promise was rejected");
// });

//Await function
function getNum(){
    return  new Promise((resolve, reject) =>{
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    getNum();
}

demo();

// let h3 = document.querySelector("h3");
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             h3.style.color = color;
//             resolve();
//         }, delay);
//     })
// }

// async function demo1() {
//     await changeColor('red', 1000);
//     await changeColor('orange', 1000);
//     await changeColor('blue', 1000);
//     await changeColor('green', 1000);
//     changeColor('pink', 1000);
// }

// demo1();

//error handling in await

let h3 = document.querySelector("h3");
function changeColor(color, delay) {
    return new Promise((resolve, reject) =>{
        let num = Math.floor(Math.random() * 10) + 1;
        if(num <= 5) {
            reject("promise rejected!");
        }
        setTimeout(() => {
            h3.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

async function demo1() {
    try {

        await changeColor('red', 1000);
        await changeColor('orange', 1000);
        await changeColor('blue', 1000);
        await changeColor('green', 1000);
        await changeColor('pink', 1000);
    } catch(error) {
        console.log("Error Caught");
        console.log(error);
    }

    let a = 5;
    console.log(a);
    console.log(`New Number : ${a+3}`); 
}

demo1();