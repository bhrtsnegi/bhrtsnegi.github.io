import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ToDoItemsContext } from "../store/todo-items-store";

const ToDoItem = (taskName, taskDate) => {
  const { deleteItem } = useContext(ToDoItemsContext);

  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-6">{taskName}</div>
        <div className="col-4">{taskDate}</div>
        <div className="col-2">
          <button
            type="button list-btn"
            className="btn btn-danger list-btn"
            onClick={() => deleteItem(taskName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ToDoItem;
