import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ item, onAdd, goCart }) => {
  const [count, setCount] = useState(1);

  return (
    <>
      {goCart && (
        <>
          <span className="mt-2 text-md items-center font-medium text-purple-600 dark:text-purple-600">
            {`S/ ${item.price * count} soles`}
          </span>
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
      <div className="mt-2 flex">
        <Link
          to="#"
          className={
            goCart
              ? "bg-green-600 m-2 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
              : "bg-gray-200 m-2 pointer-events-none text-gray-500 font-bold py-2 px-4 rounded"
          }
          onClick={(e) => onAdd(e,count)}
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
    </>
  );
};

export default ItemCount;
