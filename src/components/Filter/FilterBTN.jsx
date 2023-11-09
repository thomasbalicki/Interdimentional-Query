import PropTypes from "prop-types";
import "./styles.css";

const FilterBTN = ({ input, task, setPageNumber, index, name }) => {
  return (
    <div>
      <input type="radio" name={name} id={`${name}-${index}`} />
      <label
        onClick={() => {
          task(input);
          setPageNumber(1);
        }}
        htmlFor={`${name}-${index}`}
      >
        {input}
      </label>
    </div>
  );
};

FilterBTN.propTypes = {
  input: PropTypes.string,
  task: PropTypes.func,
  setPageNumber: PropTypes.func,
  name: PropTypes.string,
  index: PropTypes.number,
};

export default FilterBTN;
