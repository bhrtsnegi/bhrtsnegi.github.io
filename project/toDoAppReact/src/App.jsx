import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {

  const [todoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newTodoItems);
  };

  const handleDeleteItem = (toDoItemName) =>{
    const newTodoItems = todoItems.filter(item => item.name !== toDoItemName);
    setToDoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      <ToDoItems todoItems={todoItems} onDeleteClick= {handleDeleteItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
    </center>
  );
}

export default App;