import Status from "./categories/Status";
import Gender from "./categories/Gender";
import PropTypes from "prop-types";
import Species from "./categories/Species";
import { useState } from "react";

function Filter({ setPageNumber, setStatus, setGender, setSpecies }) {
  const [statusVisible, setStatusVisible] = useState(true);
  const [genderVisible, setGenderVisible] = useState(true);
  const [speciesVisible, setSpeciesVisible] = useState(true);

  const toggleStatus = () => setStatusVisible(!statusVisible);
  const toggleGender = () => setGenderVisible(!genderVisible);
  const toggleSpecies = () => setSpeciesVisible(!speciesVisible);

  const getIcon = (visible) => (visible ? " - " : " + ");

  return (
    <div className="bg-gray-700 lg:mt-3 lg:ml-4 p-2 rounded">
      <h1 className="font-bold text-xl text-gray-100 flex justify-center">
        Filters
      </h1>
      <div className="bg-gray-800 m-2 p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1
            className="text-white pb-1 hover:cursor-pointer hover:text-green-500"
            onClick={toggleStatus}
          >
            Status
          </h1>
          <span
            onClick={toggleStatus}
            className="text-white text-2xl hover:cursor-pointer hover:text-green-500"
          >
            {getIcon(statusVisible)}
          </span>
        </div>
        {statusVisible && (
          <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        )}
      </div>
      <div className="bg-gray-800 m-2 p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1
            className="text-white pb-1 hover:cursor-pointer hover:text-green-500"
            onClick={toggleGender}
          >
            Gender
          </h1>
          <span
            onClick={toggleGender}
            className="text-white text-2xl hover:cursor-pointer hover:text-green-500"
          >
            {getIcon(genderVisible)}
          </span>
        </div>
        {genderVisible && (
          <Gender setPageNumber={setPageNumber} setGender={setGender} />
        )}
      </div>
      <div className="bg-gray-800 m-2 p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1
            className="text-white pb-1 hover:cursor-pointer hover:text-green-500"
            onClick={toggleSpecies}
          >
            Species
          </h1>
          <span
            onClick={toggleSpecies}
            className="text-white text-2xl hover:cursor-pointer hover:text-green-500"
          >
            {getIcon(speciesVisible)}
          </span>
        </div>
        {speciesVisible && (
          <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        )}
      </div>
    </div>
  );
}

Filter.propTypes = {
  setStatus: PropTypes.func.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  setGender: PropTypes.func.isRequired,
  setSpecies: PropTypes.func.isRequired,
};

export default Filter;
