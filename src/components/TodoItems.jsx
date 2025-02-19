import Todoitem from "./Todoitem";
import rahul from "./TodoItems.module.css";

const TodoItems = ({object}) =>  {
  return (<>
      <div className={rahul.items_container}>
        {object.map(item => <Todoitem todoDate={item.dueDate} todoName ={item.name}></Todoitem>)}
      </div>
  </>
  );
}
export default TodoItems;