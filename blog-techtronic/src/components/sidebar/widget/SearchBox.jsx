import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  return (
    <div className="md:col-span-1">
      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-lg font-bold mb-4">Búsqueda</h3>
        <form action="/search" className="flex items-center">
          <label htmlFor="search" className="sr-only">
            Buscar por título...
          </label>
          <input
            type="text"
            name="search"
            placeholder="Busca por título..."
            id="search"
            className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
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
};

export default SearchBox;