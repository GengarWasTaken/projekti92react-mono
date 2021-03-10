import React, { useState } from "react";
import Data from "../database/Data";

const useAddCarForm = (carName, carModel) => {
  const [carList, setCarList] = useState(Data);
  let newCar = { name: carName, model: carModel };
  let updatedCarList = setCarList(...carList, newCar);
  return updatedCarList;
};

export { useAddCarForm };
