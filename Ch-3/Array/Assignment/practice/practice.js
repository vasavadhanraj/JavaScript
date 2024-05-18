//Question 1
console.log("Question 1");
let arr = [1,2,3,4,5,6,2,3];
num = 2;

console.log(arr);
console.log(arr.splice(1,1));
console.log(arr);
console.log(arr.splice(5,1));
console.log(arr);
console.log("");

//Question 2
console.log("Question 2");
let number = 29471298;
let count = 0;
let copy = number;

while(copy > 0){
    copy = Math.floor(copy/10);
    count++;
}
console.log(count);
console.log("");

//Question 3
console.log("Question 3");
let numbers = 34923986;
let sum = 0;
let copy1 = numbers;
while(copy1 > 0){
    digit = copy1%10;
    sum+= digit;
    copy1 = Math.floor(copy/10);
}
console.log(sum);
console.log("");

//Question 4
console.log("Question 4");
let n = 7;
// let n = prompt("Enter Your Number : ");
//If number is negative
if(n < 0){
    console.log("Error! Factorial Number Negative does not exists.");
} 
 //If number is 0
  else if (n === 0){
    console.log(`The factorial of ${n} is 1`);
}
 //If number is positive
 else{
    let fact = 1;
    for(let i = 1;i <= n;i++){
        fact *= i;
    }
    console.log(`The factorial of ${n} is ${fact}`);

}
console.log("");

//Question 5 
console.log("Question 5");
let array = [92,24,66,45,89,120,50,-200];
let largest = 0;
for(let i = 0;i < array.length;i++){
    if(largest < array[i]){
        largest = array[i];
    }
}
console.log(largest);
