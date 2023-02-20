// This module is in charge of connecting the tasks to the UI
console.log("--index.js is running.");

import { todo, project } from "./tasks.js";
// import { displayTodo, displayProject } from "./display.js";

const content = document.getElementById("content");
// Project Section
    const projSection = document.createElement("div");
    projSection.classList.add("projSection");
    content.appendChild(projSection);

    const newProj = document.createElement("button");
    newProj.classList.add("newProjBtn");
    newProj.addEventListener("click", () => {
        // const project1 = new project("todolist today", "weekend stuff");
        
        const projBox = document.createElement("div");
        // projBox.appendChild(document.createElement("h1").innerHTML = project1.title);
        projSection.appendChild(projBox);
    });
    projSection.appendChild(newProj);
    
// Todo Section
    const todoSection = document.createElement("div");
    todoSection.classList.add("todoSection");
    content.appendChild(todoSection);


