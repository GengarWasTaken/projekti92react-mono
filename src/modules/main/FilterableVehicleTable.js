import React from "react";
import Item from "./components/Item";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { observer } from "mobx-react";

const FilterableVehicleTable = observer(({ store }) => {
  const dataList = store.data.map((item) => {
    return <Item name={item.name} model={item.model} key={item.id} />;
  });

  let sortButtonText = store.sortedAZ === false ? "A-Z" : "Z-A";

  let paginationData = {
    carsPerPage: store.carsPerPage,
    totalCars: store.totalItems,
    paginate: store.paginate,
  };

  return (
    <>
      <Header onCarAdded={store.handleSubmit} />
      <main className="main">{dataList}</main>
      <Footer
        isSorted={sortButtonText}
        onListSorted={() => store.sortData()}
        onSearch={(searchTerm) => store.search(searchTerm)}
        paginationData={paginationData}
      />
    </>
  );
});

export default FilterableVehicleTable;
