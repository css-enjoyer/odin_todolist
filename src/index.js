// This module is in charge of creating the Todo objects and Project objects.
console.log("--index.js is running.");

import { printTest } from "./display.js";

function todo(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
}

function project(title, desc) {
    this.title = title;
    this.desc = desc;
    this.todoList = [];

    this.addToDo = function(todo) {
        this.todoList.push(todo);
    };
    this.removeToDo = function(todo) {
        const index = this.todoList.indexOf(todo);
        if(index > -1) {
            this.todoList.splice(index, 1);
        }
    };
    this.listToDo = function() {
        this.todoList.forEach((todo) => {
            console.log(todo);
        });
    }
}

// const projects = {
//     todoList: [],

//     addToDo: function(todo) {
//         this.todoList.push(todo);
//     },
//     removeToDo: function(todo) {
//         const index = this.todoList.indexOf(todo);
//         if(index > -1) {
//             this.todoList.splice(index, 1);
//         }
//     },
// };

const todo1 = new todo("Buy item", "Milk", "2023-02-20", "medium");
const todo2 = new todo("Buy item", "Shoe", "2023-02-20", "medium");
const project1 = new project("todolist today", "weekend stuff");
project1.addToDo(todo1);
project1.addToDo(todo2);

project1.listToDo();

