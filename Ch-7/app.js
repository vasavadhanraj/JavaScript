const student = {
    name : "Rohit",
    age : 24,
    eng : 88,
    math : 97,
    phys : 84,
    getAvg() {
        let avg = (this.eng + this.math + this.phys)/3;
        console.log(avg);
    }
}

console.log(student);
console.log(student.name);
console.log(student.getAvg());
console.log("---------------------------");
console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);//variable a is not define
}catch{
    console.log("caught a error... a is not define");
}
try{
    console.log(a);//variable a is not define
}catch(err){
    console.log("caught a error... a is not define");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

console.log("---------------------------");
//Arrow Function
const add = (a,b) => {
    console.log(a+b);
}
add(10,15);
const cube = c => {
    console.log(c*c*c);
}
cube(2);
const hello = () =>{
    console.log("Hello..");
}
hello();

//impliclit return
const mul = (a,b) => (a*b);
console.log(mul(10,15));
console.log("---------------------------");
//timeout function
console.log("hi there!");

setTimeout( ()=> {
    console.log("Chapter 7 - EXAMPLE");
},4000);

console.log("Welcome");
console.log("---------------------------");
//interval function
console.log("hi there!");

let id = setInterval( ()=>{
    console.log("Chapter 7 - EXAMPLE(2)");
},2000);

console.log("Welcome");
//clear Interval
clearInterval(id);