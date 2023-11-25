import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {

  const initialToDoItems = [
    {
      name: 'Buy Milk',
      dueDate: '10/04/2023',
    },
    {
      name: 'Go To Class',
      dueDate: '10/04/2023',
    },
    {
      name: 'Sleep',
      dueDate: '10/04/2023',
    },
  ];

  const [todoItems, setToDoItems] = useState(initialToDoItems);

const handleNewItem = (itemName, itemDueDate) => {
  const newTodoItems = [
    ...todoItems, { name: itemName, dueDate: itemDueDate} 
  ]
  setToDoItems(newTodoItems);
}

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem= {handleNewItem}/>
      <ToDoItems todoItems={todoItems}/>
      <WelcomeMessage></WelcomeMessage>
    </center> 
  );
}

export default App;