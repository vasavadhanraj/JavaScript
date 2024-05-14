let todo = [];
let req = prompt("Enter Your Request : ");

while (true){
    if(req == "quit"){
        console.log("Quiting the app");
        break;
    }

    if(req == "list"){
        console.log("---------------")
        for(let i = 0;i < todo.length;i++){
            console.log(i , todo[i]);
        }
        console.log("---------------")
    } else if(req == "add"){
        let task = prompt("Enter Your Task : ");
        todo.push(task);
        console.log("Task Added");
    } else if(req == "delete"){
        let idx = prompt("Enter Your Task Index : ");
        todo.splice(idx , 1);
        console.log("Task Deleted");
    } else{
        console.log("Invalid Request");
    }

    req = prompt("Enter Your Request : ");
}