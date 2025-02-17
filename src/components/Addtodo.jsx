function Addtodo() {
  return (
    <div class="container items_container">
        <div class="row ay_row">
          <div class="col-6">
            <input type="text" placeholder="Enter todo here"></input>
            </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2"><button type="button" class="btn btn-success ak_button">Add</button></div>
        </div>
      </div>
  );
}

export default Addtodo;