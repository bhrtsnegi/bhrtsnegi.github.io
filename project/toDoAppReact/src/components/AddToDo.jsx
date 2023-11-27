import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
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

  const handleAtButtonClick = (event) => {
    event.preventDefault();
    onNewItem(toDoName, dueDate);
    setDueDate("");
    setToDOName("");
  };
  return (
    <div className="container">
      <form className="row item-row" onSubmit={handleAtButtonClick}>
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
          <button className="btn btn-success list-btn">
            <IoAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
