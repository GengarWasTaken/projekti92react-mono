import React, { useState } from "react";

function AddCar({ onClose, onSubmit }) {
  const [carName, setCarName] = useState();
  const [carModel, setCarModel] = useState();

  return (
    <div className="add-car-screen">
      <button className="cancel-btn" onClick={onClose}>
        Cancel
      </button>
      <form className="add-car-form">
        <input
          className="car-name input"
          type="text"
          placeholder="Enter name"
          name="nameOfCar"
          onChange={(e) => setCarName(e.target.value)}
          required
        />
        <input
          className="car-model input"
          type="text"
          placeholder="Enter model"
          name="modelOfCar"
          onChange={(e) => setCarModel(e.target.value)}
          required
        />
      </form>
      <button
        type="submit"
        className="submit-btn"
        onClick={() => onSubmit(carName, carModel)}
      >
        Submit
      </button>
    </div>
  );
}

export default AddCar;
