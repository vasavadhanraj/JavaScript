let a = prompt("Enter Your Age");

if(a <= 12){
    console.log("Ticket Price 5");
}
else if(a <= 18){
    console.log("Ticket Price 10");
}
else if(a <= 60){
    console.log("Ticket Price 20");
}
else if(a > 60){
    console.log("Ticket Price 15");
}else{
    console.log("Input error");
}
