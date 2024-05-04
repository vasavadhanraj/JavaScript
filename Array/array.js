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

//Slice
let fruits1 = ["apple","banana","orange","mango","pineapple"]
console.log(fruits1.slice(1,3));
console.log(fruits1.slice(2));
console.log(fruits1.slice(-3));
console.log(fruits1.slice(1,-2));
console.log(fruits1.slice());
console.log(fruits1.slice(fruits1.length-1));
console.log(fruits1.slice(fruits1.length));
console.log(fruits1.slice(5));
console.log(fruits1);

//Splice (Splice Change in Original Array)
let fruits2 = ["apple","banana","orange","mango","pineapple","Grapes","Chiku"];
console.log(fruits2.splice(5));
console.log(fruits2);
console.log(fruits2.splice(0,1));
console.log(fruits2);
console.log(fruits2.splice(0,1,"Guava","Papaya"));
console.log(fruits2);
//splice(StartIndex,DeleteCount.Item0...ItemN)
console.log(fruits2.splice(1,0,"Dragonfruit","Watermelon"));
console.log(fruits2);

//sort
console.log(fruits2.sort())
let nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums.sort());

//Array References
let arr = ['a','b','c'];
let arrCopy = arr;
console.log(arrCopy);

arr.push('d');
console.log(arr);
console.log(arrCopy);
arrCopy.pop();
console.log(arr);
console.log(arrCopy);

//const Array (can't reuse the name of array)
const arr1 = ['a','b','c'];
// arr1 = ['d','e','f'];
arr1.push('d');
console.log(arr1);
// arr1 = ['d','e','f'];
console.log(arr1);

//Nested Array (Multi Dimension Array)
let ArrayMulti = [[2,4],[3,6],[4,8]];
console.log(ArrayMulti);
console.log(ArrayMulti.length);
console.log(ArrayMulti[0].length);
console.log(ArrayMulti[0][1]);