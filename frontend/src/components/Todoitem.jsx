import styles from "./Todoitem.module.css";
function Todoitem({ todoName, todoDate, handleDelete, indexi }) {
  return (
    <div className="container">
      <div className="row ay_row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger ak_button"
            id={styles.button}
            onClick={() => {
              handleDelete(indexi);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
