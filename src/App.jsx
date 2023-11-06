import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
//import Filter from "./components/Filter/Filter";
//import Filter from "./components/Filter/Filter";
//import Navbar from "./components/Navbar/Navbar";
//import Pagination from "./components/Pagination/Pagination";
//import Search from "./components/Search/Search";
import rickAndMortyLogo from "../Public/rick-and-morty-logo.png";
//import rick from "../Public/rick.png";
import morty from "../Public/morty.png";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(null);

  //let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  const updateApi = useCallback(() => {
    return `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  }, [pageNumber, search]);

  useEffect(() => {
    const api = updateApi();

    (async function () {
      try {
        const response = await axios.get(api);
        const { info, results } = response.data;
        setNumberOfPages(info.pages);
        setFetchedData(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [updateApi]);

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen font-gaegu">
      <Navbar />
      <h1 className="text-center text-white p-4 text-2xl text-md">
        Your Portal to{" "}
        <img
          src={rickAndMortyLogo}
          alt="Rick and Morty Logo"
          className="inline w-40 h-auto mb-2"
        />{" "}
        Characters, broh!
      </h1>
      <Search setSearch={setSearch} />
      <div className="container mx-auto p-2">
        <div className="lg:flex">
          {/* <Filter /> */}
          {/* <img
            src={morty}
            alt="Rick"
            className="fixed w-64 bottom-0 left-0 mb-2 ml-2 z-10"
          /> */}

          <div className="lg:w-3/4">
            <div className="lg:flex">
              <Card data={fetchedData} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        numberOfPages={numberOfPages}
        pageNumber={pageNumber}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
