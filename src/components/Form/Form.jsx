import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";
import { addPayment } from "../../config/getFirestoreApp";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailLoop, setEmailLoop] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { getItems, precioTotal, borrarCarrito } = useCartContext();
  const handleCancel = (e) => {
    e.preventDefault();
    swal({
      title: "Estas seguro?",
      text: "Tendrás que rehacer tus compras",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Se ha vaciado el carrito.", {
          icon: "success",
        });
        borrarCarrito();
        navigate("/");
      }
    });
  };

  const handleInfo = async (e) => {
    e.preventDefault();
    if (!name && !email && !phone && !emailLoop) {
      Swal.fire({
        title: "Registro incompleto",
        html: "Por favor, ingrese los campos faltantes",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }
    if (email != emailLoop && email && emailLoop) {
      Swal.fire({
        title: "Los emails no coinciden",
        html: "Por favor, intente nuevamente",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }

    setLoading(false);
    const docRef = await addPayment(
      name,
      email,
      phone,
      getItems(),
      precioTotal()
    );
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
  };
  return (
    <>
      {isLoading ? (
        <form className="text-left bg-white p-8 rounded text-gray-200">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label
              for="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="floating_repeat_email"
              id="floating_repeat_email"
              className="block py-2.5 px-0 w-full text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={emailLoop}
              onChange={(e) => setEmailLoop(e.target.value)}
              required
            />
            <label
              for="floating_repeat_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Repeat Email
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="number"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label
              for="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Celular
            </label>
          </div>
          <div className="text-center">
            <button
              className="bg-red-500 hover:bg-red-700 p-2 rounded text-white font-semibold"
              onClick={(e) => handleCancel(e)}
            >
              Cancelar <i className="fa-solid fa-trash"></i>
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 p-2 rounded text-white font-semibold m-5"
              onClick={(e) => handleInfo(e)}
            >
              Realizar pago <i className="fa-sharp fa-solid fa-credit-card"></i>
            </button>
          </div>
        </form>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Form;
