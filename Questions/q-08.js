let time = prompt("Enter Time");

if (time < 4) {
  console.log("Good Night");
} else if (time < 12) {
  console.log("Good Morning");
} else if (time < 16) {
  console.log("Good Afternoon");
} else if (time < 21) {
  console.log("Good Evening");
} else if (time <= 24) {
  console.log("Good Night");
} else{
    console.log("Invalid");
}
