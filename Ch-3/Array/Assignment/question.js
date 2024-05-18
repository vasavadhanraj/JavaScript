//Question 1
console.log("Question 1");
let array = [1,2,3,4,5,6,7,4,8,9,4];
let num = 4;
console.log(array);

for(let i = 0;i <=array.length;i++){
    if(array[i]==num){
        array.splice(i,1);
    }
}
console.log(array);
console.log("");

console.log("Question 2");
let number = 23929293;
let count = 0;
let copy = number;

while(copy>0){
    copy = Math.floor(copy/10);
    count++;
}
console.log(count);
console.log("");

console.log("Question 3");
let numbers = 349029020;
let sum = 0;
let copy1 = numbers;

while(copy1>0){
    digit = copy1%10;
    sum += digit;
    copy1 = Math.floor(copy/10);
}
console.log(sum);
console.log("");

console.log("Question 4");
let n = 5;
let factorial = 1;

for(let i = 1;i <=n;i++){
    factorial *= i;
}
console.log(`The Factorial of ${n} is ${factorial}`);
console.log("");


console.log("Question 5");
let array1 = [10,25,15,35,55,250,45,80,69,120,100,190,199];
let largest = 0;

for(let i = 0;i <array1.length;i++){
    if(largest < array1[i]){
        largest = array1[i];
    }
}
console.log(largest);