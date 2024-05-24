console.log("Question-1");
let array = [2,5,8,10,45];
let square = array.map((el) => {
    return el*2;
});
console.log(square);
console.log(`Average of the array = ${square[0]+square[1]+square[2]+square[3]+square[4]/5}`);
// let Avg = array.map((el) => {
    // return el+el;
// });
// console.log(Avg);
console.log("");


console.log("Question-2");
let array2 = [50,10,15,5,20,-5,55];
let equalTo = array2.map((el) =>{
    return el==5;
});

console.log(equalTo);
console.log("");


console.log("Question-3");
let originalArray = ["Example1","Example2","Example3","example4"];
let newArray = originalArray.map((el) =>{
    // console.log(el.toUpperCase());
    return el.toUpperCase();
});
console.log(newArray);
console.log("");

console.log("Question-4");
function doubleAndReturnArgs() {
    let array = [11,22,33,44,55];
    let args = [12,24,36,48];
    let newArr = array.map((el) =>{
        return el;
   });
    console.log(newArr);
    console.log(args);
   let next = args.map((el) =>{
    return el*el;
   });
   console.log(next);

}
doubleAndReturnArgs();
console.log("");

console.log("Question-5");
function mergeObjects() {
    const object1 = {
        name: "Aman",
        age: 27,
    };
    const object2 = {
        education: "B.Tech Graduation",
        city: "Ahmedabad",
        country: "India",
        favColour: "Blue"
    };

    let merge = {
        ...object1,
        ...object2
    };
    console.log(merge);
}

mergeObjects();