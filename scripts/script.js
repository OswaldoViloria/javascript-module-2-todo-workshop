let todos = []

const createTodo = (text) => {
    todos.push(text)
}

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement("label")
    const containerEl = document.createElement("div")
    const todoText = document.createElement("span")
    
    todoText.textContent = todo 
    containerEl.appendChild(todoText)
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    return todoEl
}

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    console.log("texto añadido: " + text)

     if (text.length > 0) {
        createTodo(text)
        generateTodoDOM(text)
        }
    console.log(todos);
})


