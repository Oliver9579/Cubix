const todos = [
    {name: 'Clean bathroom', isCompleted: false, difficulty: 2},
    {name: 'Laundry', isCompleted: false, difficulty: 4},
    {name: 'Dishes', isCompleted: false, difficulty: 3}
]

export const initTodos = () => {
    render();
    newTodo();
    orderTodos()
    // deleteATodo();
}

const render = () => {
    const todosDiv = document.getElementById('todos');
    todosDiv.innerHTML = "";
    todos.forEach((todo, index) => {
        todosDiv.innerHTML += `
            <div class="todo-item">
                <input type="checkbox" ${todo.isCompleted ? "checked" : ""}>
                <span class="todo ${todo.isCompleted ? "completed" : "not-completed"}">${todo.name}</span>
                <span class="todo ${todo.isCompleted ? "completed" : "not-completed"}"> - ${todo.difficulty}</span>
                <span class="todo delete-todo">x</span>
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
    mostDifficultItem();
    deleteATodo();
};

const calculateCompletionPercentage = () => {
    return (todos.reduce((acc, todo) =>
        (todo.isCompleted ? acc + 1 : acc), 0) / todos.length);
}

const newTodo = () => {
    const inputs = document.querySelectorAll('.new-item-input');
    const saveButton = document.getElementById('save-button');

    saveButton.addEventListener('click', () => {
        let isValid = true;
        let newItem = {}
        inputs.forEach(input => {
            input.classList.remove('invalid');

            if (input.name === 'difficulty' && !isNaN(input.value)) {
                if (Number(input.value) < 1 || Number(input.value) > 5) {
                    input.classList.add('invalid');
                    isValid = false;
                }
            }
            if (isValid) {
                newItem[input.name] = isNaN(input.value) ? input.value : Number(input.value);
            }
        })
        if (isValid) {
            inputs.forEach(input => (input.value = ''));
            todos.push(newItem)
            render();
        }
    })
}

const mostDifficultItem = () => {
    const mostDifficultItemHTML = document.getElementById('most-difficult-item');
    const mostDifficultItem = todos.filter((todo) =>
        Math.max(...(todos.map((todo) => todo.difficulty))) === todo.difficulty);
    mostDifficultItemHTML.innerText = `${mostDifficultItem[0].name} (${mostDifficultItem[0].difficulty})`;
}

const orderTodos = () => {
    const spanElement = document.getElementById('order');

    const buttons = spanElement.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            switch (button.id) {
                case 'asc':
                    todos.sort((a, b) => a.difficulty - b.difficulty);
                    break;
                case 'desc':
                    todos.sort((a, b) => b.difficulty - a.difficulty);
                    break;
            }
            render()
        })
    })
}
const deleteATodo = () => {
    const deleteButtons = document.querySelectorAll('.delete-todo');

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            todos.splice(index, 1);
            render();
        })
    })
}