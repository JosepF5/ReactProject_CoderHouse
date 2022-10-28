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
  );
};

export default NavBar;
