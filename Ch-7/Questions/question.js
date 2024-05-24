console.log("Practice Questions");
console.log("Question-1");
const square = n =>{
    console.log(n*n);
}

square(15);

console.log("");
console.log("Question-2");
let id = setInterval( ()=>{
    console.log("Hello World");
},2000);
setTimeout(() => {
    clearInterval(id);
},10000);