import PropTypes from "prop-types";
import "./styles.css";

function List({ itemList }) {
  return (
    <>
      <h1 className="text-center text-2xl mt-3">Episodes</h1>
      <div
        className="overflow-y-auto bg-gray-900 border-2 rounded-md border-gray-700 m-3 scrollbar"
        style={{ maxHeight: "450px", minWidth: "300px" }}
      >
        <div className="p-2">
          <ul className="list-none p-0 m-0">
            {itemList.map((item, index) => (
              <li
                key={index}
                className="bg-gray-800 p-4 my-2 rounded-md hover:bg-gray-700 transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

List.propTypes = {
  itemList: PropTypes.array,
};

export default List;
