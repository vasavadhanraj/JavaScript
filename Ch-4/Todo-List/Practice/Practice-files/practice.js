let fruits = ["apple","banana","pineapple","grapes"];
console.log(fruits);
console.log(fruits[1]);
fruits[2] = "watermelon";
console.log(fruits);

fruits[7] = "orange";

let fruits2 = ["orange","Custard apple"];
console.log(fruits2);
console.log(fruits2.push("papaya","guava","mango"));
console.log(fruits2);
console.log(fruits2.pop());
console.log(fruits2);
console.log(fruits2.pop());
console.log(fruits2);
console.log(fruits2.unshift("apple","pineapple"));
console.log(fruits2);
console.log(fruits2.shift());
console.log(fruits2);

let numbersinwords = ["one","two","three","four","five","six"];
console.log(numbersinwords);
console.log(numbersinwords.indexOf("one"));
console.log(numbersinwords.indexOf("Two"));
console.log(numbersinwords.indexOf("five"));
console.log(numbersinwords.includes("one"));
console.log(numbersinwords.includes("seven"));
console.log(numbersinwords.includes("three"));
console.log(numbersinwords.includes("Three"));

let numbers = [11,22,33,44,55,66,77,88,99,111];
let numbers2 = [1,20,303,444,550,660,775,888,992,1111];
console.log(numbers);
console.log(numbers2);
console.log(numbers2.concat(numbers));
console.log(numbers2.concat(numbers).reverse());
console.log(numbers2.concat(numbers));

let value = [14,28,42,56,-70,-84,-98];
let v1 = 4;
console.log(value.slice(0,v1));
console.log(value.slice(length-v1));
console.log(value);
console.log(value.splice(0,2));
console.log(value);
console.log(value.splice(0,1,401,41));
console.log(value);

let a = 206;
console.log(a);

if(a%2 == 0){
    console.log("Even");
} else {
    console.log("Odd");
}

//for loop
for(let i = 1;i <= 10;i++){
    console.log(i);
}
console.log("----------------------------------------------------------------------");
//Example 1
for(let i = 9;i >= -10;i--){
    console.log(i);
}
console.log("----------------------------------------------------------------------");
//Example 2
for(let i = 22;i <= 50;i++){
    if(i%2==0){
        console.log(i);
    }
}
//Example 3
console.log("----------------------------------------------------------------------");
for(let i = 25;i <= 85;i++){
    if(i%5==0){
        console.log(i);
    }
}
//Example 4
console.log("----------------------------------------------------------------------");
for(let i = 75;i <=95;i++){
    if(i%5==0){
        console.log(i);
    }
}
//Example 5
console.log("----------------------------------------------------------------------");
for(let i = 25;i >=2;i--){
    if(i%2==0){
        console.log(i,"even");
    }
    else if(i%2==1){
        console.log(i,"odd");
    }
}

console.log("---------------------------------------------------------------------");
for(let i = 12;i >=-20;i--){
    console.log(i);
}
// console.log("---------------------------------------------------------------------");
// for(let i = 20;i <=200;i++){
//     if(i%20==0){
//         console.log(i);
//     }
// }

console.log("---------------------------------------------------------------------");
