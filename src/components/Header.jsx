import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md top-0 left-0 right-0 z-10">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="text-xl font-bold">Blog de TechTronic</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-500">Inicio</a>
          <a href="#" className="hover:text-gray-500">Blog</a>
          <a href="#" className="hover:text-gray-500">Productos</a>
          <a href="#" className="hover:text-gray-500">Sobre nosotros</a>
          <a href="#" className="hover:text-gray-500">Contacto</a>
          <div  className="bg-black hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-md"  ><a href="#">Tienda</a></div>
        </nav>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {/* Icono de menú hamburguesa */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white py-2 px-6">
          <a href="#" className="block py-2 hover:text-gray-500">Inicio</a>
          <a href="#" className="block py-2 hover:text-gray-500">Blog</a>
          <a href="#" className="block py-2 hover:text-gray-500">Productos</a>
          <a href="#" className="block py-2 hover:text-gray-500">Sobre nosotros</a>
          <a href="#" className="block py-2 hover:text-gray-500">Contacto</a>
          <div className="bg-black hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-r-md" ><a href="#" className="block py-2 hover:text-gray-500">Tienda</a></div>
        </div>
        
      )}
    </header>
  );
};

export default Header;