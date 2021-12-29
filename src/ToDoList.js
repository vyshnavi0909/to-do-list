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
        list.push(data);
      } else {
        list = [data];
      }
      console.log( typeof list)
      localStorage.setItem("toDoList", JSON.stringify(list));
      console.log(localStorage.getItem("toDoList"))
    }

    const addItemFunction = () => {
        if(value){
            setChange(!change);
            dataToStorage(value);
            setValue("");
        }
    }

    useEffect(() => {
        console.log(itemsList)
       setValue();
    }, [change])

    itemsList = localStorage.getItem("toDoList") ? JSON.parse(localStorage.getItem("toDoList")) : [];
    console.log(typeof itemsList)
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
