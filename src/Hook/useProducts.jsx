import { useState, useEffect } from "react";

const useProducts = (limit) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log(import.meta.env.VITE_BASE_URL);
      try {
        const response = await fetch(
          `http://${import.meta.env.VITE_BASE_URL}:3001/products?${
            limit ? `limit=${limit}` : ""
          }`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit]);

  return { products, loading, error };
};

export default useProducts;
