import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import "./styles.css";
var itemsList;
export default function ToDoList() {
   
    const [value, setValue] = useState();
    const [change, setChange] = useState(false);

    const dataToStorage = (data) => {
      let list = localStorage.getItem("toDoList") ? JSON.parse(localStorage.getItem("toDoList")) : [];
  
      if (list !== undefined) {
        list.push(data.charAt(0).toUpperCase() + data.slice(1));
      } else {
        list = [data.charAt(0).toUpperCase() + data.slice(1)];
      }
      localStorage.setItem("toDoList", JSON.stringify(list));
    }

    const addItemFunction = () => {
        if(value){
            setChange(!change);
            dataToStorage(value);
            setValue("");
        }
    }

    useEffect(() => {
       setValue();
    }, [change])

    itemsList = localStorage.getItem("toDoList") ? JSON.parse(localStorage.getItem("toDoList")) : [];
  return (
    <div className="container">
      <h1 className="heading">To Do List</h1>
      <div>
        <label className="addItem-label"><b>Add Item</b></label>
        <input
          type="text"
          className="addItem-input"
          name="addItem"
          placeholder="Enter your to do item"
        //   value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <button type="submit" className="addButton" onClick={addItemFunction}>Add</button>
      <ItemsList items={itemsList}/>
    </div>
  );
}
