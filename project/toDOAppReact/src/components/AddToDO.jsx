function AddToDO(){
  return (
  <div className="container">
    <div className="row item-row">
      <div className="col-6">
        <input type="text" placeholder="Enter Task Here" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success list-btn">Add</button>
      </div>
    </div>
  </div>
    );
}

export default AddToDO;