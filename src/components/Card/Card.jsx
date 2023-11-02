import PropTypes from "prop-types";
import "../../index.css";

function Card({ data }) {
  const getStatusColorClass = (status) => {
    if (status === "Alive") {
      return "bg-green-500"; // Green for alive
    } else if (status === "Dead") {
      return "bg-red-500"; // Red for dead
    } else {
      return "bg-blue-400"; // Yellow for unknown
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
            className="w-48 max-w-xs rounded overflow-hidden bg-green-500 bg-opacity-30 shadow-lg m-4 border-2 border-green-500 card flex flex-col"
            key={character.id}
          >
            <img
              className="w-full"
              src={character.image}
              alt={character.name}
            />
            <div className="px-3 py-2 flex-grow">
              <div className="font-bold text-xl mb-1 text-white">
                {character.name}
              </div>
              <p className="text-white text-sm">
                <b>Origin:</b> {character.origin.name}
              </p>
            </div>
            <div className="px-2 pb-1">
              <div className="flex">
                <span
                  className={`inline-block ${getStatusColorClass(
                    character.status
                  )} rounded-full px-3 py-1 mx-1 text-sm font-semibold text-white status`}
                >
                  {character.status}
                </span>
                {character.species === "Human" ? (
                  <span className="inline-block bg-yellow-500 text-white rounded-full px-3 py-1 mx-1 text-sm font-semibold text-gray-700 species">
                    {character.species}
                  </span>
                ) : (
                  <span className="inline-block bg-purple-500 text-white rounded-full px-3 py-1 mx-1 text-sm font-semibold text-gray-700 species">
                    {character.species}
                  </span>
                )}
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
