import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";

function App() {

  const todoItems = [
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

  return (
  <center className="todo-container">
    <AppName />
    <AddToDo />
    <ToDoItems todoItems={todoItems}/>
  </center>
);
}

export default App;