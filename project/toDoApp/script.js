let todoList = [
            {
                item: 'buy', 
                dueDate: '04/10/2023'
            }, 
            {
                item: 'go to', 
                dueDate: '05/10/2023'
            }
        ];
displayItems();

function addToDo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate}); 
    inputElement.value = '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for(let i=0; i< todoList.length; i++){
        let {item, dueDate} = todoList[i];
        newHtml += `
            <span> ${item} </span>
            <span> ${dueDate} </span>
            <button 
                onclick=
                    "
                        todoList.splice(${i},1);
                        displayItems();    
                    ">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}