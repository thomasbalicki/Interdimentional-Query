import PropTypes from "prop-types";
import "./pagination.css";
import { useState } from "react";

function Pagination({ numberOfPages, pageNumber, onPageChange }) {
  const [pageNumberLimit, setPageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  if (!numberOfPages) return null;

  // Create an array of page numbers from 1 to pageInfo
  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  const handleNextbtn = () => {
    onPageChange(pageNumber + 1);

    if (pageNumber + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    onPageChange(pageNumber - 1);

    if ((pageNumber - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div className="pagination">
      <ul className="pageNumbers">
        <button
          onClick={handlePrevBtn}
          disabled={pageNumber == pages[0] ? true : false}
        >
          Prev
        </button>
        {pages.map((page) =>
          page < maxPageNumberLimit + 1 && page > minPageNumberLimit ? (
            <li
              key={page}
              id={page}
              onClick={() => onPageChange(page)}
              className={pageNumber == page ? "active" : null}
            >
              <button>{page}</button>
            </li>
          ) : null
        )}
        <button
          onClick={handleNextbtn}
          disabled={pageNumber == pages[pages.length - 1] ? true : false}
        >
          Next
        </button>
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  numberOfPages: PropTypes.number,
  pageNumber: PropTypes.number,
  onPageChange: PropTypes.func,
};
export default Pagination;
