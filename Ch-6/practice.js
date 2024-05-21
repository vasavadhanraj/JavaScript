function hello(){
    console.log("Hello!");
}

hello();

function printName() {
    console.log("Vasava Dhanraj J");
}

printName();

function combined(name,age) {
    console.log(`Hii, My Name is ${name} and My age is ${age}.`);
}
combined("Harsh Patel",33);
combined("Raj Sharma");
combined("Ashok Gamit",49);

function num() {
    for(let i = 30;i <=85;i++){
        if(i%5==0){
            console.log(i);
        }
    }
}

num();

function person(name2,fruit,colour) {
    console.log(`Hello, I am ${name2}. My Favourate Fruit is ${fruit} and My Favourate Color is ${colour}.`);
}

person("Aakash","Chiku","Yellow");
person("Parth","Grapes","Purple");
person("Mahesh","Mango","Blue");

function num2() {
    for(let i = 201;i <=211;i++){
        if(i%2==0){
            console.log(`This Number is Odd ${i}.`);
        }else if(i%2==1){
            console.log(`This Number is Even ${i}.`);
        }
    }
}
num2();