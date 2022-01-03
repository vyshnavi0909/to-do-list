import React, { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

export default function ItemsList(props) {
  const list = props.items;
  const toDoList = localStorage.getItem("toDoList")
    ? JSON.parse(localStorage.getItem("toDoList"))
    : [];
  console.log(typeof list);
  console.log(list.length);
  const [openModal, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [update, setUpdate] = useState();

  const dataStorage = (data) => {
    localStorage.setItem("toDoList", JSON.stringify(data));
    window.location.reload();
  };

  const handleUpdate = (e) => {
    setUpdate(e.target.value);
    console.log("updating");
  };

  const handleEditButton = (e, key) => {
    setValue(key);
    setOpen(true);
    console.log("editing");
  };

  const handleDeleteButton = (e, key) => {
    const index = toDoList.indexOf(key);
    console.log(index);
    console.log("bfr", toDoList);
    toDoList.splice(index, 1);
    dataStorage(toDoList);
  };

  const handleModalClose = () => {
    setOpen(false);
    console.log("closing");
  };

  const handleSave = () => {
    console.log("saving");
    const index = toDoList.indexOf(value);

    if (update) {
      const updatedString = update.charAt(0).toUpperCase() + update.slice(1);
      toDoList[index] = updatedString;
      console.log("ll", updatedString);
    }

    console.log("saving list", toDoList);
    dataStorage(toDoList);
  };

  return (
    <div className="itemsContainer">
      <h3 className="heading">My To Do List:</h3>
      <ul>
        {list.length ? (
          list.map((key) => {
            return (
              <li key={key} className="itemDiv">
                <p className="items">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </p>
                <button className="edit-icon">
                  <span onClick={(e) => handleEditButton(e, key)}>Edit</span>
                </button>

                <button className="delete-icon">
                  <span onClick={(e) => handleDeleteButton(e, key)}>Done</span>
                </button>
              </li>
            );
          })
        ) : (
          <p>Nothing here. You can add new items</p>
        )}
      </ul>

      <Modal
        show={openModal}
        handleClose={handleModalClose}
        handleSave={handleSave}
      >
        <textarea defaultValue={value} onChange={handleUpdate} />
      </Modal>
    </div>
  );
}
