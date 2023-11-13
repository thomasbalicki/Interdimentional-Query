import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../index.css";
import List from "../List/List";
import axios from "axios";

const CharacterDetails = () => {
  const { id } = useParams();
  const [fetchedData, updateFetchedData] = useState({});
  const [episodeNames, updateEpisodeNames] = useState([]);

  const { name, location, origin, gender, image, status, species } =
    fetchedData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        const data = response.data;
        updateFetchedData(data);

        const episodesData = await Promise.all(
          data.episode.map(async (episodeUrl) => {
            const episodeResponse = await axios.get(episodeUrl);
            return episodeResponse.data;
          })
        );

        const episodeNamesArray = episodesData.map((episode) => episode.name);

        updateEpisodeNames(episodeNamesArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);

  const getStatusColorClass = (status) => {
    if (status === "Alive") {
      return "bg-green-600 alive";
    } else if (status === "Dead") {
      return "bg-red-600 dead";
    } else {
      return "bg-blue-400 unknown";
    }
  };

  return (
    <div className="container bg-gray-800 min-h-screen min-w-full flex justify-center font-gaegu text-white ">
      <div className="flex flex-col gap-3 m-3">
        <h1 className="text-center text-2xl mt-3">{name}</h1>

        <img
          className="w-full h-auto border-2 rounded-md border-gray-600"
          src={image}
          alt={name}
        />
        <div
          className={`rounded px-3 py-1 text-sm font-semibold text-gray-100 status ${getStatusColorClass(
            status
          )}`}
        >
          Status: {status}
        </div>

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
      <div>
        <List itemList={episodeNames} />
      </div>
    </div>
  );
};

export default CharacterDetails;
