// All necessary varibales
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");

/// Add a todo item function
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Create a todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create a new todo
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;
  todoDiv.appendChild(newTodo);

  // Create a delete item button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="bi bi-trash-fill"></i>';
  deleteBtn.classList.add("delete-btn");
  newTodo.appendChild(deleteBtn);

  // Append to todo div
  todoList.appendChild(todoDiv);

  todoInput.value = "";
});

// Remove todo item function
todoList.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
});
