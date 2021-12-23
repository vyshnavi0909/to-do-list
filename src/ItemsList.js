import React from "react";
import "./styles.css";

export default function ItemsList(props) {
  return (
    <div className="itemsContainer">
        
            {props.items ? props.items.map((key) => {
                return (
                    <p key={key} style={{border: "1px solid #000", background: "#fff", display: "flex", alignItems: "center", padding: "5px"}}>
                        <input type="checkbox" className="checkbox" style={{margin: "10px"}} />
                        <label style={{fontSize: "x-large", marginLeft : "10px"}}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                    </p>
                )
            }
                
            ) : "No to do items"}
    </div>
  );
}
