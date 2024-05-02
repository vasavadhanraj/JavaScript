let p = prompt("Enter Your Purchase Amount");

if(p >= 100){
    console.log("Discount of 20");
}
else if(p >= 50){
    console.log("Discount of 10");
}
else if(p < 50){
    console.log("Discount is 0");
} else{
    console.log("Input error");
}
