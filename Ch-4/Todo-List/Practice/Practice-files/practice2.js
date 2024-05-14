//Multiplication Table in Loop
let table = 16;
for(let i = 1;i <=10;i++){
    console.log(`${table} * ${i} = ${table * i}`);
}

console.log("-----------------------------------------------------------------");

//Nested Loop
for(let i = 1; i <=2;i++){
    console.log(`Outer Loop ${i}`);
    for(let j =1;j <=5;j++){
        console.log(`Inner Loop ${j}`);
    }
}

console.log("----------------------------------------------------------------");

//While Loop
let i = 1;
while(i <= 10){
    console.log(`${table} * ${i} = ${table * i}`);
    i++;
}

// Guessing Game
// let favourite = "salaar";
// let guess = prompt("Enter Your Guess");

// while((guess != favourite) && (guess != "quit")){
//     guess = prompt("Sorry, Please Enter Your Next Guess");

//     if (guess === favourite){
//         console.log("Congratulations!!!, Your Guess was Correct");
//     } else {
//         console.log("Sorry, you quit!")
//     }
// }
console.log("----------------------------------------------------------------");

//Break
for(let i = 10;i<=20;i++){
    console.log(i);
    if(i===15){
        break;
    }
}

console.log("----------------------------------------------------------------");

//Array in Loop
let color = ["Yellow","Orange","Red","Blue","Purple"];
console.log(color);
for(let i=0;i < color.length;i++){
    console.log(color[i]);
}

//Nested Array in Loop
let color2 = [["Yellow","Orange"],["Red","Blue"],["Purple"]];
console.log(color2);
for(let i=0;i < color2.length;i++){
    console.log(color2[i]);
}

//Array in Nested Loop
let color3 = [["Yellow","Orange"],["Red","Blue"],["Purple"]];
console.log(color3);
for(let i=0;i < color3.length;i++){
    for(let j=0;j <color3[i].length;j++)
    console.log(color3[i][j]);
}

//For Loop
for(array of color2){
    for(array2 of array){
        console.log(array2);
    }
}