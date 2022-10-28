import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";
import Form from "../Form/Form";

const Payment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { cartList, precioTotal, borrarCarrito } = useCartContext();
  const handleInfo = async (e) => {
    e.preventDefault();

    if (name && email && phone) {
      setLoading(false);
      const firestoreDB = getFirestore();
      const docRef = await addDoc(collection(firestoreDB, "compras"), {
        buyer: { name: name, email: email, phone: phone },
        date: Timestamp.fromDate(new Date()),
        items: cartList,
        total: precioTotal(),
      });
      swal({
        title: "Compra realizada!",
        text: `Tu numero de orden es: ${docRef.id}.`,
        icon: "success",
        button: "Volver a la tienda",
      }).then(() => {
        navigate("/");
        borrarCarrito();
      });
      setLoading(true);
      return;
    }
    Swal.fire({
      title: "Registro incompleto",
      html: "Por favor, ingrese los campos faltantes",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  return (
    <div className="p-8 flex">
      {/* {isLoading ? (
        <div className="bg-purple-700 rounded p-4 h-full text-left">
          <div>
            <p>Nombre Completo</p>
            <input
              type="text"
              className="my-4 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>Correo</p>
            <input
              type="email"
              className="my-4 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p>Celular</p>
            <input
              type="number"
              className="my-4 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 p-2 rounded text-white font-semibold m-5"
            onClick={(e) => handleInfo(e)}
          >
            Realizar pago <i className="fa-sharp fa-solid fa-credit-card"></i>
          </button>
        </div>
      ) : (
        <Loader />
      )} */}
      <Form />
      {cartList.length != 0 ? (
        <div className="overflow-x-auto relative mx-8 rounded">
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
              {cartList.map((item, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    key={index}
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
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
  );
};

export default Payment;
