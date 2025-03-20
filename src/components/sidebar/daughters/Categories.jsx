const Categories = ({ categories }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Categorías</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between border-b pb-2">
            <span>{category.name}</span>
            <span className="text-gray-500">{category.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
  