let a = prompt("Enter Your Grade Number");

if (a >= 10) {
  console.log("A++");
} else if (a > 9) {
  console.log("A+");
} else if (a > 8) {
  console.log("A");
} else if (a > 7) {
  console.log("B+");
} else if (a > 6) {
  console.log("B");
} else if (a >= 5) {
  console.log("C+");
} else if (a > 5) {
  console.log("C");
} else if (a > 4) {
  console.log("D");
} else if (a >= 3) {
  console.log("E");
} else if (a < 3) {
  console.log("F");
} else{
    console.log("Input error");
}