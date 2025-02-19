import paro from "./Addtodo.module.css";

function Addtodo() {
  return (
    <div className="container items_container">
        <div className="row ay_row">
          <div className="col-6">
            <input type="text" placeholder="Enter todo here" className = {paro.inputcss}></input>
            </div>
          <div class="col-4" id={paro.col4}>
            <input type="date" />
          </div>
          <div class="col-2"><button type="button" class="btn btn-success " id={paro.addtodocss}>Add</button></div>
        </div>
      </div>
  );
}

export default Addtodo;