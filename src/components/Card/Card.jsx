import PropTypes from "prop-types";
import "../../index.css";

function Card({ data }) {
  const getStatusColorClass = (status) => {
    if (status === "Alive") {
      return "bg-green-500";
    } else if (status === "Dead") {
      return "bg-red-500";
    } else if (status === "Mythological Creature") {
      return "bg-orange-500";
    } else {
      return "bg-blue-400";
    }
  };

  const getSpeciesColorClass = (species) => {
    if (species === "Human") {
      return "bg-yellow-100";
    } else if (species === "Alien") {
      return "bg-purple-100";
    } else if (species === "Mythological Creature") {
      return "bg-teal-100";
    } else if (species === "Cronenberg") {
      return "bg-pink-100";
    } else {
      return "bg-blue-100";
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
            className="w-48 max-w-xs rounded overflow-hidden bg-gray-100 shadow-lg m-4 border-2 border-green-500 card flex flex-col relative"
            key={character.id}
          >
            <span
              className={`absolute top-0 right-0 mt-1 mr-1 inline-block ${getStatusColorClass(
                character.status
              )} rounded-full px-3 py-1 text-sm font-semibold text-white status`}
            >
              {character.status}
            </span>
            <img
              className="w-full"
              src={character.image}
              alt={character.name}
            />
            <div className="px-3 py-2 flex-grow">
              <div className="font-bold text-xl mb-1 text-gray-900">
                {character.name}
              </div>
              <p className="text-gray-800 text-sm">
                <b>Origin:</b> {character.origin.name}
              </p>
            </div>
            <div className="px-2 pb-1">
              <div className="flex">
                <span
                  className={`inline-block ${getSpeciesColorClass(
                    character.species
                  )} text-gray-700 rounded-full px-3 py-1 mx-1 text-sm font-semibold species`}
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
