// This module is in charge of connecting the tasks to the UI
console.log("--index.js is running.");

import { todo, project } from "./tasks.js";
import { displayProject } from "./todo.js";

const content = document.getElementById("content");
// Project Section
    const projSection = document.createElement("div");
    projSection.classList.add("projSection");
    content.appendChild(projSection);

    // Create button that makes project objects
    const newProjBtn = document.createElement("button");
    newProjBtn.innerText = "New Project";
    newProjBtn.classList.add("newProjBtn");
    newProjBtn.addEventListener("click", () => {
        // Create project object and it's corresponding display.
        const project1 = new project("New Project", "project description...");
        const projBox = document.createElement("div");
        const title = document.createElement("h5");
        const desc = document.createElement("h6");
        title.textContent = project1.title;
        desc.textContent = project1.desc;
        projBox.appendChild(title);
        projBox.appendChild(desc);
        // Append project to the section
        projSection.appendChild(projBox);

        displayProject(project1);
    });
    projSection.appendChild(newProjBtn);

    // ######## TO DO: Show a form on the button click and get the project object's values from there
    // ######## OR ALTERNATIVELY: Implement the same basic logic for the todolist section
    
// Todo Section
export const todoSection = document.createElement("div");
todoSection.classList.add("todoSection");
content.appendChild(todoSection);

