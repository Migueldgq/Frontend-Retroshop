import { useState, useEffect } from "react";

export const useFavoritesProducts = (token) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchFavorites = async (token) => {
      try {

        if(!token){
          return
        }
        setLoading(true);
        const response = await fetch(
          `http://${import.meta.env.VITE_BASE_URL}:3001/favorites`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = await response.json();
        setData(responseData.products);
        console.log("esta es la data en el hook de favoritos", data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites(token);
  }, [token]);

  return { data, error, loading };
};
