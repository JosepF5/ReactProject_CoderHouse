import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

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
        <a href="" className="hover:text-gray-600">
          Home
        </a>
        <a href="" className="hover:text-gray-600">
          Market
        </a>
        <a href="" className="hover:text-gray-600">
          Contact Me
        </a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
