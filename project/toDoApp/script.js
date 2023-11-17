let todoList = [];
displayItems();

function addToDo(){
    let inputElement = document.querySelector('#todo-input');
    let todoItem = inputElement.value;
    todoList.push(todoItem);
    inputElement.value = '';

    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    containerElement.innerText = '';
    for(let i=0; i< todoList.length; i++)
        containerElement.innerText = containerElement.innerText + '\n' + todoList[i];
}