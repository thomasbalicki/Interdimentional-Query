import PropTypes from "prop-types";
import "../../index.css";

function Card({ data }) {
  const getStatusColorClass = (status) => {
    if (status === "Alive") {
      return "bg-green-600 alive";
    } else if (status === "Dead") {
      return "bg-red-600 dead";
    } else {
      return "bg-blue-500 unknown";
    }
  };

  const getSpeciesColorClass = (species) => {
    if (species === "Human") {
      return "bg-gray-600";
    } else if (species === "Alien") {
      return "bg-gray-600";
    } else if (species === "Mythological Creature") {
      return "bg-gray-600";
    } else if (species === "Cronenberg") {
      return "bg-gray-600";
    } else {
      return "bg-gray-600";
    }
  };

  if (!data || data.length === 0) {
    return <div>No Characters Found :/</div>;
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {data.map((character) => (
          <div
            className="w-48 max-w-xs rounded overflow-hidden bg-gray-700 shadow-lg m-4 card flex flex-col relative"
            key={character.id}
          >
            <span
              className={`absolute top-0 right-0 mt-1 mr-1 inline-block ${getStatusColorClass(
                character.status
              )} rounded px-3 py-1 text-sm font-semibold text-gray-100 status`}
            >
              {character.status}
            </span>
            <img
              className="w-full"
              src={character.image}
              alt={character.name}
            />
            <div className="px-3 py-2 flex-grow">
              <div className="font-bold text-xl mb-1 text-gray-100">
                {character.name}
              </div>
              <p className="text-gray-100 text-sm">
                <b>Origin:</b> {character.origin.name}
              </p>
            </div>
            <div className="px-2 pb-1">
              <div className="flex">
                <span
                  className={`inline-block ${getSpeciesColorClass(
                    character.species
                  )} text-gray-100 rounded-full px-3 py-1 mx-1 mb-1 text-sm font-semibold species`}
                >
                  {character.species}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Card;
