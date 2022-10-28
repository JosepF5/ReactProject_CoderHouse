import React from "react";
import { useCartContext } from "../../context/CartContext";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { getItems, borrarItem, precioTotal,borrarCarrito } =
    useCartContext();

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

  const handleProduct = (e, index) => {
    e.preventDefault();
    swal({
      title: "Estas seguro?",
      text: "Tendrás que volverlo a comprar",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Se ha eliminado tu compra", {
          icon: "success",
        });
        borrarItem(index);
      }
    });
  };

  return (
    <div className="p-8">
      
      {getItems().length != 0 ? (<>
        <h1 className="m-4" style={{ fontFamily: "'Permanent Marker', cursive" }}>
        Carrito de compras
      </h1>
        <div>
          {getItems().map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center m-8 bg-gray-100 text-purple-600 rounded p-2"
            >
              <img src={item.picture} width="15%" height="15%" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p>S/ {item.cantidad} soles</p>
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 p-2 rounded"
                onClick={(e) => handleProduct(e, item.id)}
              >
                <i className="fa-solid fa-trash text-white"></i>
              </button>
            </div>
          ))}
          <h1 className="text-3xl p-2">Subtotal: S/ {precioTotal()} soles</h1>
          <button
            className="bg-red-500 hover:bg-red-700 p-2 rounded text-white font-semibold"
            onClick={(e) => handleCancel(e)}
          >
            Cancelar <i className="fa-solid fa-trash"></i>
          </button>
          <button className="bg-green-500 hover:bg-green-700 p-2 rounded text-white font-semibold m-5">
            <Link to="/payment">
              Pagar <i className="fa-sharp fa-solid fa-credit-card"></i>
            </Link>
          </button>
        </div></>
      ) : (
        <h1 style={{ fontFamily: "'Permanent Marker', cursive" }}>
          Carrito vacío... por el momento 👀
        </h1>
      )}
    </div>
  );
};
export default Cart;
