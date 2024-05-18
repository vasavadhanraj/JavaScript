let max = prompt("Enter Your Maximum Value : ");
let guess = prompt("Enter Your Guess Value : ");
let value = Math.floor(Math.random()*max)+1;

while(true){
    if(guess == "quit"){
        console.log("You Quit the Guessing Game");
        break;
    }

    if(guess == value){
        console.log(`Congratulations !!!, Your Guess ${value} is Correct.`);
        break;
    } else if(guess < value){
        console.log("Your Guess is Smaller , Please Try Again...");
    } else if(guess > value){
        console.log("Your Guess is Larger , Please Try Again...");
    } else{
        console.log("Invalid Guess");
    }

    guess = prompt("Enter Your Guess Value : ");

}