import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container-nav">
      <div className="branding">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6T-RyDjII3fNJV5WlrdLYkVEu_VR786w0c6UnTU5Fn0OqWVHVcl1V-K9alC_dDnYw9M&usqp=CAU"
          alt=""
          className="logo-image"
        />
        <span className="font-semibold text-gray-600 hover:text-purple-600">
          FQ5 STORE
        </span>
      </div>
      <div className="nav-paths text-purple-600">
        <NavLink to="/" className="hover:text-gray-600">
          Home
        </NavLink>
        <NavLink to="/category/perifericos" className="hover:text-gray-600">
          Perifericos
        </NavLink>
        <NavLink to="/category/monitores" className="hover:text-gray-600">
          Monitores
        </NavLink>
        <NavLink to="/category/camaras" className="hover:text-gray-600">
          Camaras
        </NavLink>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
