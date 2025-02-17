import Todoitem from "./Todoitem";

const TodoItems = ({object}) =>  {
  return (<>
      <div className="items_container">
        {object.map(item => <Todoitem todoDate={item.dueDate} todoName ={item.name}></Todoitem>)}
      </div>
  </>
  );
}
export default TodoItems;