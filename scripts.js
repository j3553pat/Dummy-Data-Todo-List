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


const filtered =  toDos.filter((arrayOfTodos) => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        return arrayOfTodos[i].userId
 }

})
console.log(filtered)


const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {

    const li = document.createElement('li')
    const textNode = document.createTextNode(arrayOfTodos)
    toDos.appendChild(li)
    li.innerHTML = arrayOfTodos[i].title
    }
  
}

