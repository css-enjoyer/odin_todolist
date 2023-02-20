// This module is in charge of connecting the tasks to the UI
console.log("--index.js is running.");

import { todo, project } from "./tasks.js";
// import { displayTodo, displayProject } from "./display.js";

const content = document.getElementById("content");
// Project Section
    const projSection = document.createElement("div");
    projSection.classList.add("projSection");
    content.appendChild(projSection);
    
// Todo Section
    const todoSection = document.createElement("div");
    todoSection.classList.add("todoSection");
    content.appendChild(todoSection);


