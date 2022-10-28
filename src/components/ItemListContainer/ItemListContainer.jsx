import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  getCollections,
  getProductosByCategory,
} from "../../config/getFirestoreApp";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [greet, setGreet] = useState(props.greeting);
  const { idCategory } = useParams();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    if (idCategory) {
      setGreet(idCategory);
      getProductosByCategory(idCategory)
        .then((res) => {
          setItems([...res]);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(true));
    } else {
      setGreet(props.greeting);
      getCollections("productos")
        .then((res) => setItems(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(true));
    }
  }, [idCategory]);
  return (
    <div>
      {isLoading ? (
        items.length ? (
          <>
            <h1
              className="m-8"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              {greet}
            </h1>
            <ItemList items={items} />
          </>
        ) : (
          <Error />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ItemListContainer;
