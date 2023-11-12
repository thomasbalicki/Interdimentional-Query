import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pagination from "./components/Pagination/Pagination";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";

import rickAndMortyLogo from "../Public/rick-and-morty-logo.png";
import Filter from "./components/Filter/Filter";
import { randomQuote } from "./components/Data/RMQuotes";
import CharacterDetails from "./components/Card/CharacterDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CharacterDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(null);

  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const pageNumberLimit = 7;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(7);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const updateApi = useCallback(() => {
    return `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  }, [pageNumber, search, status, gender, species]);

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
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen font-gaegu">
      <h1 className="text-center text-white p-4 text-2xl text-md">
        Your Portal to{" "}
        <img
          src={rickAndMortyLogo}
          alt="Rick and Morty Logo"
          className="inline w-40 h-auto mb-2"
        />{" "}
        Characters, broh!
      </h1>
      <h1
        className="text-white text-lg m-10 absolute top-20 z-10"
        style={{ width: "275px" }}
      >
        {randomQuote}
      </h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <Pagination
        numberOfPages={numberOfPages}
        pageNumber={pageNumber}
        onPageChange={handlePageChange}
        pageNumberLimit={pageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        setMinPageNumberLimit={setMinPageNumberLimit}
      />
      <div className="container mx-auto p-2">
        <div className="lg:flex justify-center">
          <div className="lg:w-1/4 justify-center">
            {/* TODO: Find out why page number isn't being set to one when filters selected */}
            {/* TODO:Find out how to handle invalid filter combinations */}

            <Filter
              setStatus={setStatus}
              setPageNumber={setPageNumber}
              setGender={setGender}
              setSpecies={setSpecies}
            />
          </div>
          <div className="lg:w-3/4">
            <Card page="/" data={fetchedData} />
          </div>
        </div>
        <Pagination
          numberOfPages={numberOfPages}
          pageNumber={pageNumber}
          onPageChange={handlePageChange}
          pageNumberLimit={pageNumberLimit}
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          setMaxPageNumberLimit={setMaxPageNumberLimit}
          setMinPageNumberLimit={setMinPageNumberLimit}
        />
      </div>
    </div>
  );
}

export default App;
