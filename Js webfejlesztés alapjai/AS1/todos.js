const todos = [
    {name: 'Clean bathroom', isCompleted: false},
    {name: 'Laundry', isCompleted: false},
    {name: 'Dishes', isCompleted: false}
]

export const initTodos = () => {
    render();
}

const render = () => {
    const todosDiv = document.getElementById('todos');
    todosDiv.innerHTML = "";
    todos.forEach((todo, index) => {
        todosDiv.innerHTML += `
            <div class="todo-item">
                <input type="checkbox" ${todo.isCompleted ? "checked" : ""}>
                <span class="todo ${todo.isCompleted ? "completed" : "not-completed"}">${todo.name}</span>
                <br>
            </div>
        `;
    })
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', (e) => {
            todos[index].isCompleted = !todos[index].isCompleted;
            render();
        })
    })
    document.getElementById('percentage').innerText = `${Math.round(calculateCompletionPercentage() * 100)} %`;
};

const calculateCompletionPercentage = () => {
    return (todos.reduce((acc, todo) =>
        (todo.isCompleted ? acc + 1 : acc), 0) / todos.length);
}