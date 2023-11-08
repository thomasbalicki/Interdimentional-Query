import PropTypes from "prop-types";

function FilterBTN({ inputArray }) {
  return (
    <div>
      {inputArray.map((value) => (
        <span
          key={value}
          className="inline-block text-gray-100 bg-gray-700 rounded-full px-3 py-1 m-1 text-sm font-semibold species"
        >
          {value}
        </span>
      ))}
    </div>
  );
}

FilterBTN.propTypes = {
  inputArray: PropTypes.array.isRequired,
};

export default FilterBTN;
