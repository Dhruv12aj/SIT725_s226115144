let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let taskName = input.value.trim();

    if (taskName === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({ name: taskName, done: false });
    input.value = "";
    showTasks();
}

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(function(task, index) {
        let item = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;

        checkbox.onchange = function() {
            task.done = checkbox.checked;
            showTasks();
        };

        let text = document.createElement("span");
        text.textContent = task.name;

        if (task.done) {
            text.className = "completed";
        }

        let button = document.createElement("button");
        button.textContent = "Delete";

        button.onclick = function() {
            tasks.splice(index, 1);
            showTasks();
        };

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        list.appendChild(item);
    });

    let remaining = tasks.filter(task => !task.done).length;
    document.getElementById("taskCount").textContent =
        "Remaining tasks: " + remaining;
}
