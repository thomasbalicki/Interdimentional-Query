import PropTypes from "prop-types";

function Pagination({
  numberOfPages,
  pageNumber,
  onPageChange,
  pageNumberLimit,
  maxPageNumberLimit,
  setMaxPageNumberLimit,
  minPageNumberLimit,
  setMinPageNumberLimit,
}) {
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
    <div className="mt-5 mb-3 flex justify-center">
      <ul className="list-none flex">
        <button
          className="rounded-full bg-gray-700 text-white cursor-pointer p-2 mx-1 px-3 hover:bg-gray-500"
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
              className={
                pageNumber == page
                  ? "bg-green-500 text-white rounded-full cursor-pointer p-2 mx-1 px-3"
                  : "rounded-full bg-gray-700 text-white cursor-pointer p-2 mx-1 px-3 hover:bg-gray-500"
              }
            >
              <button>{page}</button>
            </li>
          ) : null
        )}
        <button
          className="rounded-full bg-gray-700 text-white cursor-pointer p-2 mx-1 px-3 hover:bg-gray-500"
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
  pageNumberLimit: PropTypes.number,
  maxPageNumberLimit: PropTypes.number,
  setMaxPageNumberLimit: PropTypes.func,
  minPageNumberLimit: PropTypes.number,
  setMinPageNumberLimit: PropTypes.func,
};
export default Pagination;
