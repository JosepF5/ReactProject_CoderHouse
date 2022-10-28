import React from "react";
import { useCartContext } from "../../context/CartContext";
import Form from "../Form/Form";

const Payment = () => {
  const { getItems, precioTotal } = useCartContext();

  return (
    <div className="p-8">
      <div>
        <h1
          className="m-4"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Checkout
        </h1>
      </div>
      <div className="md:flex h-full">
        <Form />
        {getItems().length != 0 ? (
          <div className="overflow-x-auto relative md:mx-4 md:my-0 xs:my-4 xs:mx-0 rounded">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Producto
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Precio
                  </th>
                </tr>
              </thead>
              <tbody>
                {getItems().map((item, index) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.title}
                    </th>
                    <td className="py-4 px-6">S/ {item.cantidad}.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h1 className="text-3xl p-2">
              Subtotal: S/ {precioTotal()}.00 soles
            </h1>
          </div>
        ) : (
          "Carrito vacío... por el momento 👀"
        )}
      </div>
    </div>
  );
};

export default Payment;
