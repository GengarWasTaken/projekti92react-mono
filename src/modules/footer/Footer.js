import React from "react";
import Pagination from "./components/Pagination";
import SearchInput from "./components/SearchInput";
import SortDataButton from "./components/SortDataButton";

function Footer({ isSorted, onListSorted, onSearch, pages, paginate }) {
  return (
    <div>
      <SortDataButton isSorted={isSorted} onListSorted={onListSorted} />
      <SearchInput onSearch={onSearch} />
      <Pagination pages={pages} paginate={paginate} />
    </div>
  );
}

export default Footer;
