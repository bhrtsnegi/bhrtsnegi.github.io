import AppName from "./components/AppName";
import AddToDO from "./components/AddToDO";
import ToDoItem from "./components/ToDoItem";
import "./App.css";

function App() {

  return (<center className="todo-container">
    <AppName />
    <div className="items-container">
      <AddToDO />
      <ToDoItem />
      <ToDoItem />
    </div>
  </center>
)}

export default App;