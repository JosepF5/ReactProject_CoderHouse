import { createContext, useState, useContext } from "react";
import swal from "sweetalert";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarAlCarrito = (item) => {
    const index = cartList.findIndex((i) => i.id === item.id);

    if (index > -1) {
      const oldQy = cartList[index].cantidad;

      cartList.splice(index, 1);

      setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy }]);
      localStorage.setItem(
        "cartList",
        JSON.stringify([
          ...getItems(),
          { ...item, cantidad: item.cantidad + oldQy },
        ])
      );
    } else {
      setCartList([...cartList, item]);
      localStorage.setItem("cartList", JSON.stringify([...getItems(), item]));
    }
  };
  const getItems = () => {
    return JSON.parse(localStorage.getItem("cartList")) || [];
  };

  const isInCart = (item) => {
    return !getItems().find((i) => i.id === item.id);
  };

  const precioTotal = () => {
    return getItems().reduce((acum, prod) => acum + prod.cantidad, 0);
  };

  const borrarItem = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
    localStorage.setItem(
      "cartList",
      JSON.stringify(getItems().filter((prod) => prod.id !== id))
    );
  };

  const borrarCarrito = () => {
    setCartList([]);
    localStorage.setItem("cartList", "[]");
  };

  const handleProducts = (e) => {
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
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        borrarCarrito,
        precioTotal,
        borrarItem,
        isInCart,
        getItems,
        handleProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
