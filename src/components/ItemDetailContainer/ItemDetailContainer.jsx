import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductoById } from "../../config/getFirestoreApp";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({}); 
  const [isLoading, setLoading] = useState(false);
  const { idProd } = useParams();

  useEffect(() => {
    getProductoById(idProd)
      .then((res) => setItem(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(true));
  }, []);
  return (
    <div>
      {isLoading ? (
        item ?(
          <>
          <h1 className="my-8" style={{fontFamily: "'Permanent Marker', cursive"}}>Detalles</h1>
          <ItemDetail item={item} /></>
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
