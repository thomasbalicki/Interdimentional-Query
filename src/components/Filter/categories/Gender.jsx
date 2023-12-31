import PropTypes from "prop-types";
import FilterBTN from "../FilterBTN";

function Gender({ setGender, setPageNumber }) {
  const genders = ["female", "male", "genderless", "unknown"];
  return (
    <div>
      {genders.map((item, index) => (
        <FilterBTN
          key={index}
          index={index}
          name="gender"
          task={setGender}
          updatePageNumber={setPageNumber}
          input={item}
        />
      ))}
    </div>
  );
}

Gender.propTypes = {
  setGender: PropTypes.func,
  setPageNumber: PropTypes.func,
};

export default Gender;
