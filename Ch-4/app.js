//for loop
for(let i = 1;i <= 10;i++){
    console.log(i);
}

//Multiplication Table in Loop
console.log("---------------------------------------------------------------------");
let n =12;
for(let i = 1;i <=10;i++){
    console.log(`${n} * ${i} = ${n * i}`);
}
console.log("---------------------------------------------------------------------");

//Nested Loop
for (let i = 1;i <=3;i++){
    console.log(`Outer Loop ${i}`);
    for (let j = 1;j <=3;j++) {
        console.log(`Inner Loop ${j}`);        
    }
}
console.log("---------------------------------------------------------------------");

//While Loop
let i = 1;

while (i <= 10){
    console.log(`${n} * ${i} = ${n * i}`);
    i++;
}
console.log("---------------------------------------------------------------------");

//Guess Game 
//Topic Favourite Movie
// let fav = "ironman";
// let guess = prompt("Enter Your Guess");

// while((guess != fav) && (guess != "quit")) {
//     guess = prompt("Sorry, Please Enter Your New Guess : ");

//     if (guess === fav) {
//         console.log("Congratulations!");
//     } else{
//         console.log("Sorry you quit!");        
//     }
// }

//Breakpoints
for (let i = 1;i <= 10;i++){
    console.log(i);
    if(i === 5){
        break;
    }
}
console.log("---------------------------------------------------------------------");

//Array in Loop
let arr = ["Prakash","Jay","Raj","Aakash","Mohan","Shubham"];
console.log(arr);
for(let i = 0;i < arr.length;i++){
    console.log(arr[i]);
}
console.log("---------------------------------------------------------------------");

//Nested Array in Loop
let arr1 = [["Prakash","Jay"],["Raj","Aakash"],["Mohan","Shubham"]];
console.log(arr1);
for(let i = 0;i < arr1.length;i++){
    console.log(arr1[i]);
}
console.log("---------------------------------------------------------------------");

//Nested Array in Nested Loop
let arr2 = [["Prakash","Jay"],["Raj","Aakash"],["Mohan","Shubham"]];
console.log(arr2);
for(let i = 0;i < arr2.length;i++){
    for (let j=0;j < arr2[i].length;j++){
    console.log(arr2[i][j]);
    }
}
console.log("---------------------------------------------------------------------");

//For Loop
for(ar of arr1){
    for (array2 of ar){
        console.log(array2);
    }
}