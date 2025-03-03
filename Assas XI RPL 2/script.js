document.addEventListener("DOMContentLoaded", () =>{
    const input = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    function loadTodos() {
        todoList.innerHTML = "";
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.forEach((todo, index) => addTodoElement(todo, index));
    }

    function addTodoElement(todo, index) {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = todo;
        span.style.flex = "1";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus";
        deleteBtn.classList.add("delete");
        deleteBtn.onclick = () => removeTodo(index);

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    function addTodo() {
        const todoText = input.value.trim();
        if (!todoText) return;
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push(todoText);
        localStorage.setItem("todos", JSON.stringify(todos));
        input.value = "";
        loadTodos();
    }

    function removeTodo(index) {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        loadTodos();
    }
    
    addButton.addEventListener("click", addTodo);
    loadTodos();
});