import Status from "./categories/Status";
import Gender from "./categories/Gender";
import PropTypes from "prop-types";

function Filter({ setPageNumber, setStatus, setGender }) {
  return (
    <div className="bg-gray-700 lg:mt-3 lg:ml-4 p-2 rounded">
      <h1 className="font-bold text-xl text-gray-100 flex justify-center">
        Filters
      </h1>
      <div className="bg-gray-800 m-2 p-2 rounded-md">
        <h1 className="text-white pb-1">Status</h1>
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>
      <div className="bg-gray-800 m-2 p-2 rounded-md">
        <h1 className="text-white pb-1">Gender</h1>
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </div>
      <div className="bg-gray-800 m-2 p-2 rounded-md">
        <h1 className="text-white pb-1">Species</h1>
      </div>
    </div>
  );
}

Filter.propTypes = {
  setStatus: PropTypes.func.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  setGender: PropTypes.func.isRequired,
};

export default Filter;
