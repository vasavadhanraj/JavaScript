//forEach Loop
let arr = [1,2,3,4,5];

arr.forEach(function(el){
    console.log(el);
});
console.log("-----------------");
arr.forEach((el) =>{
    console.log(el);
});

// console.log("-----------------");
// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);
console.log("-----------------");

let arr1 = [{
    name : "Aakash",
    marks : 88
},{
    name : "Ajay",
    marks : 97
},{
    name : "Karan",
    marks : 74
}];

arr1.forEach((student) =>{
    console.log(student.marks);
});
console.log("-----------------");

//Map Function
let num = [1,2,3,4,5];

let double = num.map((el) =>{
    return el*2;
});

console.log(double);
console.log("-----------------");

let gpa = arr1.map((el) =>{
    return el.marks/10;
});

console.log(gpa);
console.log("-----------------");

//Filter Function

let nums = [1,3,2,4,5,6,7,8,9,12,2];
let even = nums.filter((el) =>(el%2==0));
console.log(even);
console.log("-----------------");

//evenly (run in console)
//even
let number = [1,2,3,4,5].every((el) => el%2==0); //return false
console.log(number);
let number2 = [2,4,6].every((el) => el%2==0); //return true
console.log(number2);
console.log("-----------------");

//odd
let number3 = [1,3,5].every((el) => el%2!=0); //return true
console.log(number3);
let number4 = [1,2,4,6].every((el) => el%2!=0); //return false
console.log(number4);
console.log("-----------------");

//some (run in console)
//even
let number5 = [1,2,3,4,5].some((el) => el%2==0); //return true
console.log(number5);
let number6 = [2,4,6].some((el) => el%2==0); //return true
console.log(number6);
let number7 = [1,3,5,7].some((el) => el%2==0); //return false
console.log(number7);
console.log("-----------------");

//odd
let number8 = [1,3,5].some((el) => el%2!=0); //return true
console.log(number8);
let number9 = [1,2,4,6].some((el) => el%2!=0); //return true
console.log(number9);
let number10 = [2,4,6].some((el) => el%2!=0); //return false
console.log(number10);
console.log("-----------------");

//reduce function
let num1 = [1,2,3,4,5];

let finalVal = num1.reduce((res,el) => (res+el));

console.log(finalVal);
console.log("-----------------");

//Find Maximum Number in array
let arrayFind = [1,5,3,6,8,2,4,8,9,0,64,29];
//using Loop
// let max = -1;
// for(let i = 0;i<arrayFind.length;i++){
//     if(max<arrayFind[i]){
//         max=arrayFind[i];
//     }
// }
// console.log(max);

//Using reduce Function
let ans = arrayFind.reduce((max,el) =>{
    if(max<el){
        return el;
    } else{
        return max;
    }
});

console.log(ans);
console.log("-----------------");

//Default Parameter
function sum(a,b = 10){
    return a+b;
}

console.log(sum(10));
console.log(sum(10,20));
console.log("-----------------");

//Math Function
console.log(Math.min(1,2,3,4,5,6,7,8,9,0));
console.log("-----------------");

//Spread Function
let array1 = [1,2,3,4,5];
let array2 = [...array1,6,7,8,9,10];

console.log(array2);
console.log(Math.min(...array1));
console.log(Math.max(...array1));
console.log(array1);
console.log(...array1);
console.log("Chapter-8");
console.log(..."Chapter-8");

let chars = [..."Chapter"];
console.log(chars);
console.log("-----------------");


//Array Literals
let oddNum = [1,3,5,7,9];
let evenNum = [2,4,6,8,0];

let allNum = [...oddNum,...evenNum];

console.log(allNum);
console.log("-----------------");


//Object Literals
const data = {
    email: "ss7051017@gmail.com",
    password: "abcd@1234"
};

let dataCopy = {
    ...data,
    id: 123,
    country: "India"
};

console.log(data);
console.log(dataCopy);

let ary = [1,2,3,4,5,6,7,8,9,0];//array -> value
let data1 = {...ary};//obj -> key:value
let data2 = {..."Aakash"};

console.log(data1);
console.log(data2);
console.log("-----------------");

//Rest
function plus(...args){
    for(let i=0;i<args.length;i++){
        console.log(`You give us : ${args[i]}`);
    }
}

plus(1,2,3,4,5);
console.log("-----------------");
plus(1,2,3,4);
console.log("-----------------");
plus(1,2,3);
console.log("-----------------");
plus(1,2);
console.log("-----------------");
plus(1);
console.log("-----------------");

function plus1(...args){
    return args.reduce((sum,el) => sum+el);
}

console.log(plus1(1,2,3,4,5));
console.log("-----------------");
console.log(plus1(1,2,3,4));
console.log("-----------------");
console.log(plus1(1,2,3));
console.log("-----------------");
console.log(plus1(1,2));
console.log("-----------------");
console.log(plus1(1));
console.log("-----------------");

//Detructuring
let name = ["IronMan","Hulk","SpiderMan","DeadPool"];
let [winner,runnerup,...other] = name;
console.log(winner);
console.log(runnerup);
console.log(other);

//Detructuring with Object
const student = {
    name : "Ajay",
    age: 24,
    education: "BCA Graduation",
    subjects: ["Python","C++","C","Java","SQL","DBMS",".Net Using C#"],
    username: "Ajay@2000",
    password: "Ajay@2024"
};

let {username, password,city1} = student;
console.log(username);
console.log(password);
console.log(city1);
//use different name from key
let {education: edu,subjects,city="Surat"} = student;
console.log(edu);
console.log(city);
console.log(subjects);