//import PropTypes from "prop-types";
import "./styles.css";

const FilterBTN = () => {
  return (
    <div>
      <input type="radio" name="size" id="small" />
      <label htmlFor="small">small</label>
    </div>
  );
};

/* FilterBTN.propTypes = {
  inputArray: PropTypes.array.isRequired,
}; */

export default FilterBTN;
