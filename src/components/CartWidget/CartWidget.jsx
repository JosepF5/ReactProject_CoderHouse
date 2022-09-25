import React, { useState } from "react";

const CartWidget = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <button
        className="bg-transparent hover:border-transparent active:text-gray-600"
        onClick={() => setContador(contador + 1)}
      >
        <i className="fa-solid fa-cart-shopping p-2"></i>
      </button>
      <span>{contador}</span>
    </div>
  );
};

export default CartWidget;
