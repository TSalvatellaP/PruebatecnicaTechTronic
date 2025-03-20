import Categories from "./widget/Categories";
import SearchBox from "./widget/SearchBox";
import WeatherWidget from "./widget/WeatherWidget";

function Sidebar() {
  const categories = [
    { name: "Smartphones", count: 24 },
    { name: "Portátiles & Ordenadores", count: 18 },
    { name: "Smart Home", count: 12 },
    { name: "Wearables", count: 9 },
  ];

  return (
    <aside className="space-y-8">
      <SearchBox/>
      <WeatherWidget/>
      <Categories categories={categories} />
    </aside>
  );
};

export default Sidebar;