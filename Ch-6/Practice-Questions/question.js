console.log("Question-1");
function poem() {
    console.log("Hold Fast to Dreams, For if Dreams die, Life is a broken-winged bird That cannot fly.")
}

poem();

console.log("Question-2");
function dice(){
    console.log(Math.ceil(Math.random()*6));
}

dice();

console.log("Question-3");
function average(num1,num2,num3) {
    console.log(`The Average of 3 numbers :- ${num1}, ${num2}, ${num3}.`)
    total = num1+num2+num3/3;
    console.log(`There Average is ${total}.`);
}

average(321,21,99);

console.log("Question-4");
function multiTable(){
    let number = 28;
    for(let i = 1;i <= 10;i++){
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

multiTable();

console.log("Question-5");
let n = 20;
function sum() {
    console.log("Sum of Numbers from 1 to n.");
    console.log(`The Value of n is ${n}.`);
    for(let i = 1;i <= n;i++){
        console.log(i);
        // return;
    }
}

sum();

console.log("Question-6");
function allStrings () {
    let str = ["Person1"];
    let str2 = ["Person2"];
    let str3 = ["Person3"];
    let array = [];
    console.log(typeof str2);
    allStr = array.concat(str.concat(str2.concat(str3)));
    console.log(allStr);
    // array2 = ["Person1","Person2","Person3"];
    // console.log(array2);
}
 allStrings();

console.log("Question-7");
let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}

console.log(greet);
changeGreet();