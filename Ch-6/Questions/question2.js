console.log("Question-1");
function element() {
    let array = [10,34,391,90,293,192];
    let largest = 0;

    for(let i=0;i<array.length;i++){
        if(largest < array[i]){
            largest = array[i];
        }
    }
    console.log(largest);
}

element();

console.log("");

console.log("Question-2");
function value() {
    let str = "abcdabcdefgggh";
    str2 = str.slice(0,4).concat(str.slice(8,11)).concat(str.slice(13));
    console.log(str2);
    // console.log(str.slice(0,4));
    // console.log(str.slice(7,11));
    // console.log(str.slice(13));
}

value();
console.log("");

console.log("Question-3");
let country = ["Australia","Germany","United States of America"];
let value2 = 3;


console.log("");

console.log("Question-4");
let vowels = "aeiou";






console.log("");

console.log("Question-5");
function random(){
    console.log(Math.ceil(Math.random()*25));
}

random();