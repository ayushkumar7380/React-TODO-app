import Todoitem from "./Todoitem";
import rahul from "./TodoItems.module.css";

const TodoItems = ({ object, handleDelete }) => {
  return (
    <>
      <div className={rahul.items_container}>
        {object.map((item, index) => (
          <Todoitem
            todoDate={item.dueDate}
            key={item.name}
            todoName={item.name}
            handleDelete={handleDelete}
            indexi={index}
          ></Todoitem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
