//Array

let Name = ["Ajay","Raj","Vijay"];

console.log(Name[0]);
console.log(Name[1]);
console.log(Name[2]);

let info = ["Raj",35, 66.9];

console.log(info[0]);
console.log(info[1]);
console.log(info[2]);
console.log(info[0][1]);


let Name1 = "Dinesh";
Name1[0]="V";
console.log(Name1);

let fruits = ["apple","banana","orange"];
console.log(fruits);
fruits[1] = "mango";
console.log(fruits);

fruits[15] = "pineapple";
console.log(fruits);


//push
let Name2 = ["Rohit","Dipak","Vivek"]
console.log(Name2);
console.log(Name2.push("Rahul"));//add element in lastIndex
console.log(Name2);
console.log(Name2.push("Aryan"));
console.log(Name2);


//pop
console.log(Name2.pop());//Delete element from lastindex
console.log(Name2);


//unshift
console.log(Name2.unshift("Aryan"));//add element in 0th index
console.log(Name2);
console.log(Name2.unshift("Kishan"));
console.log(Name2);

//shift
console.log(Name2.shift());//Delete element from 0th Index
console.log(Name2);

//Example
let followers = ["Mohit","Vijay","Kishan"];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

//indexof
let primarycolor = ["purple","yellow","pink"];
console.log(primarycolor.indexOf("pink"));
console.log(primarycolor.indexOf("blue"));
console.log(primarycolor.indexOf("purple"));
console.log(primarycolor.indexOf("Purple"));

//includes
console.log(primarycolor.includes("Pink"));
console.log(primarycolor.includes("pink"));

//Concat (Add two arrays)
let vehicles = ["Car","Bike","Truck"];

let NextVehicles = ["Train","Buses"];

console.log(vehicles);
console.log(vehicles.concat(NextVehicles));

let allvehicles = vehicles.concat(NextVehicles);
console.log(allvehicles);

//Reverse
let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

console.log(alphabets.reverse());
console.log(alphabets);
console.log(alphabets.reverse());//For Original Array

let fruit = ["apple","banana","orange","mango","pineapple"];

console.log(fruit);
console.log(fruit.length);
console.log(fruit.length-1);