import React from "react";
import "./styles.css";

export default function ItemsList(props) {
  const list = props.items;
  console.log(typeof list)
  console.log(list.length)
  return (
    <div className="itemsContainer">
        <h3 className="heading">My To Do List:</h3>
            {list.length ? list.map((key) => {
                return (            
                    <p key={key} className="items">
                        <input type="checkbox" className="checkbox" style={{margin: "10px"}} />
                        <label style={{fontSize: "x-large", marginLeft : "10px"}}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                    </p>
                )
            }
                
            ) : <p>Nothing here. You can add new items</p>}
    </div>
  );
}
