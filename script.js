function addTask() {
    const taskInput = document.getElementById("inputTask");
    const taskList = document.getElementById("taskList");
    const taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("Task cannot be empty!");
        return;
    }
    const newTask = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = taskValue;
    newTask.appendChild(taskText);
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
        editTask(newTask, taskText);
    };
    newTask.appendChild(editBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        newTask.remove();
    };
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
    taskInput.value = "";
}
function editTask(taskItem, taskText) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = taskText.textContent;

    taskItem.replaceChild(inputField, taskText);
    const saveBtn = taskItem.querySelector("button");
    saveBtn.textContent = "Save";
    saveBtn.onclick = function () {
        const updatedValue = inputField.value.trim();
        if (updatedValue === "") {
            alert("Task cannot be empty!");
            return;
        }
        taskText.textContent = updatedValue;
        taskItem.replaceChild(taskText, inputField);
        saveBtn.textContent = "Edit";
        saveBtn.onclick = function () {
            editTask(taskItem, taskText);
        };
    };
}

