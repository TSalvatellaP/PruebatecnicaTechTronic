import { CiSearch } from "react-icons/ci";
const SearchBox = () => {
    return (
      <div className="md:col-span-1">
         <div className="bg-white shadow-md rounded-md p-6">
         <h3 className="text-lg font-bold mb-4">Búsqueda</h3>
            <form action="/buscar" className="flex items-center">
                <input
                    type="text"
                    name="q"
                    placeholder="Busca por título..."
                    id="q"
                    className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
                <CiSearch size="2em" />
            </form>
        </div>
        </div>

    );
  };
  
  export default SearchBox;
  