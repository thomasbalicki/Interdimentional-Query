import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
//import Filter from "./components/Filter/Filter";
//import Navbar from "./components/Navbar/Navbar";
//import Pagination from "./components/Pagination/Pagination";
//import Search from "./components/Search/Search";

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [search, setSearch] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=1/&name=${search}`;

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(api);
        const data = response.data.results;
        setCharacterData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [api]);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen font-gaegu">
      <Navbar />
      <h1 className="text-center text-white p-4 text-2xl text-md">
        Your Portal to <span className="text-green-500">Rick and Morty</span>{" "}
        Characters, broh!
      </h1>
      <Search setSearch={setSearch} />
      <div className="container mx-auto p-2">
        <div className="lg:flex">
          <Filter />
          <div className="lg:w-3/4">
            <div className="lg:flex">
              <Card data={characterData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
