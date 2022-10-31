import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { agregarAlCarrito, isInCart } = useCartContext();
  const [goCart, setGoCart] = useState(isInCart(item));

  const onAdd = (e, count) => {
    e.preventDefault();
    setGoCart(false);
    swal(
      "Producto añadido!",
      "Podrás visualizarlo en el carrito de compras!",
      "success"
    );
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
              {item.stock ? (
                <ItemCount item={item} onAdd={onAdd} goCart={goCart} />
              ) : (
                <>
                  <p className="bg-gray-200 rounded p-2">
                    No quedan más productos 😢. Contacte al administrador!
                  </p>
                  <Link
                    to="/"
                    className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Volver
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
