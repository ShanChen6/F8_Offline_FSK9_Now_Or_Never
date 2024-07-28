document.addEventListener("DOMContentLoaded", function () {
  var todoInput = document.getElementById("todo-input");
  var addBtn = document.getElementById("add-btn");
  var todoList = document.getElementById("todo-list");

  addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var task = todoInput.value.trim();
    if (task !== "") {
      addTask(task);
      todoInput.value = "";
      todoInput.focus();
    }
  });

  function addTask(task) {
    var li = document.createElement("li");

    var taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = task;
    taskText.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    li.appendChild(taskText);

    var icons = document.createElement("div");
    icons.classList.add("icons");

    var editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fa fa-edit"></i>';
    editBtn.addEventListener("click", function () {
      editTask(li, taskText.textContent);
    });
    icons.appendChild(editBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.addEventListener("click", function () {
      todoList.removeChild(li);
    });
    icons.appendChild(deleteBtn);

    li.appendChild(icons);
    todoList.appendChild(li);
  }

  function editTask(li, task) {
    var editForm = document.createElement("form");
    var editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = task;
    editInput.classList.add("edit-input");
    var saveBtn = document.createElement("button");
    saveBtn.textContent = "Add Task";
    saveBtn.addEventListener("click", function (event) {
      event.preventDefault();
      var updatedTask = editInput.value.trim();
      if (updatedTask) {
        li.querySelector(".task-text").textContent = updatedTask;
        li.querySelector(".task-text").style.display = "inline";
        li.querySelector(".icons").style.display = "flex";
        li.removeChild(editForm);
      } else {
        alert("Task cannot be empty.");
      }
    });

    li.querySelector(".task-text").style.display = "none";
    li.querySelector(".icons").style.display = "none";
    editForm.appendChild(editInput);
    editForm.appendChild(saveBtn);
    li.appendChild(editForm);
  }

  todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addBtn.click();
    }
  });
});
