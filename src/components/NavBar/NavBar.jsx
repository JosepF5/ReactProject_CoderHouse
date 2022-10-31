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
