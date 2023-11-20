import AppName from "./components/AppName"
import AddToDO from "./components/AddToDO"
import ToDoItem from "./components/ToDoItem"
function App() {

  return <center class="todo-container">
    <AppName />
    <AddToDO />
    <ToDoItem />
    <ToDoItem />
        
  </center>
}

export default App