import React, { useState, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { getCategories } from "../../config/getFirestoreApp";

const NavBar = () => {
  const handleList = (e, menu) => {
    e.preventDefault();
    console.log(menu);
    /* menu.classList.toggle("hidden"); */
    document.body.classList.toggle("hamburger");
  };
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, []);

  /* return (
    <nav
      className="
        container-nav
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
    >
      <div>
        <NavLink
          to="/"
          className="flex items-center dark:text-black hover:text-purple-600"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="FQ5 Logo"
          />
          <span className="self-center text-xl branding font-semibold whitespace-nowrap">
            FQ5 STORE
          </span>
        </NavLink>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={(e) => handleList(e, document.querySelector("#menu"))}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul
          className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
        >
          <li>
            <NavLink className="md:p-4 py-2 block hover:text-purple-400" to="/">
              Home
            </NavLink>
          </li>
          {categories.map((cat, index) => (
            <li key={index}>
              <NavLink
                className="md:p-4 py-2 block hover:text-purple-600"
                to={`/category/${cat.nombre}`}
              >
                {cat.nombre.charAt(0).toUpperCase() + cat.nombre.slice(1)}
              </NavLink>
            </li>
          ))}
          <CartWidget />
        </ul>
      </div>
    </nav>
  ); */
  return (
    <div class="nav container-nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <NavLink
          to="/"
          className="nav-title flex items-center dark:text-black hover:text-purple-600"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="FQ5 Logo"
          />
          <span className="self-center text-xl branding font-semibold whitespace-nowrap">
            FQ5 STORE
          </span>
        </NavLink>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <NavLink
          className="md:p-4 py-2 block"
          to={`/`}
        >
          Home
        </NavLink>
        {categories.map((cat, index) => (
          <NavLink
            key={index}
            className="md:p-4 py-2 block"
            to={`/category/${cat.nombre}`}
          >
            {cat.nombre.charAt(0).toUpperCase() + cat.nombre.slice(1)}
          </NavLink>
        ))}
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
