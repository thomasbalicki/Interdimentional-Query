const Filter = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full p-4">
      <div className="bg-white p-4 rounded-lg shadow-md min-w-64">
        <div className="text-center font-bold text-xl mb-4">Filters</div>
        <div className="accordion mb-4" id="accordionExample">
          <div className="mb-2">
            <button
              className="w-full text-left bg-gray-200 p-3 rounded-lg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#status"
              aria-expanded="true"
            >
              Status
            </button>
            <div id="status" className="collapse show">
              {/* Status content here */}
            </div>
          </div>

          <div className="mb-2">
            <button
              className="w-full text-left bg-gray-200 p-3 rounded-lg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#species"
            >
              Species
            </button>
            <div id="species" className="collapse">
              {/* Species content here */}
            </div>
          </div>

          <div>
            <button
              className="w-full text-left bg-gray-200 p-3 rounded-lg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#gender"
            >
              Gender
            </button>
            <div id="gender" className="collapse">
              {/* Gender content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
