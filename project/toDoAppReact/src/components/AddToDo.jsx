import { useState } from "react";
import styles from "./AddToDo.module.css";

function AddToDo({ onNewItem }) {
  const [toDoName, setToDOName] = useState();

  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setToDOName(event.target.value);

  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAtButtonClick = () => {
    onNewItem(toDoName, dueDate);
    setDueDate("");
    setToDOName("");
  };
  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-6">
          <input
            className={styles.taskInput}
            type="text"
            placeholder="Enter Task Here"
            value={toDoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.taskInput}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success list-btn"
            onClick={handleAtButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
