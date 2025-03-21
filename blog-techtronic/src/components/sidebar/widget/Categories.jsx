import React from 'react';
import { FaMobileAlt, FaLaptop, FaHome, FaWatchmanMonitoring } from 'react-icons/fa'; // Importa los iconos que necesitas

function Categories() {
  const categories = [
    { name: "Smartphones", count: 24, icon: <FaMobileAlt /> },
    { name: "Portátiles & Ordenadores", count: 18, icon: <FaLaptop /> },
    { name: "Smart Home", count: 12, icon: <FaHome /> },
    { name: "Wearables", count: 9, icon: <FaWatchmanMonitoring /> },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Categorías</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between py-2 hover:bg-gray-100 cursor-pointer items-center">
            <span className="flex items-center">
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </span>
            <span className="text-gray-500 flex items-center">
              {category.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;