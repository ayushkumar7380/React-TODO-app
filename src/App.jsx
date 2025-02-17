import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
import "./App.css";


function App() {
  return (
    <center className="todo-container">
      <AppName />
      <Addtodo></Addtodo>
      <div className="items_container">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
      
    </center>
  );
}

export default App;
