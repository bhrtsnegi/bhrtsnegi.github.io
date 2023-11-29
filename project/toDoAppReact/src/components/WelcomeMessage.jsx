import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { ToDoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () =>{

  const { todoItems } = useContext(ToDoItemsContext);

  return todoItems.length === 0 && <p className={styles.welcome}> No Task for now.</p>;
}

export default WelcomeMessage;