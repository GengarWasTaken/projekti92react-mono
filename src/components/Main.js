import React from "react";
import Item from "./Item";
import Data from "../database/Data";
import Pagination from "./Pagination";
import Header from "./Header";
/* import { useAddCarForm } from "./useAddCarForm"; */
import {
  filterCarsByName,
  sortCarsByNameAsc,
  sortCarsByNameDesc,
} from "../utils";

function paginateCarList(data, currentPage, itemsPerPage) {
  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  return data.slice(indexOfFirstCar, indexOfLastCar);
}

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      data: paginateCarList(Data, 1, 5),
      sortedAZ: false,
      searchTerm: null,
      currentPage: 1,
      carsPerPage: 5,
      totalItems: Data.length,
    };

    this.sortData = this.sortData.bind(this);
    this.search = this.search.bind(this);
    this.paginate = this.paginate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sortData(list) {
    this.setState((prevState) => {
      const sortingFunction =
        prevState.sortedAZ === false ? sortCarsByNameAsc : sortCarsByNameDesc;
      const sortedData = prevState.data.sort(sortingFunction);

      return {
        data: sortedData,
        sortedAZ: !prevState.sortedAZ,
      };
    });
  }

  search(searchTerm) {
    const filteredList = filterCarsByName(Data, searchTerm);

    this.setState((prevState) => ({
      data: paginateCarList(
        filteredList,
        prevState.currentPage,
        prevState.carsPerPage
      ),
      totalItems: filteredList.length,
      searchTerm,
    }));
  }

  paginate(pageNumber) {
    const filteredList = filterCarsByName(Data, this.state.searchTerm);

    this.setState((prevState) => ({
      currentPage: pageNumber,
      data: paginateCarList(filteredList, pageNumber, prevState.carsPerPage),
    }));
  }

  handleSubmit(carName, carModel) {
    this.setState((prevState) => {
      let newCar = { name: carName, model: carModel };
      let newCarList = [...prevState.data, newCar];

      return {
        data: newCarList,
      };
    });
  }

  render() {
    //AKO USPIJEŠ DODATI NOVI AUTO PREKO ADDCAR, PROMIJENI OVO DOLJE U KEY={INDEX IZ DATA ARRAY-A} DA NE MORAŠ SAM DODAVATI NEKAKAV KEY
    const dataList = this.state.data.map((item, index) => {
      return <Item name={item.name} model={item.model} key={index} />;
    });

    let sortButtonText = this.state.sortedAZ === false ? "A-Z" : "Z-A";

    return (
      <>
        <Header onCarAdded={this.handleSubmit} />
        <main className="main">
          {dataList}
          <button
            className="btn sort-az"
            onClick={() => this.sortData(this.state.data)}
          >
            {sortButtonText}
          </button>
          <input
            type="text"
            placeholder="Search"
            onKeyUp={(e) => this.search(e.target.value)}
          />
          <Pagination
            carsPerPage={this.state.carsPerPage}
            totalCars={this.state.totalItems}
            paginate={this.paginate}
          />
        </main>
      </>
    );
  }
}

export default Main;
