//Call Stack
function hello() {
    console.log("inside hello function");
    console.log("hello");
}

function demo(){
    console.log("Calling hello function");
    hello();
}
console.log("Calling Demo Function");
demo();
console.log("Done   !");

//Visualizing the Call Stack

function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}
three();

//Callback Hell
let h1 = document.querySelector("h1");

// function ChangeColor(color, delay, nextChangeColor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextChangeColor) nextChangeColor();
//     }, delay);
// }

// ChangeColor("red",1000);
// ChangeColor("green",2000);
// ChangeColor("blue",3000);
// ChangeColor("pink",4000);

//Callback nesting -> Callback hell
// ChangeColor("red",1000,  () => {
//     ChangeColor("green",1000, () => {
//         ChangeColor("blue",1000, () => {
//             ChangeColor("pink",1000);
//         });
//     });
// });
console.log("----------------------------------------")

//Promise

function savetoDb(date, success, failure) {
    let internetSpeed = Math.floor(Math.random()*10)+ 1;
    if(internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

// savetoDb("Dhanraj", () => {
//     console.log("success : your date was saved");
//     savetoDb("Aman", () => {
//         console.log("success2 : your date2 was saved");
//         savetoDb("Ajay", () => {
//             console.log("success3 : your date3 was saved");
//         }, () => {
//             console.log("failure3: weak connection , date was not saved");
//         });
//     }, () => {
//         console.log("failure2: weak connection , date2 was not saved");
//     });
// }, () => {
//     console.log("failure: weak connection , date was not saved");
// });

function savetoDb(date) {
    return  new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() *10) + 1;
        if(internetSpeed > 4) {
            resolve("success : date was saved")
        } else{
            reject("failure: weak connection");
        }
    });
}

//run in console
console.log(savetoDb("dhanraj"));
// savetoDb("dhanraj");

//then & Catch
// savetoDb("Dhanraj")
//     .then(() => {
//         console.log("Promise was Resolved");
//     })
//     .catch(() => {
//         console.log("Promise was Rejected");
//     });

//Promise Chaining
// savetoDb("Dhanraj")
//     .then(() => {
//         console.log("date1 saved. Promise was resolved");
//         return savetoDb("Rohit");
//     })
//     .then(() => {
//         console.log("date2 saved. Promise was resolved");
//         return savetoDb("Anand");
//     })
//     .then(() => {
//         console.log("date3 saved. Promise was resolved");
//     })
//     .catch(() => {
//         console.log("Promise was Rejected");
//     });

//Result & Error in Promises
savetoDb("Dhanraj")
        .then((result) => {
            console.log("date1 saved. Promise was resolved");
            console.log("Result of Promise: ",result);
            return savetoDb("Rohit");
        })
        .then((result) => {
            console.log("date2 saved. Promise was resolved");
            console.log("Result of Promise: ",result);
            return savetoDb("Anand");
        })
        .then((result) => {
            console.log("date3 saved. Promise was resolved");
            console.log("Result of Promise: ",result);
        })
        .catch((error) => {
            console.log("Promise was Rejected");
            console.log("Error of Promise: ",error);
        });
        console.log("----------------------------------------")

//Refactoring old Code
function changeColorandFont(color,fontFamily, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            h1.style.fontFamily = fontFamily;
            resolve();
        }, delay);
    });
}

changeColorandFont("red","Verdana, Geneva, Tahoma, sans-serif",1000).then(() => {
    console.log("red color was completed");
    return changeColorandFont("green","system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",1000);
})
.then(() => {
    console.log("green color was completed");
    return changeColorandFont("blue","'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",1000);
})
.then(() => {
    console.log("blue color was completed");
    return changeColorandFont("pink","Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",1000);
})
.then(() => {
    console.log("pink color was completed");
});