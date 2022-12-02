let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const toDos = document.getElementById('todo-list')

const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
    const li = document.createElement('li')
    const textNode = document.createTextNode(arrayOfTodos)
    toDos.appendChild(li)
    li.innerHTML = arrayOfTodos[i].title
    }
}

const form = document.querySelector("form")
form.addEventListener("submit",e => {
    e.preventDefault();

const id = document.getElementById("userID").value
console.log(id)
const foundId = arrayOfTodos.filter((el)=> {
    console.log(el.userId, Number(id))
    return el.userId === Number(id)
})
console.log(foundId)
toDos.innerHTML = ''
    foundId.forEach((el) => {
        const li = document.createElement('li')

        li.innerHTML = `
            <p>userId: ${el.userId}</p>
            <p>todo: ${el.title}</p>
        `
        toDos.appendChild(li)
    })
    
})

const clearTodos = () => {
    toDos.innerHTML =''
}

const completed = () => {
    const completedTodos = arrayOfTodos.filter((el) => {
        return el.completed == true
    })
    console.log(completedTodos)
    completedTodos.forEach((el) => {
        const li = document.createElement('li')

        li.innerHTML = `
            <p>userId: ${el.userId}</p>
            <p>todo: ${el.title}</p>
        `
        toDos.appendChild(li)
    })
}