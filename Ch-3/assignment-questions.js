let array1 = [7,9,0,-2];
let n = 3
if(n >= 0){
    console.log(array1.slice(0,n));
}else{
    console.log("Invalid");
}

// console.log(array1.slice(0,3));

let array2 = [7,9,0,-2];
let n2 = 3
if(n >= 0){
    console.log(array2.slice(length-n2));
}else{
    console.log("Error");
}

let array3 = "";
console.log(array3);
console.log(array3.length);
// console.log(array3.includes(""));
if (array3 == ""){
    console.log("Blank")
}else{
    console.log("Not Blank")
}

let array4 = "STUDENT";
let n3 = 1;
console.log(array4);
if (array4 == array4.toLowerCase()){
    console.log("It is Lower Case");
}else{
    console.log("It is not Lower Case");
}

let array5 = "JavaScript";
console.log(array5.slice(0,4));
console.log(array5.slice(4,10));

let array6 = [15,25,35,45,65];
let n4 = 4;
console.log(array6);

if(array6.length != 0){
    console.log(array6.slice(0,n4));
    console.log("Elements exists in an array");
// }else if(array6 != 0){
//     console.log("Does not exist");
}else{
    console.log("Not Exists");
}
// let array6 = ["one","two","three","four"];