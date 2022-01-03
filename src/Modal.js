import React from "react";

export default function Modal({ handleSave, handleClose, show, children}) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="modalButtons">
          <button className="save-btn" type="button" onClick={handleSave}>
            Save
          </button>
          <button className="close-btn" type="button" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
