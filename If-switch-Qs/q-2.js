let num = 12;
console.log("num =" ,num);

if( (num%3 == 0) && ((num + 1 == 15) || (num - 1 == 11))){
    console.log("Safe");
} else{
    console.log("UnSafe");
}




// console.log(!(num + 1 == 15) && num - 1 == 11 && num / 3 == 4)
// let value1 = num + 1;
// console.log("value1 = ",value1);
// let value2 = num - 1;
// console.log("value2 = ",value2);
// let value3 = num / 3;
// console.log("value3 = ",value3);
// if(value1 == 15 , value2 == 11 , value3 == 4){
//     console.log("Safe");
// } else{
//     console.log("Unsafe");
// }