import React from "react";

function SortAZButton({ isSorted, onListSorted }) {
  return (
    <button className="btn sort-az" onClick={onListSorted}>
      {isSorted}
    </button>
  );
}

export default SortAZButton;
