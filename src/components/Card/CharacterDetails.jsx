import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

        // Fetch episode details for each episode URL
        const episodesData = await Promise.all(
          data.episode.map(async (episodeUrl) => {
            const episodeResponse = await axios.get(episodeUrl);
            return episodeResponse.data;
          })
        );

        // Extract episode names from the fetched episode data
        const episodeNamesArray = episodesData.map((episode) => episode.name);

        // Update the episode names state
        updateEpisodeNames(episodeNamesArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);

  return (
    <div className="container bg-gray-800 min-h-screen flex justify-center font-gaegu text-white">
      <div>
        <List episodeList={episodeNames} />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-center text-2xl mt-3">{name}</h1>

        <img className="w-full h-auto rounded-md" src={image} alt={name} />

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
