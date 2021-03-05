import React from 'react'
import Item from "./Item"
import Data from "../database/Data"
import Pagination from "./Pagination"
import Search from "./Search"
import { filterCarsByName, sortCarsByNameAsc, sortCarsByNameDesc } from '../utils';

class Main extends React.Component {
  constructor() {
    super()

    this.state = {
      data: Data,
      sortedAZ: false,
      searchTerm: null,
      currentPage: 1,
      setCurrentPage: 1,
      carsPerPage: 5,
    }

    this.sortData = this.sortData.bind(this)
    this.search = this.search.bind(this)
/*     this.paginate = this.paginate.bind(this) */
  }

/*   paginate(pageNumber) {
    this.setState.setCurrentPage(pageNumber);
  } */

  sortData(list) {
    this.setState(prevState => {
      const sortingFunction = prevState.sortedAZ === false ? sortCarsByNameAsc : sortCarsByNameDesc;
      const sortedData = prevState.data.sort(sortingFunction);

      return {
        data: sortedData,
        sortedAZ: !prevState.sortedAZ,
      };
    });
  }

  search(searchTerm) {
    this.setState({ searchTerm });
  }

  render() {

    const indexOfLastCar = this.state.currentPage * this.state.carsPerPage;
    const indexOfFirstCar = indexOfLastCar - this.state.carsPerPage;
    const currentCars = this.state.data.slice(indexOfFirstCar, indexOfLastCar);
    
    const filteredList = filterCarsByName(currentCars, this.state.searchTerm);

    const dataList = filteredList.map((item) => {
      return <Item onClick={(item) => console.log(item)} name={item.name} model={item.model} key={item.id} />
    });

    let sortButtonText = this.state.sortedAZ === false ? "A-Z" : "Z-A";

    const paginate = (pageNumber) => {
      this.setState({currentPage: pageNumber})
    }

    return(
      <main className="main">
        {dataList}
        <button className="btn sort-az" onClick={() => this.sortData(this.state.data)}>{sortButtonText}</button>
        <input type="text" placeholder="Search" onKeyUp={(e) => this.search(e.target.value)}/>
        <Pagination carsPerPage={this.state.carsPerPage} totalCars={this.state.data.length} paginate={paginate}/>
      </main>
    )
  }
}

export default Main