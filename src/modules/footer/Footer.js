import React from "react";
import Pagination from "./components/Pagination";
import SearchInput from "./components/SearchInput";
import SortDataButton from "./components/SortDataButton";

function Footer({ isSorted, onListSorted, onSearch, paginationData }) {
  return (
    <div>
      <SortDataButton isSorted={isSorted} onListSorted={onListSorted} />
      <SearchInput onSearch={onSearch} />
      <Pagination paginationData={paginationData} />
    </div>
  );
}

export default Footer;
