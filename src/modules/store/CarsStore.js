import { makeAutoObservable, observable, action } from "mobx";

import {
  filterCarsByName,
  sortCarsByNameAsc,
  sortCarsByNameDesc,
} from "../footer/utils/utils";

import Data from "../data/Data";

class CarsStore {
  constructor() {
    this.data = this.paginateCarList(Data, 1, 5);
    this.sortedAZ = false;
    this.searchTerm = null;
    this.currentPage = 1;
    this.carsPerPage = 5;
    this.totalItems = Data.length;

    makeAutoObservable(this, {
      data: observable,
      totalItems: observable,
      handleSubmit: action,

      sortedAZ: observable,
      sortData: action,

      searchTerm: observable,
      search: action,

      currentPage: observable,
      carsPerPage: observable,
      paginate: action,
    });
  }

  paginateCarList(data, currentPage, itemsPerPage) {
    const indexOfLastCar = currentPage * itemsPerPage;
    const indexOfFirstCar = indexOfLastCar - itemsPerPage;
    return data.slice(indexOfFirstCar, indexOfLastCar);
  }

  handleSubmit(carName, carModel) {
    const newCar = { name: carName, model: carModel, id: this.data.length };
    this.data.unshift(newCar);
    this.paginate(1);
    this.search("");
  }

  sortData() {
    const sortingFunction =
      this.sortedAZ === false ? sortCarsByNameAsc : sortCarsByNameDesc;
    const sortedData = this.data.sort(sortingFunction);

    this.data = sortedData;
    this.sortedAZ = !this.sortedAZ;
  }

  search(searchTerm) {
    const filteredList = filterCarsByName(Data, searchTerm);

    this.data = this.paginateCarList(
      filteredList,
      this.currentPage,
      this.carsPerPage
    );
  }

  paginate(pageNumber) {
    const filteredList = filterCarsByName(Data, this.searchTerm);

    this.currentPage = pageNumber;
    this.data = this.paginateCarList(
      filteredList,
      pageNumber,
      this.carsPerPage
    );
  }
}

const store = new CarsStore();

export { store };
