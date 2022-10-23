import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProducts, getProductById } from "../../utils/Mock";
import Loader from "../Loader/Loader";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({}); 
  const [isLoading, setLoading] = useState(false);
  const { idProd } = useParams();

  useEffect(() => {
    getProductById(idProd)
      .then((res) => setItem(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(true));
  }, []);
  
  return (
    <div>
      {isLoading ? (
        <ItemDetail item={item} />
      ) : (
        <Loader />
      )}
    </div>
  ); 
};

export default ItemDetailContainer;
