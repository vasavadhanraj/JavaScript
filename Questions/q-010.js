let secretno = 39;
console.log()
let simpleno = prompt("Enter Your Simple Number");
console.log(`Simple Number Guessing Game`);
// console.log("");

if(simpleno > 39){
    console.log(`Secret Number is Higher Than Your Guess Number.`);
}

if(simpleno < 39){
    console.log(`Secret Number is Lower Than Your Guess Number.`);
}

if(simpleno == secretno){
    console.log(`Secret Number is Correct.`);
}
