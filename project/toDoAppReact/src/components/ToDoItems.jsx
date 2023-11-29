import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = () => {
  const { todoItems } = useContext(ToDoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.name}
          taskName={item.name}
          taskDate={item.dueDate}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
