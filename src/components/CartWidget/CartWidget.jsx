import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartList } = useCartContext();
  return (
    <div>
      <Link
        to='/cart'
        className="bg-transparent hover:border-transparent active:text-gray-600"
      >
        <i className="fa-solid fa-cart-shopping p-2"></i>
      </Link>
      <span>{cartList.length|0}</span>
    </div>
  );
};

export default CartWidget;
