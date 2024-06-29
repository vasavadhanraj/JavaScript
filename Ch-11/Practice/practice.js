//Call Stack
function hello(){
    console.log("This Text is inside hello function");
    console.log("hello");
}

function demo(){
    console.log("Calling hello function");
    hello();
}

function practice(){
    console.log("Calling demo function");
    demo();
}
console.log("Calling practice function");
practice();
console.log("Done!!!");

// Visualizing Call Stack
function first(){
    return 7;
}
function second(){
    return first() + first();
}
function three(){
    return second() + first();
}
function total(){
    let ans = three() + second() + first();
    console.log(ans);
}
total();

//Callback Hell
let h2 = document.querySelector("h2");

// function changeColor(color, delay, nextChangeColor){
//     setTimeout(() => {
//         h2.style.color = color;
//         if(nextChangeColor) nextChangeColor();
//     },delay);
// }

// changeColor("gold",1000);
// changeColor("aqua",2000);
// changeColor("orange",3000);
// changeColor("purple",4000);
// changeColor("pink",5000);
// changeColor("red",6000);
// changeColor("blue",7000);

//Callback Nesting -> Callback Hell
// changeColor("gold",1000, () => {
//     changeColor("aqua",1000, () => {
//         changeColor("orange",1000, () => {
//             changeColor("purple",1000, () => {
//                 changeColor("pink",1000, () => {
//                     changeColor("red",1000, () => {
//                         changeColor("blue",1000, () => {
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });
console.log("--------------------------------");

// Promise

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10)+ 1;
//     if(internetSpeed > 4) {
//         success();
//     } else{
//         failure();
//     }
// }

// savetoDb("Practice", () => {
//     console.log("success: your data was saved");
//     savetoDb("Practice2", () => {
//         console.log("success2: your data2 was saved");
//         savetoDb("Practice3", () => {
//             console.log("success3: your data3 was saved");
//             savetoDb("Practice4", () => {
//                 console.log("success4: your data4 was saved");
//                 savetoDb("Practice5", () => {
//                     console.log("success5: your data5 was saved");
//                 }, () => {
//                     console.log("failure5 : weak connection data was not saved");
//                 });
//             }, () => {
//                 console.log("failure4 : weak connection data was not saved");
//             });
//         }, () => {
//             console.log("failure3 : weak connection data was not saved");
//         });
//     }, () => {
//         console.log("failure2 : weak connection data was not saved");
//     });
// }, () => {
//     console.log("failure1 : weak connection data was not saved");
// });

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10)+ 1;
        if(internetSpeed > 4) {
            resolve("success : data was saved.");
        } else{
            reject("reject : weak connection.");
        }
    });
}

//run in console
console.log(savetoDb("practice"));
// savetoDb("Practice");

//then & catch
// savetoDb("Practice")
//     .then(() =>{
//         console.log("Promise was resolved");
//     })
//     .catch(() =>{
//         console.log("Promise was rejected");
//     })
console.log("-------------------------------");

//Promise Chaining
// savetoDb("Practice")
//     .then(() =>{
//         console.log("data1 saved. Promise was resolved");
//         return savetoDb("Practice-2")
//     })
//     .then(() =>{
//         console.log("data2 saved. Promise was resolved");
//         return savetoDb("Practice-3")

//     })
//     .then(() =>{
//         console.log("data3 saved. Promise was resolved");
//         return savetoDb("Practice-4")
//     })
//     .then(() =>{
//         console.log("data4 saved. Promise was resolved");
//         console.log("--------------------------------");
//         return savetoDb("Practice-5")
//     })
//     .catch(() =>{
//         console.log("Promise was Rejected");
//         console.log("--------------------------------");
//     });

//Result & Error
savetoDb("Practice")
    .then((result) =>{
        console.log("data1 saved. Promise was resolved");
        console.log("Result of Promise",result);
        return savetoDb("Practice-2")
    })
    .then((result) =>{
        console.log("data2 saved. Promise was resolved");
        console.log("Result of Promise",result);
        return savetoDb("Practice-3")

    })
    .then((result) =>{
        console.log("data3 saved. Promise was resolved");
        console.log("Result of Promise",result);
        return savetoDb("Practice-4")
    })
    .then((result) =>{
        console.log("data4 saved. Promise was resolved");
        console.log("Result of Promise",result);
        console.log("--------------------------------");
        return savetoDb("Practice-5")
    })
    .catch((error) =>{
        console.log("Promise was Rejected");
        console.log("Result of Promise",error);
        console.log("--------------------------------");
    });
 
//Refactoring Old Code
function changeColor(color, delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            h2.style.color = color;
            resolve();
        }, delay);
    });
}

changeColor("gold",1000).then(() =>{
    console.log("gold color was completed");
    return changeColor("aqua",1000)
})
.then(() =>{
    console.log("aqua color was completed");
    return changeColor("orange",1000)
})
.then(() =>{
    console.log("orange color was completed");
    return changeColor("purple",1000)
})
.then(() =>{
    console.log("purple color was completed");
    return changeColor("pink",1000)
})
.then(() =>{
    console.log("pink color was completed");
    return changeColor("red",1000)
})
.then(() =>{
    console.log("red color was completed");
    return changeColor("blue",1000)
})
.then(() =>{
    console.log("blue color was completed");
});



function changeFont(fontFamily, delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            h2.style.fontFamily = fontFamily;
            resolve();
        }, delay);
    });
}

changeFont("'Courier New', Courier, monospace",6000).then(() =>{
    console.log("font 1 was completed");
    return changeFont("'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",1000)
})
.then(() =>{
    console.log("font 2 was completed");
    return changeFont("'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",1000)
})
.then(() =>{
    console.log("font 3 was completed");
    console.log("--------------------------------");
});