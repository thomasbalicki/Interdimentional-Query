import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/categories/InputGroup";

const Episodes = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const { air_date, name } = info;
  const [id, setID] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        const data = response.data;
        setInfo(data);

        const charactersData = await Promise.all(
          data.characters.map((characterUrl) =>
            axios.get(characterUrl).then((res) => res.data)
          )
        );
        setResults(charactersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);

  return (
    <div className="flex items-center justify-center min-h-screen font-gaegu text-white bg-gray-800">
      <div className="text-center" style={{ marginLeft: "68px" }}>
        <h1 className="m-3 text-2xl">
          Episode name:{" "}
          <span className="text-primary">{name || "Unknown"}</span>
        </h1>
        <h5>Air Date: {air_date || "Unknown"}</h5>
        <h4 className="mt-4 mb-4 ml-4 text-left">Select Episode</h4>
        <InputGroup name="Episode" changeID={setID} total={51} />
        <div className="mt-4">
          <Card page="/episodes/" data={results} />
        </div>
      </div>
    </div>
  );
};

export default Episodes;
