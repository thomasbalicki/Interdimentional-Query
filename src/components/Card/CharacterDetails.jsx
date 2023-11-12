import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  const [fetchedData, updateFetchedData] = useState({});
  const { name, location, origin, gender, image, status, species } =
    fetchedData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        updateFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);

  return (
    <div className="container bg-gray-800 mx-auto flex justify-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="w-full h-auto" src={image} alt={name} />

        <div>{status}</div>

        <div className="content">
          <div className="">
            <span className="font-semibold">Gender: </span>
            {gender}
          </div>
          <div className="">
            <span className="font-semibold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="font-semibold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="font-semibold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
