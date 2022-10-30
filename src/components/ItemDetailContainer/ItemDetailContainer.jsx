import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductoById } from "../../config/getFirestoreApp";

import { useAsync } from "../../hooks/useAsync";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
const ItemDetailContainer = () => {
  const { idProd } = useParams();
  const getProductsFromFirestore = () => getProductoById(idProd);
  const {
    data: item,
    error,
    isLoading,
  } = useAsync(getProductsFromFirestore, [idProd]);

  if (error) {
    return <Error />;
  }

  return (
    <div>
      {isLoading ? (
        item ? (
          <>
            <h1
              className="my-8"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Detalles
            </h1>
            <ItemDetail item={item} />
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

export default ItemDetailContainer;
