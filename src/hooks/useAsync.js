import { useState, useEffect } from "react";
export const useAsync = (asyncFn, dependencies) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  if (!Array.isArray(dependencies)) {
    dependencies = [];
  }
  useEffect(() => {
    setLoading(false);
    asyncFn()
      .then((res) => {
        setData(res);
      }) /*  */
      .catch((err) => setError(err))
      .finally(() => setLoading(true));
  }, [...dependencies]); /*  */

  return {
    data,
    error,
    isLoading,
  };
};
