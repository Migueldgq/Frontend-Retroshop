import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useProductsByUser = (token) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const autolink = () => {
      navigate("/profile/products/user");
    };

    const fetchProductsByUser = async (token) => {
      try {
        const response = await fetch(
          `http://${import.meta.env.VITE_BASE_URL}:3001/products/user`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching products");
        }

        const productsData = await response.json();
        setProducts(productsData);
        autolink();
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByUser(token);
  }, [token, navigate]);

  return { products, error, loading };
};

export default useProductsByUser;
