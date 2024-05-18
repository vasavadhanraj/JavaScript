let max = prompt("Enter Max Value : ");
let guess = prompt("Enter Your Guess : ");
let value = Math.floor(Math.random()*max)+1;

while(true){
    if(guess == "quit"){
        console.log("You Quit The Guessing Game!...");
        break;
    }

    if(guess == value){
        console.log(`Congratulation's!!! , Your Guess ${value} is Correct.`);
        break;
    } else if(guess < value){
        console.log("Your Guess is smaller, Please Try Again...")
    } else if(guess > value){
        console.log("Your Guess is Bigger, Please Try Again...")
    } else{
        console.log("Invalid Guess");
    }
    guess = prompt("Enter Your Guess");

}