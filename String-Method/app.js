let msg = "     hello     ";

console.log(msg);
console.log(msg.trim());

let msg1 = "     hel lo     ";

console.log(msg1);
console.log(msg1.trim());
console.log(msg1);

let msg2 = "Vasava Dhanraj J";
console.log(msg2.toLowerCase());
console.log(msg2.toUpperCase());

let msg3 = "ILoveCoding";

console.log(msg3.indexOf("Love"));
console.log(msg3.indexOf("O"));
console.log(msg3.indexOf("z"));//not in string that's why output is -1
console.log(msg3.indexOf("d"));

let msg4 = "     hello     ";
// let NewMsg = msg4.trim();
// console.log("After Trim : ",NewMsg);
// NewMsg = NewMsg.toUpperCase();
// console.log("After UpperCase : ",NewMsg);

let NewMsg = msg4.trim().toUpperCase();
console.log("After Trim and UpperCase : ",NewMsg);// Method Chaining

//slicing
let msg5 = "ILoveCoding";
console.log(msg5.slice(1,4));
console.log(msg5.slice(5));
console.log(msg5.slice(-3));

//Replace
let msg6 = "ILoveCoding";
console.log(msg6);
console.log(msg6.replace("Coding","Programming"));
console.log(msg6.replace("o","X"));

//Repeat
let msg7 = "ILoveCoding ";
console.log(msg7.repeat(3));