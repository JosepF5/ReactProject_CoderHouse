import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
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
              <ItemListContainer greeting="Al aire! Bienvenidos a nuestra tienda " />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
