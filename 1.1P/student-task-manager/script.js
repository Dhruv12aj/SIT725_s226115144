
let count = 0;

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let list = document.getElementById("taskList");

    let newTask = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.flex = "none";

    let taskText = document.createElement("span");
    taskText.textContent = task;

    checkbox.onclick = function() {
        if (checkbox.checked) {
            taskText.classList.add("completed");
        } else {
            taskText.classList.remove("completed");
        }
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function() {
        newTask.remove();
        count--;
        updateCount();
    };

    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);

    list.appendChild(newTask);

    count++;
    updateCount();

    input.value = "";
}

function updateCount() {
    document.getElementById("taskCount").textContent =
        "Total tasks: " + count;
}
