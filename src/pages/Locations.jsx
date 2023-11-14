import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/categories/InputGroup";

const Locations = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const { dimension, name } = info;
  const [number, setNumber] = useState(1);

  const api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        const data = response.data;
        setInfo(data);

        const charactersData = await Promise.all(
          data.residents.map((characterUrl) =>
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
    <div className="flex items-center justify-center min-h-screen font-gaegu text-white bg-gradient-to-b from-gray-800 to-black">
      <div className="text-center" style={{ marginLeft: "68px" }}>
        <h1 className="m-3 text-2xl">
          Location name:{" "}
          <span className="text-primary text-green-500">
            {name || "Unknown"}
          </span>
        </h1>
        <h5>Dimension: {dimension || "Unknown"}</h5>
        <h4 className="mt-4 mb-4 ml-4 text-left">Select Location</h4>
        <InputGroup name="location" changeID={setNumber} total={126} />
        <div className="mt-4">
          <Card page="/location/" data={results} />
        </div>
      </div>
    </div>
  );
};

export default Locations;
