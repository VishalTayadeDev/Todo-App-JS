// Toto App
/*
1. list - to show all todos
2.add - to add a todo
3.delete - to delete a task
4. quit - to exit the todo
*/

let toDo = [];

let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("--------------------");
        for(let  i=0; i<toDo.length; i++){
            console.log(i, toDo[i]);
        }
        console.log("--------------------");
    }else if(req == "add"){
        let task = prompt("please enter the task you want to add ");
        toDo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx = prompt('please enter the task index');
        toDo.splice(idx,1);
        console.log("task deleted");

    }else{
        console.log("wrong request");
    }
    req = prompt("please enter your request");

}