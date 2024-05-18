//Demo JS Object Literals
const student = {
    name: "Aakash",
    age: 19,
    result: 91.9
};
console.log(student);
console.log(typeof student);

const item = {
    price: 150,
    discount: 40,
    color: ["Orange","Red"]
};
console.log(item);

console.log(item["price"]);
console.log(item.price);
console.log(item.color);
console.log(item.color[1]);
console.log(student["name"]);
console.log(student.result);

//Js Convert data to string
const obj = {
    1:"a",
    2:"b",
    null:"c",
    undefined: "d",
    true: "e"
};
console.log(obj);
console.log(obj[1]);
console.log(obj[null]);
console.log(obj[true]);

//Add & Update in Objects Literals
const person = {
    name: "Aakash",
    age: 19,
    result: 91.9,
    city: "Ahmedabad",
    country: "India"
};

console.log(person);
console.log(person.city);
person.city = "Vadodara";
console.log(person.city);
console.log(person.gender);
person.gender = "Male";
console.log(person.gender);
console.log(person);
delete person.country;
console.log(person);

//objects in object
const classinfo = {
    Ansh : {
        marks: 90.8,
        grade: "A"
    },
    Rakesh : {
        marks: 60.1,
        grade: "B"
    },
    Ajay : {
        marks: 96.3,
        grade: "A+"
    }
};
console.log(classinfo);
console.log(classinfo.Rakesh);
classinfo.Rakesh.marks = 84.9;
console.log(classinfo.Rakesh.marks);

//objects in Array
const classinfoArray = [
    {
        name: "Ansh",
        marks: 90.8,
        grade: "A"
    },
    {
        name: "Rakesh",
        marks: 60.1,
        grade: "B"
    },
    {
        name: "Ajay",
        marks: 96.3,
        grade: "A+"
    }
];

console.log(classinfoArray);
console.log(classinfoArray[1]);
console.log(classinfoArray[1].name);
classinfoArray[1].grade = "B+"
console.log(classinfoArray[1].grade);
classinfoArray[1].city = "Surat"
console.log(classinfoArray);

//Math
console.log("Math");
console.log(Math.PI);
console.log(Math.E);

//return plus Value
console.log("Plus Value");
console.log(Math.abs(-10));

//return Round Value
console.log("Round Value");
console.log(Math.round(10.33));
console.log(Math.round(10.66));

//Power
console.log("Power Value");
console.log(Math.pow(2,3));
console.log(Math.pow(4,3));

//Round Off to small nearest number
console.log("Round Off to small nearest number");
console.log(Math.floor(10.9));
console.log(Math.floor(10.2));
console.log(Math.floor(-10.2));
console.log(Math.floor(-10.8));

//Round Off to Largest nearest number
console.log("Round Off to Largest nearest number");
console.log(Math.ceil(10.9));
console.log(Math.ceil(10.2));
console.log(Math.ceil(-10.2));
console.log(Math.ceil(-10.8));

//Random Value between 0 to 1 (number 1 exclude)
console.log("Random Value");
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
