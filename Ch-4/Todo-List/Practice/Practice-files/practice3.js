//for Loop
for(let i = 1;i <=10;i++){
    console.log(i);
}
console.log("");

//Multiplication Table
let m = 15;
for(let i = 1;i <=10;i++){
    console.log(`${m} * ${i} = ${m * i}`);
}
console.log("");

//Nested Loop
for(let i = 16;i <=20;i++){
    console.log(`Outer Loop ${i}`);
    for(let j = 1;j <= 5;j++){
        console.log(`Inner Loop ${j}`);
    }
}
console.log("");

//While Loop
let a = 99;
let i = 1;
while(i <=10){
    console.log(`${a} * ${i} = ${a * i}`);
    i++;
}
console.log("");

//Array in Loop
let array = ["One","Two","Three","Four"];
console.log(array);
for(let i = 0;i < array.length;i++){
    console.log(array[i]);
}
console.log("");

//Breakpoint
for(let i = 20;i <= 30;i++){
    console.log(i);
    if( i === 25){
        break;
    }
}
console.log("");


//Nested Array in Loop
let array2 = [["Yellow, Orange"],["Blue, Aqua"],["Red, Pink"],["Purple , Magenta"]];
console.log(array2);
for(let i = 0;i < array2.length;i++){
    console.log(array2[i]);
}
console.log("");


//Storing String in Loop
for (loop of array2){
    for (loop2 of loop){
        console.log(loop2);
    }
}
console.log("");
