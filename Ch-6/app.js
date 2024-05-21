function hello(){
    console.log("Hello!");
}

hello();

function printName() {
    console.log("Vasava Dhanraj J");
}

printName();

function print1to5(){
    for(let i = 1;i <=5;i++){
        console.log(i);
    }
}

print1to5();

function printInfo(name,age) {
    console.log(`${name} age is ${age}.`);
}

printInfo("Aakash Sharma",23);
printInfo("Vicky Chaudhary");

function sum(a,b){
    console.log(`Sum of ${a} & ${b} is ${a+b}.`)
}

sum(16,19);

//return Keyword
function sumR(a,b){
    console.log("hello");
    return a+b;
    console.log("hello1");
}

let sumP = sumR(17,51);
console.log(sumP);

//Scope

let sum1 = 15;   //Global Scope

function ifSum(a,b){
    let sum = a+b; //function Scope
    console.log(sum);

}
ifSum(10,15);
console.log(sum1);

for(let i=1;i<=5;i++){
    console.log(i);         //{} block Scope
}

let age = 23;
if(age>=18){
    let str = "Adult";      //block Scope
    console.log(str);
}

function outerFun(){
    let x = 10;
    let y = 20;
    function innerFun(){           //function scope
        console.log(x+y);          //lexical scope
    }
    innerFun();
}
outerFun();
// innerFun();

//Function Expression

const plus = function(a,b){
    return a+b;
}

console.log(plus(2,5));
let num1 = plus(5,7);
console.log(num1);

//Higher Order Function

function multiGreet (func,count) {
    for(let i = 1;i <= count;i++){
        func();
    }
}

function greeting(){
    console.log("Hello");
}

multiGreet(greeting,5);

//Higher Order Function  (Return)

function oddOrEvenFactory(request){
    if (request == "odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    } else if (request == "even"){
        let odd = function(n){
            console.log(n%2==0);
        }
        return odd;
    } else{
        console.log("Wrong Request...");
    }
}

let req = "odd";
let func = oddOrEvenFactory(req);

//check odd
console.log(func(10));
console.log(func(11));

let req1 = "even";
let func1 = oddOrEvenFactory(req1);

//check odd
console.log(func1(10));
console.log(func1(11));

//method
let calculator = {
    num: 7,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    multi: function(a,b){
        return a*b;
    }
}

console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.add(5,6));
console.log(calculator.sub(5,6));
console.log(calculator.multi(5,6));

let calculator1 = {
    num: 7,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    multi(a,b){
        return a*b;
    }
}
console.log(calculator1);
console.log(calculator1.num);
console.log(calculator1.add);
console.log(calculator1.add(5,6));
console.log(calculator1.sub(5,6));
console.log(calculator1.multi(5,6));
