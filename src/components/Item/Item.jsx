import React,{ useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
const Item = ({ item }) => {
  const { isInCart } = useCartContext();
  const [cart,setCart]=useState(isInCart(item))
  /* console.log(cart) */
  return (
    <div className="w-full max-w-sm bg-white rounded-lg border p-5 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {isInCart(item)?(<i className="text-green-400 fa-solid fa-cart-plus"></i>):(<i className="text-red-400 fas fa-cart-arrow-down"></i>)}
      <div className="flex flex-col items-center content-around pb-10">
        <img
          className="mb-3 w-32 h-24 rounded-full shadow-lg dark bg-black p-2"
          src={item.picture}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-x font-medium text-gray-900 dark:text-white">
          {item.title.substring(0, 30)}
          {item.title.length >= 30 && <span>...</span>}
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
            <i className="fa-solid fa-circle-info mx-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
