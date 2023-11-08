import mortyhead from "../../../Public/mortyhead.png";
import rickhead from "../../../Public/rickhead.png";

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
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center text-white text-xl font-bold mb-1">
          <img src={rickhead} className="w-10" />
          <span>Interdimensional Query</span>
          <img src={mortyhead} className="w-10" />
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
