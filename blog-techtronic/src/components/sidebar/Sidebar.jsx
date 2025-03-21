import Categories from "./widget/Categories";
import SearchBox from "./widget/SearchBox";
import WeatherWidget from "./widget/WeatherWidget";

import { useState } from "react";

function Sidebar() {
  const [city, setCity] = useState('Madrid'); // Ciudad inicial
  const [country, setCountry] = useState('es'); // País inicial

  const handleSearch = (newCity) => {
    setCity(newCity);
    console.log('Estado city actualizado:', city); // Agrega esta línea
  };

  return (
    <aside className="space-y-8">
      <SearchBox onSearch={handleSearch} />
      <WeatherWidget city={city} country={country} />
      <Categories />
    </aside>
  );
}

export default Sidebar;