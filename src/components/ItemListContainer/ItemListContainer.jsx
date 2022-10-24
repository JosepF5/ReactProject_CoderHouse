import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProductos,getProductosByCategory } from "../../config/getFirestoreApp";
import Loader from "../Loader/Loader";
const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { idCategory } = useParams();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    if (idCategory) {
      getProductosByCategory(idCategory)
        .then((res) => setItems([...res]))
        .catch((err) => console.log(err))
        .finally(() => setLoading(true));
    } else {
      getProductos()
        .then((res) => setItems(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(true));
    }
  }, [idCategory]);
  console.log(items)
  return (
    <div>
      {isLoading && props.greeting}
      {isLoading ? (
        <ItemList items={items} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ItemListContainer;
