import AppName from "./components/AppName";
import AddToDO from "./components/AddToDO";
import ToDoItem from "./components/ToDoItem";
import "./App.css";

function App() {

  return (<center class="todo-container">
    <AppName />
    <AddToDO />
    <ToDoItem />
    <ToDoItem />
        
  </center>
)}

export default App;