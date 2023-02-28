console.log("--projectModule.js is running.");

import { todoSection, listProjects } from "./index.js";

export function displayProject(project) {
    const projContent = document.createElement("div");
    projContent.classList.add("projContent");
    todoSection.appendChild(projContent);

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = project.title;
    projContent.appendChild(title);
    title.addEventListener("click", () => {
        const oldText = title.innerText;
        const input = document.createElement("input");
        input.type = "text";
        input.value = oldText;

        title.innerText = "";
        title.appendChild(input);

        input.addEventListener("blur", () => {
            if(input.value.trim() === "") {
                title.innerText = "Untitled Project";
                project.setTitle(title.innerText);
                input.focus();
            } else {
                title.innerText = input.value;
                project.setTitle(input.value);
            }
            listProjects();
        });
        input.focus();
    });

    const desc = document.createElement("h4");
    desc.classList.add("desc");
    desc.textContent = project.desc;
    projContent.appendChild(desc);
    desc.addEventListener("click", () => {
        const oldText = desc.innerText;
        const input = document.createElement("input");
        input.type = "text";
        input.value = oldText;

        desc.innerText = "";
        desc.appendChild(input);

        input.addEventListener("blur", () => {
            if(input.value.trim() === "") {
                desc.innerText = "Untitled Project";
                project.setDesc(desc.innerText);
                desc.focus();
            } else {
                desc.innerText = input.value;
                project.setDesc(input.value);
            }
            listProjects();
        });
        input.focus();
    });

    return projContent;
}

















// export function displayProject() {
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
// }