import React, { useState } from "react";
import AddCarForm from "./components/AddCarForm";

function Header({ onCarAdded }) {
  const [isBeingAdded, setIsBeingAdded] = useState(false);

  return (
    <header>
      <div className="menu">
        <p>Add {/* or edit  */}vehicles</p>
        <button className="add-car-btn" onClick={() => setIsBeingAdded(true)}>
          Add
        </button>
        {/* <button className="edit-car-btn">Edit</button> */}
      </div>
      <div className="add-edit-hud">
        {isBeingAdded ? (
          <AddCarForm
            onSubmit={onCarAdded}
            onClose={() => setIsBeingAdded(false)}
          />
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
