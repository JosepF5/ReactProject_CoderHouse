import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Payment from "./components/Payment/Payment";
import Error from "./components/Error/Error";
import CartContextProvider  from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer greeting="Al aire! Bienvenidos a nuestra tienda " />
            }
          />
          <Route
            exact
            path="/category/:idCategory"
            element={
              <ItemListContainer greeting={"Al aire! Bienvenidos a nuestra tienda "} />
            }
          />
          <Route
            exact
            path="/detail/:idProd"
            element={<ItemDetailContainer />}
          />
          <Route
            exact
            path="/cart"
            element={<Cart />}
          />
          <Route
            exact
            path="/payment"
            element={<Payment />}
          />
          <Route
            exact
            path="*"
            element={<Error />}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
