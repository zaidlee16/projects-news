import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h2 className="text-2xl font-bold">BeritaNews</h2>

        {/* Menu untuk Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`hover:text-yellow-300 ${
              location.pathname === "/" ? "text-yellow-300" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/internasional"
            className={`hover:text-yellow-300 ${
              location.pathname === "/internasional" ? "text-yellow-300" : ""
            }`}
          >
            Internasional
          </Link>
          <Link
            to="/nasional"
            className={`hover:text-yellow-300 ${
              location.pathname === "/nasional" ? "text-yellow-300" : ""
            }`}
          >
            Nasional
          </Link>
          <Link
            to="/olahraga"
            className={`hover:text-yellow-300 ${
              location.pathname === "/olahraga" ? "text-yellow-300" : ""
            }`}
          >
            Olahraga
          </Link>
          <Link
            to="/teknologi"
            className={`hover:text-yellow-300 ${
              location.pathname === "/teknologi" ? "text-yellow-300" : ""
            }`}
          >
            Teknologi
          </Link>
          <Link
            to="/hiburan"
            className={`hover:text-yellow-300 ${
              location.pathname === "/hiburan" ? "text-yellow-300" : ""
            }`}
          >
            Hiburan
          </Link>
          <Link
            to="/gaya-hidup"
            className={`hover:text-yellow-300 ${
              location.pathname === "/gaya-hidup" ? "text-yellow-300" : ""
            }`}
          >
            Gaya Hidup
          </Link>
        </nav>

        {/* Menu Hamburger untuk Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu untuk Mobile */}
      {isOpen && (
        <nav className="md:hidden bg-blue-600 space-y-2 py-2 px-5">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block text-white hover:text-yellow-300"
          >
            Home
          </Link>
          <Link
            to="/internasional"
            onClick={toggleMenu}
            className="block text-white hover:text-yellow-300"
          >
            Internasional
          </Link>
          <Link
            to="/nasional"
            onClick={toggleMenu}
            className="block text-white hover:text-yellow-300"
          >
            Nasional
          </Link>
          <Link
            to="/olahraga"
            onClick={toggleMenu}
            className="block text-white hover:text-yellow-300"
          >
            Olahraga
          </Link>
          <Link
            to="/teknologi"
            onClick={toggleMenu}
            className="block text-white hover:text-yellow-300"
          >
            Teknologi
          </Link>
          <Link
            to="/hiburan"
            onClick={toggleMenu}
            className="block text-white hover:text-yellow-300"
          >
            Hiburan
          </Link>
          <Link
            to="/gaya-hidup"
            onClick={toggleMenu}
            className="block text-white hover:text-yellow-300"
          >
            Gaya Hidup
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
