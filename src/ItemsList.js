import React from "react";
import "./styles.css";

export default function ItemsList(props) {
  const list = props.items;
  console.log(typeof list);
  console.log(list.length);
  return (
    <div className="itemsContainer">
      <h3 className="heading">My To Do List:</h3>
      {list.length ? (
        list.map((key) => {
          return (
            <div key={key} className="itemDiv">
              <p className="items">
                <input
                  type="checkbox"
                  className="checkbox"
                  style={{ margin: "10px" }}
                />
                <label style={{ fontSize: "x-large", marginLeft: "10px" }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              </p>
              <svg
                className="edit-icon"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path d="M18.4,4.4l1.2,1.2L6.2,19H5v-1.2L18.4,4.4 M18.4,2c-0.3,0-0.5,0.1-0.7,0.3L3,17v4h4L21.7,6.3c0.4-0.4,0.4-1,0-1.4l-2.6-2.6 C18.9,2.1,18.7,2,18.4,2L18.4,2z"></path>
                <path
                  d="M15.8 4.3H17.8V9.2H15.8z"
                  transform="rotate(-45.001 16.75 6.75)"
                ></path>
              </svg>
              <svg
                className="delete-icon"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="23"
                height="23"
                viewBox="0 0 30 30"
              >
                {" "}
                <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
              </svg>
            </div>
          );
        })
      ) : (
        <p>Nothing here. You can add new items</p>
      )}
    </div>
  );
}
