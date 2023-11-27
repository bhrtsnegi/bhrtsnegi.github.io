import { MdDelete } from "react-icons/md";

function ToDoItem({ taskName, taskDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-6">{taskName}</div>
        <div className="col-4">{taskDate}</div>
        <div className="col-2">
          <button type="button list-btn" className="btn btn-danger list-btn" onClick= {() => onDeleteClick(taskName)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
