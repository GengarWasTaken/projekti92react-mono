import React, { useState } from "react";
import AddCar from "./AddCar";

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
          <AddCar
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
