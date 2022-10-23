import React from "react";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg border p-5 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center content-around pb-10">
        <img
          className="mb-3 w-32 h-24 rounded-full shadow-lg dark bg-black p-2"
          src={item.picture}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {item.title.substring(0, 25)}
          {item.title.length >= 25 && <span>...</span>}
        </h5>
        <span className="text-sm text-purple-600 dark:text-purple-600">
          S/ {item.price} soles
        </span>
        <div className="flex flex-col items-center mt-4 space-x-3 md:mt-6">
          <Link
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            to={`/detail/${item.id}`}
          >
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
