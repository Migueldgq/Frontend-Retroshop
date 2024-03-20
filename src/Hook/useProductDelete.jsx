import { useState } from "react";

const useProductDelete = (productId, token) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const deleteProduct = async (productId, token) => {
    try {
      setLoading(true);

      const response = await fetch(
        `http://${import.meta.env.VITE_BASE_URL}:3001/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      return { error, loading, data };
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  deleteProduct(productId, token);
};

export default useProductDelete;
