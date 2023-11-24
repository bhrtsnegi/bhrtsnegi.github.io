import styles from "./AddToDo.module.css";

function AddToDo(){
  return (
  <div className="container">
    <div className="row item-row">
      <div className="col-6">
        <input className={styles.taskInput} type="text" placeholder="Enter Task Here" />
      </div>
      <div className="col-4">
        <input className={styles.taskInput} type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success list-btn">Add</button>
      </div>
    </div>
  </div>
    );
}

export default AddToDo;