import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1);
  const { agregarAlCarrito, isInCart } = useCartContext();
  const [goCart, setGoCart] = useState(isInCart(item));

  const onAdd = (e) => {
    e.preventDefault();
    setGoCart(false);
    agregarAlCarrito({ ...item, cantidad: item.price * count });
  };

  return (
    <div className="pt-6 pb-12 bg-gray-300">
      <div id="card" className="">
        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
          <div
            v-for="card in cards"
            className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
          >
            <div className="h-64 w-auto md:w-1/2">
              <div className="h-full w-full flex items-center justify-center">
                <img
                  className="inset-0 h-6/12 w-6/12 md:h-8/12 md:w-8/12  object-cover object-center"
                  src={item.picture}
                />
              </div>
            </div>
            <div className="h-full w-auto md:w-1/2 py-4 px-6 items-center text-gray-800 flex flex-col justify-between">
              <h3 className="font-semibold text-lg leading-tight">
                {item.title}
              </h3>
              <p className="mt-2">{item.description}</p>
              {goCart && (
                <>
                  <label
                    htmlFor="points"
                    className="block text-md font-medium text-purple-600 dark:text-purple-600"
                  >
                    {count}
                  </label>
                  <input
                    onChange={(e) => setCount(e.target.value)}
                    type="range"
                    id="points"
                    name="points"
                    value={count}
                    min="1"
                    max={item.stock}
                    className="w-6/12 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  ></input>
                </>
              )}

              <div className="mt-4">
                {goCart && (
                  <span className="text-md font-medium text-purple-600 dark:text-purple-600">
                    {`S/ ${item.price * count} soles`}
                  </span>
                )}
                <Link
                  to="#"
                  className={
                    goCart
                      ? "bg-green-600 m-2 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                      : "bg-gray-200 m-2 pointer-events-none text-gray-500 font-bold py-2 px-4 rounded"
                  }
                  onClick={(e) => onAdd(e)}
                >
                  {goCart ? (
                    <>
                      Agregar <i className="fa-solid fa-cart-shopping"></i>
                    </>
                  ) : (
                    <>
                      Agregado <i className="fa-solid fa-cart-flatbed"></i>
                    </>
                  )}
                </Link>
                <Link
                  to="/"
                  className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
