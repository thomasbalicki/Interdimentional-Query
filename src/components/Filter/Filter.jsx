import FilterBTN from "./FilterBTN";

function Filter() {
  let status = ["Alive", "Dead", "Unknown"];
  let genders = ["female", "male", "genderless", "unknown"];
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="bg-gray-700 lg:mt-3 lg:ml-4 p-2 rounded">
      <h1 className="font-bold text-xl text-gray-100 flex justify-center">
        Filters
      </h1>
      <div className="bg-gray-800 m-2 p-2 rounded-md">
        <h1 className="text-white pb-1">Status</h1>
        <FilterBTN inputArray={status} />
      </div>
      <div className="bg-gray-800 m-2 p-2 rounded-md">
        <h1 className="text-white pb-1">Gender</h1>
        <FilterBTN inputArray={genders} />
      </div>
      <div className="bg-gray-800 m-2 p-2 rounded-md">
        <h1 className="text-white pb-1">Species</h1>
        <FilterBTN inputArray={species} />
      </div>
    </div>
  );
}

export default Filter;
