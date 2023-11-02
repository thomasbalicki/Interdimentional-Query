import PropTypes from "prop-types";
import "../../index.css";

function Search({ setSearch }) {
  const prevDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center space-x-4 justify-center">
      <input
        type="text"
        placeholder="Search 800+ characters by name"
        className="py-2 px-3 rounded-lg border border-green-500 focus:outline-none focus:ring focus:ring-green-400 w-64"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={prevDefault}
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-300 transition-colors duration-300"
      >
        Search
      </button>
    </div>
  );
}

Search.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Search;
