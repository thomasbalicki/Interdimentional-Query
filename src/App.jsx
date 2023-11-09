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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
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

  const pageNumberLimit = 7;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(7);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const updateApi = useCallback(() => {
    return `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}`;
  }, [pageNumber, search, status, gender]);

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
            <Filter
              setStatus={setStatus}
              setPageNumber={setPageNumber}
              setGender={setGender}
            />
          </div>
          <div className="lg:w-3/4">
            <Card data={fetchedData} />
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
