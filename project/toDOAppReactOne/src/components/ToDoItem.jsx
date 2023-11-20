function ToDoItem(){

  let taskName = 'Go To College';
  let taskDate = '04/10/2023';
  return(
    <div className="container text-center">
        <div class="row">
          <div class="col-6">
            {taskName}
          </div>
          <div class="col-4">
            {taskDate}
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
  );
}

export default ToDoItem;