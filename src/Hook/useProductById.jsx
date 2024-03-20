import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useProductById = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  // aqui nos traemos todos los estados que usaremos para mostrar en pantalla
  // console.log(product);
  useEffect(() => {
    //aqui traemos toda la info del back por
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://${
            import.meta.env.VITE_BASE_URL
          }:3001/products/product/?id=${searchParams.get("id")}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const productData = await response.json();
        console.log(productData);
        //sacamos los datos
        setData(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [searchParams]);

  return { data, loading, error };
};

export default useProductById;
