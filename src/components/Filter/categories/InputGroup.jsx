import PropTypes from "prop-types";

const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="mb-3 max-w-xs mx-4">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="mt-1 block w-full p-2 border-2 border-gray-600 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring focus:border-green-500 sm:text-sm"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option key={index} value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  changeID: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default InputGroup;
