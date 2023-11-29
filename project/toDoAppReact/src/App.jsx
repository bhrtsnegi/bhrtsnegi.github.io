import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { ToDoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setToDoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newTodoItems);
  };

  const deleteItem = (toDoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== toDoItemName);
    setToDoItems(newTodoItems);
  };

  return (
    <ToDoItemsContext.Provider value={{
      todoItems: todoItems,
      addNewItem: addNewItem,
      deleteItem: deleteItem,
      }}>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <ToDoItems />
        <WelcomeMessage></WelcomeMessage>
      </center>
    </ToDoItemsContext.Provider>
  );
}

export default App;
