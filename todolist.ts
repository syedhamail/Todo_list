#! /usr/bin/env node

import inquirer from "inquirer";

let todos: string[]= ["Burger","Pizza"];

async function createTodo(todos:string[]){
    do{
        let person = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["Add", "Update", "View","Delete", "Exit"]
        })
        if (person.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
        }
        if (person.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "select an item to update",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo,addTodo.todo];
            todos.forEach(todo => console.log(todo));
        }
        
        if (person.select == "View") {
            console.log("*** TO DO LIST ***");
            todos.forEach(todo => console.log(todo));
        }
        if (person.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "select an item to delete",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(todo));
        }
        if (person.select == "Exit"){
            console.log("Good Bye");
            break;
        }
    } while(true)
    
}

createTodo(todos);

