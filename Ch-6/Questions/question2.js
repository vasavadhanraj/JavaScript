console.log("Question-1");
function element() {
    let array = [10,34,391,90,293,192];
    let largest = 0;

    for(let i=0;i<array.length;i++){
        if(largest < array[i]){
            largest = array[i];
        }
    }
    console.log(largest);
}

element();

console.log("");

console.log("Question-2");
function value() {
    let str = "abcdabcdefgggh";
    str2 = str.slice(0,4).concat(str.slice(8,11)).concat(str.slice(13));
    console.log(str2);
    // console.log(str.slice(0,4));
    // console.log(str.slice(7,11));
    // console.log(str.slice(13));
}

value();
console.log("");

console.log("Question-3");
function LongestName() {
    let countryname = ["Australia","Germany","United States of America"];
    let country = 9;
    for(let i=0;i<countryname.length;i++){
        if(country < countryname[i]){
            console.log(countryname);
        }
    }
}

LongestName();
// if(countryname.length === 0){
//     return ("Input array is empty");
// }
// const sortedNames = countryname.sort(a,b) = b.length - a.length




console.log("");

console.log("Question-4");
function getVowels(str1) {
    let vowels = "aeiouAEIOU";
    let vcount = 0;
    for(let i = 0;i <str1.length;i++){
        if(vowels.indexOf(str1[i]) !== -1){
            vcount += 1;
        }
    }
    console.log(vcount);
}

getVowels("America");






console.log("");

console.log("Question-5");
function random(){
    console.log(Math.ceil(Math.random()*25));
}

random();