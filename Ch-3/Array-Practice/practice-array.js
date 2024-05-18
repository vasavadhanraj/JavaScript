//Array

let boys = ["Aakash","Ajay","Harsh","Rahul","Mahesh","Jay"];
console.log(boys[0]);
console.log(boys[2]);
console.log(boys[1]);
console.log(boys[4]);
console.log(boys[3]);
console.log(boys[5]);

let person = ["Name = Harsh","Age = 26","Weight = 59Kg"];
console.log(person[0][7]);
// console.log(person[0]);
person[0] = "Name = Jay";
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

let  animals = ["dog","cat","horse","camel"];
console.log(animals);

//push
console.log(animals.push("Elephant"));//Add an element in LastIndex
console.log(animals);

//pop
console.log(animals.pop());//Delete an element from LastIndex
console.log(animals);
console.log(animals.pop());
console.log(animals);
console.log(animals.pop());
console.log(animals);

//unshift
console.log(animals.unshift("deer"));//Add an element in 0th Index
console.log(animals);
console.log(animals.unshift("horse"));
console.log(animals);

//shift
console.log(animals.shift());//Delete an element from 0th Index
console.log(animals);

//IndexOf
console.log(animals.indexOf("cat"));
console.log(animals.indexOf("dog"));
console.log(animals.indexOf("deer"));
console.log(animals.indexOf("Deer"));
console.log(animals.indexOf("camel"));

//Includes
console.log(animals.includes("dog"));
console.log(animals.includes("Deer"));
console.log(animals.includes("cat"));

let color1 = ["orange","yellow","red"];
let color2 = ["green","aqua","blue","purple"];
//Concat Add Two Arrays
console.log(color1.concat(color2));
//Reverse
console.log(color1.reverse());
// console.log(color1);
console.log(color1.reverse());//For Original Array

//Slice

let numberinWords = ["one","two","three","four","five","six"];
console.log(numberinWords.slice(4));
console.log(numberinWords.slice());
console.log(numberinWords.slice(2,5));
console.log(numberinWords.slice(2,6));
console.log(numberinWords.slice(5));
console.log(numberinWords.slice(6));
console.log(numberinWords.slice(0,1));
console.log(numberinWords.slice(numberinWords.length-3));
console.log(numberinWords.slice(numberinWords.length));
console.log(numberinWords.slice(numberinWords.length-1));
console.log(numberinWords.slice(numberinWords.length-5));

//Splice Changes in Original Array
let colors = ["aqua","blue","yellow","orange","red","green","purple"];
console.log(colors);
console.log(colors.splice(5));
console.log(colors);
console.log(colors.splice(1,2));
console.log(colors);
console.log(colors.splice(3,0,"magenta","golden","black"));
console.log(colors);
console.log(colors.splice(5,6,"white","gray","yellow"));
console.log(colors);

//Sort
console.log(colors.sort());
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
console.log(numbers.sort());
let nums = [110,220,330,440,550,660,770,880,990,1000];
console.log(nums);
console.log(nums.sort());

let alternatenumbers = [110,220,330,440,550,660,770,880,990,101,202,303,404,505,606,707,808,909,1000]
console.log(alternatenumbers);
console.log(alternatenumbers.sort());

//Array References
let array1 = [1,2,3,4];
let totalarray = array1;
console.log(totalarray);

array1.push(5,6,7);
console.log(array1);
console.log(totalarray);
totalarray.pop();
console.log(array1);
console.log(totalarray);

//const
const array = ["one","two","three","four"];
console.log(array);
array.push("five","six");
console.log(array);
array.pop();
console.log(array);
array.pop();
console.log(array);
array.pop();
console.log(array);

//MultiArray
let MultiArray = [[2,4,6],[8,16,24,32],[14,28],[20,40,60,80],[26,52,78,104,130],[32]];
console.log(MultiArray);
console.log(MultiArray.length);
console.log(MultiArray[3].length);
console.log(MultiArray[0][2]);
console.log(MultiArray[4][4]);