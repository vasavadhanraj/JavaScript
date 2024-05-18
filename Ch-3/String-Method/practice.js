//trim

let word = "                 Welcome                 ";

console.log(word);
console.log(word.trim());

let word2 = "                 We l come                 ";

console.log(word2);
console.log(word2.trim());

//Text Changing to Uppercase And Lowercase

let word3 = "Welcome To Our Website";

console.log(word3);
console.log(word3.toUpperCase());
console.log(word3.toLowerCase());

//indexOf

let word4 = "BeCareFull";

console.log(word4);
console.log(word4.indexOf("Care"));
console.log(word4.indexOf("full"));
console.log(word4.indexOf("Full"));
console.log(word4.indexOf("L"));
console.log(word4.indexOf("Be"));

//Method Chaining

let word5 = "    Computer     ";

let word6 = word5.trim().toUpperCase();

console.log("After Trim and UpperCase, We get :", word6);

//slicing

let word7 = "BeCareFull";

console.log(word7.slice(2,6));
console.log(word7.slice(6,10));
console.log(word7.slice(0,6));
console.log(word7.slice(5,6));
console.log(word7.slice(2,10));

//replace

let word8 = "Be Care Full";

console.log(word8.replace("Care","Use"));
console.log(word8.replace("Care Full","Practical"));
console.log(word8.replace("Care","Help"));

//repeat

let word9 = "Be Care Full! "

console.log(word9.repeat(2));
console.log(word9.repeat(6));