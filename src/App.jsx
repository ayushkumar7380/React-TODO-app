import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import "./App.css";


function App() {
  const todoItems = [{
     name: "Buy Milk",
     dueDate: "4/10/2025",
  },
  {
    name: "Go to college",
    dueDate:"4/10/2025",
  },
  {
    name: "Do assignment",
    dueDate:"6/10/2025",
  },
  {
    name: "Do homework",
    dueDate:"8/10/2025",
  },
  {
    name: "Go home",
    dueDate:"10/10/2025",
  },

];

  return (
    <center className="todo-container">
      <AppName />
      <Addtodo></Addtodo>
      <TodoItems object={todoItems}></TodoItems>
    </center>
  );
}

export default App;
