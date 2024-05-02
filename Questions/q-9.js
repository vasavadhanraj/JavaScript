let body = 1;
let weight = prompt("Enter Your Weight");
let height = prompt("Enter Your Height");
// let height = 1.5;
console.log(`height = ${height}`);
console.log(`weight = ${weight}`);
let value = weight / (height * height)
console.log(`Body Mass Index(BMI) = ${value}`);

if(value >= 40){
    console.log("");
    console.log("Obese CLass 3");
}

else if(value >= 35){
    console.log("Obese CLass 2");
}

else if(value >= 30){
    console.log("Obese CLass 1");
}

else if(value >= 25){
    console.log("Overweight");
}

else if(value >= 18.5){
    console.log("Normal Weight");
}

else if(value < 18.5){
    console.log("UnderWeight");
}