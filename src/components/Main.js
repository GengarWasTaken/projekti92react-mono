import React from 'react'
import Item from "./Item"
import Data from "../database/Data"
import Search from "./Search"
import { filterCarsByName, sortCarsByNameAsc, sortCarsByNameDesc } from '../utils';

class Main extends React.Component {
  constructor() {
    super()

    this.state = {
      data: Data,
      sortedAZ: false,
      searchTerm: null,
    }

    this.sortData = this.sortData.bind(this)
    this.search = this.search.bind(this)
  }

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
    const filteredList = filterCarsByName(this.state.data, this.state.searchTerm);

    const dataList = filteredList.map((item) => {
      return <Item onClick={(item) => console.log(item)} name={item.name} model={item.model} key={item.id} />
    });

    let sortButtonText = this.state.sortedAZ === false ? "A-Z" : "Z-A";

    return(
      <main className="main">
        {dataList}
        <button className="btn sort-az" onClick={() => this.sortData(this.state.data)}>{sortButtonText}</button>
        <input type="text" placeholder="Search" onKeyUp={(e) => this.search(e.target.value)}/>
      </main>
    )
  }
}

export default Main
