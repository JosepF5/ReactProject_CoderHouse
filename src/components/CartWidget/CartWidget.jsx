import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getItems } = useCartContext();
  return (
    <div className="md:inline text-blue-400 hover:text-purple-600 items-center px-8">
      <Link
        to='/cart'
        className="bg-transparent hover:border-transparent active:text-gray-600"
      >
        <i className="fa-solid fa-cart-shopping p-2"></i>
      </Link>
      <span>{getItems().length|0}</span>
    </div>
  );
};

export default CartWidget;
