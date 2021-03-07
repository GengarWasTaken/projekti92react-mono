import React from "react";
import Item from "./Item";
import Data from "../database/Data";
import Pagination from "./Pagination";
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

  render() {
    const dataList = this.state.data.map((item) => {
      return (
        <Item
          name={item.name}
          model={item.model}
          key={item.id}
          isCollapsed={this.state.isCollapsed}
          collapseItem={this.collapseItem}
        />
      );
    });

    let sortButtonText = this.state.sortedAZ === false ? "A-Z" : "Z-A";

    return (
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
    );
  }
}

export default Main;
