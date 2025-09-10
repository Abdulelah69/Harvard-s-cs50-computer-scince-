// popup.js - Professional CS50 To-Do
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");
  const clearBtn = document.getElementById("clearBtn");
  const counts = document.getElementById("counts");

  let tasks = [];

  // Helper: generate unique ID
  const genId = () => Date.now().toString(36) + Math.random().toString(36).slice(2,6);

  // Save tasks to Chrome storage
  function saveTasks() {
    chrome.storage.sync.set({ tasks }, updateCounts);
  }

  // Load tasks from storage
  function loadTasks() {
    chrome.storage.sync.get(["tasks"], (res) => {
      tasks = res.tasks || [];
      renderTasks();
    });
  }

  // Render all tasks
  function renderTasks() {
    taskList.innerHTML = "";
    if (tasks.length === 0) {
      const li = document.createElement("li");
      li.className = "empty";
      li.textContent = "No tasks — add one!";
      taskList.appendChild(li);
      updateCounts();
      return;
    }

    tasks.forEach(addTaskToDOM);
    updateCounts();
  }

  // Add a single task object to DOM
  function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const span = document.createElement("span");
    span.className = "text" + (task.completed ? " completed" : "");
    span.textContent = task.text;
    span.title = "Double-click to edit";
    span.addEventListener("dblclick", () => startEdit(task.id));

    const delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.textContent = "✖";
    delBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  }

  // Add new task
  function addTask(text) {
    const task = { id: genId(), text, completed: false };
    tasks.push(task);
    saveTasks();
    renderTasks();
  }

  // Delete task
  function deleteTask(id) {
    tasks = tasks.filter((t) => t.id !== id);
    saveTasks();
    renderTasks();
  }

  // Toggle complete status
  function toggleTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
  }

  // Edit task by double-click
  function startEdit(id) {
    const li = taskList.querySelector(`li[data-id="${id}"]`);
    if (!li) return;

    const span = li.querySelector(".text");
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    input.className = "edit";
    li.replaceChild(input, span);
    input.focus();
    input.select();

    function finish() {
      const newVal = input.value.trim();
      if (newVal === "") {
        deleteTask(id);
      } else {
        const task = tasks.find((t) => t.id === id);
        if (task) task.text = newVal;
        saveTasks();
        renderTasks();
      }
    }

    input.addEventListener("blur", finish);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") input.blur();
      if (e.key === "Escape") renderTasks();
    });
  }

  // Update task summary
  function updateCounts() {
    const total = tasks.length;
    const done = tasks.filter((t) => t.completed).length;
    counts.textContent = `${done} done — ${total - done} active (total ${total})`;
  }

  // Event listeners
  addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (!text) return;
    addTask(text);
    taskInput.value = "";
    taskInput.focus();
  });

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addBtn.click();
  });

  clearBtn.addEventListener("click", () => {
    if (!confirm("Clear all tasks?")) return;
    tasks = [];
    saveTasks();
    renderTasks();
  });

  // Initial load
  loadTasks();
});
