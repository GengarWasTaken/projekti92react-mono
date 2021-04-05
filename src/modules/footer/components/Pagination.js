import React from "react";
import { observer } from "mobx-react";

const Pagination = observer(({ pages, paginate }) => {
  console.log(pages());
  return (
    <nav>
      <ul className="pagination">
        {pages().map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Pagination;
