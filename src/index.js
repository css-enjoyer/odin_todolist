// This module is in charge of connecting the tasks to the UI
console.log("--index.js is running.");

import { todo, project } from "./projAndTodoClass.js";
import { displayProject } from "./projectModule.js";

// ------------- Body Container (All)
const content = document.getElementById("content");

// ------------- Project Section (Left) ----------------------------------------
const projSection = document.createElement("div");
projSection.classList.add("projSection");
content.appendChild(projSection);
    // Projects array, if array is not empty, display first project. ---------
    const projects = [];
    if(projects.length !== 0) {
        console.log("Display first project");
    } 
    // Create project and add in array button ----------------------------------
    const newProjBtn = document.createElement("button");
    newProjBtn.classList.add("newProjBtn");
    newProjBtn.innerText = "New Project";
    newProjBtn.addEventListener("click", () => {
        const p = new project("New Project", "Project Description");
        projects.push(p);
        listProjects();

        todoSection.innerHTML = "";
        displayProject(p);
    });
    projSection.appendChild(newProjBtn);
    // List each project in array ------------------------------------------ 
    function listProjects() {
        projSection.innerHTML = "";
        projects.forEach(project => {
            const pBox = document.createElement("div");
            pBox.classList.add("pBox");
            projSection.appendChild(pBox);
            pBox.textContent = "Test";
            pBox.addEventListener("click", () => {
                // Display project on click
                console.log("Clicked! Displaying project...");
            });
        });
        projSection.appendChild(newProjBtn);
    }



// ------------- Todo Section (Right) ------------------------------------------
export const todoSection = document.createElement("div");
todoSection.classList.add("todoSection");
content.appendChild(todoSection);







    // // Create button that makes project objects
    // const newProjBtn = document.createElement("button");
    // newProjBtn.innerText = "New Project";
    // newProjBtn.classList.add("newProjBtn");
    // newProjBtn.addEventListener("click", () => {
    //     // Create project object and it's corresponding display.
    //     const project1 = new project("New Project", "project description...");
    //     const projBox = document.createElement("div");
    //     const title = document.createElement("h5");
    //     const desc = document.createElement("h6");
    //     title.textContent = project1.title;
    //     desc.textContent = project1.desc;
    //     projBox.appendChild(title);
    //     projBox.appendChild(desc);
    //     // Append project to the section
    //     projSection.appendChild(projBox);

    //     displayProject(project1);
    // });
    // projSection.appendChild(newProjBtn);

    // ######## TO DO: Show a form on the button click and get the project object's values from there
    // ######## OR ALTERNATIVELY: Implement the same basic logic for the todolist section
    

