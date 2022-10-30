import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { useAsync } from "../../hooks/useAsync";
import {
  getCollections,
  getProductosByCategory,
} from "../../config/getFirestoreApp";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
const ItemListContainer = (props) => {
  const { idCategory } = useParams();
  const getProductsFromFirestore = () =>
    idCategory
      ? getProductosByCategory(idCategory)
      : getCollections("productos");
  const {
    data: items,
    error,
    isLoading,
  } = useAsync(getProductsFromFirestore, [idCategory]);

  if (error) {
    return <Error />;
  }
  const isValid = items !== undefined ? items.length : items;
  return (
    <div>
      {isLoading ? (
        isValid ? (
          <>
            <h1
              className="my-12"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              {idCategory ? idCategory : props.greeting}
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
