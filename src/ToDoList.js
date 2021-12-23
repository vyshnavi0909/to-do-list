import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import "./styles.css";
var itemsList = [];
export default function ToDoList() {
   
    const [value, setValue] = useState();
    const [change, setChange] = useState(false);

    const addItemFunction = () => {
        if(value){
            setChange(!change);
            itemsList.push(value);
            setValue("");
        }
    }

    useEffect(() => {
        console.log(itemsList)
       setValue();
    }, [change])
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
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <button type="submit" className="addButton" onClick={addItemFunction}>Add</button>
      <ItemsList items={itemsList}/>
    </div>
  );
}
