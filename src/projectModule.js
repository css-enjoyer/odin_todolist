console.log("projectModule.js");

import { todoSection } from "./index.js";

export function displayProject(project) {
    const projContent = document.createElement("div");
    projContent.classList.add("projContent");
    todoSection.appendChild(projContent);

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = project.title;
    projContent.appendChild(title);

    const desc = document.createElement("h4");
    desc.classList.add("desc");
    title.textContent = project.desc;
    projContent.appendChild(desc);

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