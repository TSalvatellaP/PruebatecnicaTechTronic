import Categories from "./widget/Categories";
import SearchBox from "./widget/SearchBox";
import WeatherWidget from "./widget/WeatherWidget";

function Sidebar() {
  return (
    <aside className="space-y-8">
      <SearchBox />
      <WeatherWidget />
      <Categories />
    </aside>
  );
}

export default Sidebar;