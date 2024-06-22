function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const datetimeList = document.getElementById('datetime-list');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskInput.value;

    const buttons = document.createElement('div');
    buttons.className = 'buttons';

    const completeButton = document.createElement('button');
    completeButton.className = 'complete';
    completeButton.textContent = 'Complete';
    completeButton.onclick = function () {
        completeTask(listItem);
    };

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        deleteTask(listItem);
    };

    buttons.appendChild(completeButton);
    buttons.appendChild(deleteButton);
    listItem.appendChild(buttons);

    taskList.insertBefore(listItem, taskList.firstChild);
    taskList.classList.remove('hidden');

    const timestamp = document.createElement('li');
    const now = new Date();
    timestamp.innerHTML = `<strong>${taskInput.value}:</strong> Added on ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;
    datetimeList.insertBefore(timestamp, datetimeList.firstChild);
    datetimeList.classList.remove('hidden');

    taskInput.value = '';
}

function completeTask(listItem) {
    const completedList = document.getElementById('completed-list');
    const datetimeList = document.getElementById('datetime-list');

    listItem.querySelector('.complete').remove();
    listItem.querySelector('.delete').remove();

    const completeTimestamp = document.createElement('span');
    const now = new Date();
    completeTimestamp.className = 'timestamp';
    completeTimestamp.textContent = ` (Completed on ${now.toLocaleDateString()} at ${now.toLocaleTimeString()})`;
    listItem.appendChild(completeTimestamp);

    completedList.insertBefore(listItem, completedList.firstChild);
    completedList.classList.remove('hidden');

    const timestamp = document.createElement('li');
    timestamp.innerHTML = `<strong>${listItem.textContent.split(' (Completed')[0]}:</strong> Completed on ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;
    datetimeList.insertBefore(timestamp, datetimeList.firstChild);
    datetimeList.classList.remove('hidden');
}

function deleteTask(listItem) {
    listItem.remove();
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}
