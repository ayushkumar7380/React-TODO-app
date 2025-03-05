import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import FetchData from "./components/FetchData";
import TestApp from "./components/TestApp";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2025",
    },
    {
      name: "Go to college",
      dueDate: "4/10/2025",
    },
    {
      name: "Do assignment",
      dueDate: "6/10/2025",
    },
    {
      name: "Do homework",
      dueDate: "8/10/2025",
    },
    {
      name: "Go home",
      dueDate: "10/10/2025",
    },
    {
      name: "Go to relative house",
      dueDate: "10/10/2025",
    },
  ];

  let [itemList, setItemList] = useState(todoItems);
  let newObj;
  let getObject = (obj) => {
    newObj = obj;
    console.log(newObj);
  };

  const handleOnClickAddButton = (event) => {
    let buttonClicked = event.target.innerText;
    if (buttonClicked === "Add") {
      let newList = [...itemList, newObj];
      setItemList(newList);
      console.log("Addbuttonclicked");
    }
  };

  const handleOnClickDeleteButton = (index) => {
    console.log(index);
    setItemList(itemList.filter((_, i) => i !== index));
  };

  return (
    <center className="todo-container">
      <AppName />
      <Addtodo
        setItemList={handleOnClickAddButton}
        getObject={getObject}
      ></Addtodo>
      <TodoItems
        object={itemList}
        handleDelete={handleOnClickDeleteButton}
      ></TodoItems>
      {/*<FetchData></FetchData>
      <TestApp></TestApp>*/}
    </center>
  );
}

export default App;
