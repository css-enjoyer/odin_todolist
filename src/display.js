// This module is in charge of generating the UI
console.log("--display.js is running.");

document.getElementById("content");

export function displayProject() {
    const projSection = document.createElement("div");
    projSection.classList.add("projSection");

    return projSection;
};

export function displayTodo() {
    const todoSection = document.createElement("div");
    todoSection.classList.add("todoSection");

    return todoSection;
};
