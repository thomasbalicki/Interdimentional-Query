import CycloneIcon from "@mui/icons-material/Cyclone";

function Navbar() {
  const isLinkActive = (path) => {
    return window.location.pathname === path;
  };

  const getLinkStyle = (path) => {
    return isLinkActive(path)
      ? "text-white bg-green-500 p-2 rounded"
      : "text-white hover:bg-gray-500 p-2 rounded";
  };
  return (
    <nav className="bg-gray-700 p-2 font-gaegu">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-500 text-xl font-bold">
          <CycloneIcon className="mb-1 mr-1" />
          Interdimensional Query
        </div>
        <ul className="flex space-x-4 text-xl">
          <li>
            <a href="/" className={getLinkStyle("/")}>
              Characters
            </a>
          </li>
          <li>
            <a href="/locations" className={getLinkStyle("/locations")}>
              Locations
            </a>
          </li>
          <li>
            <a href="/episodes" className={getLinkStyle("/episodes")}>
              Episodes
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
