window.addEventListener("load", () => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
        alert("Por favor, inicia sesión primero.");
        window.location.href = "index.html";
    }
});

document.addEventListener("DOMContentLoaded", loadTasks);

document.getElementById("addTaskButton").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskList = document.getElementById("taskList");
    const taskSectionTitle = document.getElementById("taskSectionTitle");

    if (taskInput.value.trim() !== "" && taskDate.value) {
        const task = { text: taskInput.value, date: taskDate.value };

        saveTask(task);
        renderTask(task);
        taskInput.value = "";
        taskDate.value = "";

        taskSectionTitle.style.display = "block";
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task));

    const taskSectionTitle = document.getElementById("taskSectionTitle");
    if (tasks.length > 0) taskSectionTitle.style.display = "block";
}

function renderTask(task) {
    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.textContent = `${task.text} - Fecha límite: ${task.date}`;
    taskList.appendChild(listItem);
}
