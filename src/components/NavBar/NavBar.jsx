import React, { useState, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { getCollections } from "../../config/getFirestoreApp";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCollections("categorias")
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, []);

  /* return (
    <div className="nav container-nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
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
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <NavLink className="md:p-4 py-2 block" to={`/`}>
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
  ); */
  /* return (
    <nav class="container-nav bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <div>
              <a
                href="#"
                class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  class="h-6 w-6 mr-1 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span class="font-bold">Better Dev</span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">
                Features
              </a>
              <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">
                Pricing
              </a>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-1">
            <a href="" class="py-5 px-3">
              Login
            </a>
            <a
              href=""
              class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </a>
          </div>
          <div class="md:hidden flex items-center">
            <button class="mobile-menu-button">
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="mobile-menu hidden md:hidden">
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
          Features
        </a>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
          Pricing
        </a>
      </div>
    </nav>
  ); */
  return (
    <nav class="container-nav nav flex flex-wrap items-center justify-between px-4">
      <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Logo_dedsec_white.png"
          width="50em"
          heigth="50em"
        />
        <NavLink
          to="/"
          className="font-semibold branding text-black hover:text-purple-600 text-xl tracking-tight"
        >
          FQ5 STORE
        </NavLink>
      </div>

      <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        for="menu-btn"
      >
        <span class="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li class="border-t md:border-none p-2">
          <NavLink
            to="/"
            className="font-semibold branding text-black hover:text-purple-600 text-xl tracking-tight "
          >
            Home
          </NavLink>
        </li>
        {categories.map((cat, index) => (
          <li class="border-t md:border-none p-2" key={index}>
            <NavLink
              className="font-semibold branding text-black hover:text-purple-600 text-xl tracking-tight"
              to={`/category/${cat.nombre}`}
            >
              {cat.nombre.charAt(0).toUpperCase() + cat.nombre.slice(1)}
            </NavLink>
          </li>
        ))}
        <li class="border-t branding md:border-none p-2">
        <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
