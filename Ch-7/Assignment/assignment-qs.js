console.log("Question-1");
const arrayAvg = n => {
    n = [29,11,84,12];
    console.log(n);
    console.log(`Total Average = ${n[0]+n[1]+n[2]+n[3]/4}.`);
}

arrayAvg();

console.log("Question-2");
const Even = n => {
    if(n%2==0){
        console.log(`It is an Even Number ${n}`);
    } else{
        console.log(`It is not an Even Number ${n}`);

    }
}

Even(232);

console.log("Question-3");
const object = {
    message: 'Hello, World!',

    logMessage () {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

console.log("Question-4");
let length = 4;
function callback() {
    console.log(this.length);
}

const object2 = {
    length: 5,
    method(callback) {
        callback();
    },
};

object2.method(callback, 1, 2);