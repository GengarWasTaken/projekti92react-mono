import React, { useState } from "react";

function Item({ name, model }) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");
  return (
    <>
      {isBeingEdited ? (
        <div className="item-edit">
          <input
            type="text"
            placeholder="Name:"
            defaultValue={name}
            onChange={(e) => setCarName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Model:"
            defaultValue={model}
            onChange={(e) => setCarModel(e.target.value)}
          />
          <button onClick={() => setIsBeingEdited(false)}>Save</button>
        </div>
      ) : (
        <div className="item">
          <p className="name">{name}</p>
          <p className="model">{model}</p>
          <button onClick={() => setIsBeingEdited(true)}>Edit</button>
        </div>
      )}
    </>
  );
}

export default Item;
