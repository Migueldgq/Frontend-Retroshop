import { useState } from "react";

export const useDeleteFavorites = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteFavorite = async (productId, token) => {
    try {
      const response = await fetch(
        `http://${import.meta.env.VITE_BASE_URL}:3001/favorites/delete`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId }), // Convertir productId a JSON
        }
      );
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return { deleteFavorite, data, error };
};