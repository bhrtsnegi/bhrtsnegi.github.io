import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ todoItems, onDeleteClick }) =>{
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
      <ToDoItem taskName={item.name} taskDate={item.dueDate} onDeleteClick={onDeleteClick}></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;