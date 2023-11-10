import PropTypes from "prop-types";
import FilterBTN from "../FilterBTN";

function Species({ setSpecies, setPageNumber }) {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div>
      {species.map((item, index) => (
        <FilterBTN
          key={index}
          index={index}
          name="species"
          task={setSpecies}
          updatePageNumber={setPageNumber}
          input={item}
        />
      ))}
    </div>
  );
}

Species.propTypes = {
  setSpecies: PropTypes.func,
  setPageNumber: PropTypes.func,
};

export default Species;
