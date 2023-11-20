function ToDoItem(){
  return(
    <div className="container text-center">
        <div class="row">
          <div class="col-6">
            Go To College
          </div>
          <div class="col-4">
            04/10/2023
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
  );
}

export default ToDoItem;