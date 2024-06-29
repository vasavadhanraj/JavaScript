//json (Java Script Object Notation)
//json to javascript object
let jsonRes =  '{"Fact":"A cat`s hearing is much more sensitive than humans and dogs.", "length": 60}';

// console.log(jsonRes);
let validRes = JSON.parse(jsonRes);

// console.log(validRes);
console.log(validRes.fact);
console.log("----------------------------------------");

// javascript object to JSON
let obj = {
    name: 'John',
    age: 20
}

let jsonObj = JSON.stringify(obj);
console.log(jsonObj);

console.log("----------------------------------------");

let url = "https://catfact.ninja/fact";
// fetch(url).then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(`Date1 : ${data.fact}`);
//     return fetch(url);
// }).then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(`Date2 : ${data.fact}`);
// }).catch((error)=>{
//     console.log(error);
// });

// // Async-await

async function getFact(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }catch(error){
        console.log(`Error : ${error}`);
    }
}

getFact();