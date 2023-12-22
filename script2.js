const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

// Retrieve tasks from localStorage on page load
window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        displayTask(task);
    });
};

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDate = document.getElementById('taskDate').value;
    const taskTime = document.getElementById('taskTime').value;

    const task = {
        name: taskName,
        description: taskDescription,
        date: taskDate,
        time: taskTime
    };

    displayTask(task);
    saveTask(task);

    taskForm.reset();
});

function displayTask(task) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
        <h3>${task.name}</h3>
        <p>${task.description}</p>
        <p>Date: ${task.date}</p>
        <p>Time: ${task.time}</p>
        <button class="deleteButton">Delete</button>
    `;

    taskList.appendChild(taskElement);

    const deleteButton = taskElement.querySelector('.deleteButton');
    deleteButton.addEventListener('click', function() {
        taskElement.remove(); // Remove task from the UI
        removeTask(task); // Remove task from localStorage
    });
}

function saveTask(task) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
}

function removeTask(taskToRemove) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = savedTasks.filter(task => {
        return (
            task.name !== taskToRemove.name ||
            task.description !== taskToRemove.description ||
            task.date !== taskToRemove.date ||
            task.time !== taskToRemove.time
        );
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
