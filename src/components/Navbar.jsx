import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Navbar = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const linkStyle =
    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white border-gray-200 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/logo la cocha.png"
              className="h-16"
              alt="Flowbite Logo"
            />
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:block w-full md:w-auto md:order-1`}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white font-semibold">
              <li>
                <Link to={"/"} className={linkStyle}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to={"/instituto"} className={linkStyle}>
                  El Instituto
                </Link>
              </li>
              <li>
                <Link to={"/campusVirtual"} className={linkStyle}>
                  Campus Virtual
                </Link>
              </li>
              <li>
                <Link to={"/autoridades"} className={linkStyle}>
                  Autoridades
                </Link>
              </li>
              <li>
                <Link to={"/noticias"} className={linkStyle}>
                  Noticias
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
