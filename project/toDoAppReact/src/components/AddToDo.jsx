import { useContext, useRef } from "react";
import { IoAddCircle } from "react-icons/io5";
import styles from "./AddToDo.module.css";
import { ToDoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  const { addNewItem } = useContext(ToDoItemsContext);
  const toDoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAtButtonClick = (event) => {
    event.preventDefault();
    const toDoName = toDoNameElement.current.value;
    toDoNameElement.current.value = "";
    const dueDate = dueDateElement.current.value;
    dueDateElement.current.value = "";
    addNewItem(toDoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row item-row" onSubmit={handleAtButtonClick}>
        <div className="col-6">
          <input
            type="text"
            ref={toDoNameElement}
            placeholder="Enter Task Here"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success list-btn">
            <IoAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
