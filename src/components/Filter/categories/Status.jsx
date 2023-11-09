import PropTypes from "prop-types";
import FilterBTN from "../FilterBTN";

function Status({ setStatus, setPageNumber }) {
  const status = ["Alive", "Dead", "Unknown"];
  return (
    <div>
      {status.map((item, index) => (
        <FilterBTN
          key={index}
          index={index}
          name="status"
          task={setStatus}
          updatePageNumber={setPageNumber}
          input={item}
        />
      ))}
    </div>
  );
}

Status.propTypes = {
  setStatus: PropTypes.func,
  setPageNumber: PropTypes.func,
};

export default Status;
