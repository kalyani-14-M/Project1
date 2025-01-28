function addTask() {
    const taskInput = document.getElementById("inputTask");
    const taskList = document.getElementById("taskList");

    // Get the task value
    const taskValue = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskValue === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Create list item
    const newTask = document.createElement("li");

    // Create a span for the task text
    const taskText = document.createElement("span");
    taskText.textContent = taskValue;

    // Append task text to the list item
    newTask.appendChild(taskText);

    // Create Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
        editTask(newTask, taskText);
    };
    newTask.appendChild(editBtn);

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        newTask.remove();
    };
    newTask.appendChild(deleteBtn);

    // Append the new task to the list
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
}

function editTask(taskItem, taskText) {
    // Create an input field with the current task value
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = taskText.textContent;

    // Replace the task text with the input field
    taskItem.replaceChild(inputField, taskText);

    // Change the Edit button to Save
    const saveBtn = taskItem.querySelector("button");
    saveBtn.textContent = "Save";
    saveBtn.onclick = function () {
        const updatedValue = inputField.value.trim();
        if (updatedValue === "") {
            alert("Task cannot be empty!");
            return;
        }

        // Update the task text and revert back to Edit mode
        taskText.textContent = updatedValue;
        taskItem.replaceChild(taskText, inputField);
        saveBtn.textContent = "Edit";
        saveBtn.onclick = function () {
            editTask(taskItem, taskText);
        };
    };
}

