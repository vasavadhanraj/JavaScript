//Array

let students = ["Ajay","Aakash","Anand"];

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

let info = ["Vraj",22,85.2]

console.log(info[0]);
console.log(info[1]);
console.log(info[2]);
console.log(info[0][3]);

// let Name = "Ansh";
// Name[0] = "Va";
// console.log(Name);

let Name1 = "rohit";
Name1[0] = "M";
console.log(Name1[0]);

let fruits = ["apple","pineapple","orange"];
console.log(fruits);
fruits[1] = "watermelon";
console.log(fruits);

fruits[6] = "grapes";
console.log(fruits);

//push
let vehicles = ["Bikes","Cars","Buses"];
console.log(vehicles);
console.log(vehicles.push("Train"));//add element in lastIndex
console.log(vehicles);
console.log(vehicles.pop());//Delete element from lastindex
console.log(vehicles);
console.log(vehicles.pop());
console.log(vehicles);

//unshift
console.log(vehicles.unshift("Motor Boats"));//add element in 0th index
console.log(vehicles);
console.log(vehicles.shift());//Delete element from 0th Index
console.log(vehicles);
console.log(vehicles.shift());
console.log(vehicles);

//Index of
let colors = ["red","yellow","blue","green","pink","purple","aqua"];
console.log(colors);
console.log(colors.indexOf("yellow"));
console.log(colors.indexOf("Yellow"));
console.log(colors.indexOf("green"));
console.log(colors.indexOf("red"));
console.log(colors.indexOf("pink"));
console.log(colors.indexOf("Orange"));
console.log(colors.indexOf("aqua"));

//Includes
console.log(colors.includes("Yellow"));
console.log(colors.includes("red"));
console.log(colors.includes("Blue"));
console.log(colors.includes("blue"));
console.log(colors.includes("Golden"));

//Concat (Add Two Arrays)
let color1 = ["orange","yellow","red"];
let color2 = ["aqua","blue","purple"];

console.log(color1);
console.log(color2);
console.log(color1.concat(color2));

//Reverse
let numbers = [11,22,33,44,55,66,77,88,99,111,222,333,444,555];

console.log(numbers);
console.log(numbers.reverse());
console.log(numbers);
console.log(numbers.reverse());//For Original Array


let str = "Shivam";
str[0] = "a";
console.log(str);