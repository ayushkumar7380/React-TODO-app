import styles from "./Addtodo.module.css";
import { useState } from "react";

function Addtodo({ setItemList, getObject }) {
  let [newItem, setNewItem] = useState("");
  let [dateText, setDateText] = useState("");

  const handleOnChangeNewItem = (event) => {
    console.log("handleOnChangeNewItem");
    console.log(event.target.value);
    setNewItem(event.target.value);
  };

  const handleDateText = (event) => {
    let newDate = event.target.value;
    // console.log(newDate);
    setDateText(newDate);
    console.log(dateText);
  };

  return (
    <div className={styles.items_container}>
      <div className="container items_container">
        <div className="row ay_row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter todo here"
              className={styles.inputcss}
              onChange={handleOnChangeNewItem}
            ></input>
          </div>
          <div className="col-4" id={styles.col4}>
            <input
              type="date"
              onChange={handleDateText}
              className={styles.inputdate}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success "
              id={styles.addtodocss}
              onClick={(event) => {
                getObject({ name: newItem, dueDate: dateText });
                setItemList(event);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
