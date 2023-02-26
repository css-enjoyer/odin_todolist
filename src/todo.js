
import { todo, project } from "./tasks.js";
import { todoSection } from "./index.js";

export function displayProject(project) {
    const project1 = project;
    const projTitle = document.createElement("h1");
    projTitle.textContent = project.title;
    const projDesc = document.createElement("h4");
    projDesc.textContent = project.desc;

    todoSection.appendChild(projTitle);
    todoSection.appendChild(projDesc);

    const newTdBtn = document.createElement("button");
    newTdBtn.innerText = "New Todo";
    newTdBtn.classList.add("newTdBtn");
    newTdBtn.addEventListener("click", () => {
        const todo1 = new todo("Do tasks", "Task", "2023-23-23", "medium");
        project1.addToDo(todo1);

        const tdBox = document.createElement("div");
        tdBox.classList.add("tdBox");
        const tdTitle = document.createElement("h4");
        const tdDesc = document.createElement("h5");
        const tdDate = document.createElement("h5");
        const tdPrio = document.createElement("h6");
        tdTitle.textContent = todo1.title;
        tdDesc.textContent = todo1.desc;
        tdDate.textContent = todo1.dueDate;
        tdPrio.textContent = todo1.priority;
        tdBox.appendChild(tdTitle);
        tdBox.appendChild(tdDesc);
        tdBox.appendChild(tdDate);
        tdBox.appendChild(tdPrio);
        todoSection.appendChild(tdBox);
    });
    todoSection.appendChild(newTdBtn);
}