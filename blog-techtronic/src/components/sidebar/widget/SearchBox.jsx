import { CiSearch } from "react-icons/ci";
import { useState } from "react";

function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div className="md:col-span-1">
      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-lg font-bold mb-4">Búsqueda de Ciudad</h3>
        <form onSubmit={handleSubmit} className="flex items-center">
          <label htmlFor="city" className="sr-only">
            Buscar ciudad...
          </label>
          <input
            type="text"
            name="city"
            placeholder="Introduce una ciudad..."
            id="city"
            className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="ml-2 focus:outline-none cursor-pointer transition-colors duration-200 hover:text-blue-500"
            aria-label="Buscar"
          >
            <CiSearch size="1.5em" className="text-gray-500" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;