import CycloneIcon from "@mui/icons-material/Cyclone";
import "../../index.css";

function Navbar() {
  return (
    <nav className="bg-gray-700 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-500 text-xl font-bold">
          <CycloneIcon className="mb-1 mr-1" />
          Interdimensional Query
        </div>
        <ul className="flex space-x-4 text-xl">
          <li>
            <button className="text-white bg-transparent border-none hover:bg-gray-200 hover:text-green-500 p-1 px-2 rounded-lg transition-colors duration-300">
              Characters
            </button>
          </li>
          <li>
            <button className="text-white bg-transparent border-none hover:bg-gray-200 hover:text-green-500 p-1 px-2 rounded-lg transition-colors duration-300">
              Locations
            </button>
          </li>
          <li>
            <button className="text-white bg-transparent border-none hover:bg-gray-200 hover:text-green-500 p-1 px-2 rounded-lg transition-colors duration-300">
              Episodes
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
