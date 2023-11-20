function ToDoItem(){

  let taskName = 'Go To College';
  let taskDate = '04/10/2023';
  return(
    <div className="container">
        <div className="row item-row">
          <div className="col-6">
            {taskName}
          </div>
          <div className="col-4">
            {taskDate}
          </div>
          <div className="col-2">
            <button type="button list-btn" className="btn btn-danger list-btn">Delete</button>
          </div>
        </div>
      </div>
  );
}

export default ToDoItem;