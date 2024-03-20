import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearchedProducts = () => {
  const [searchedData, setSearchedData] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://${
            import.meta.env.VITE_BASE_URL
          }:3001/products/search?${searchParams.toString()}`
        );

        if (response.ok) {
          const SearchedProducts = await response.json();
          setSearchedData(SearchedProducts);
          console.log(
            "Datos actualizados en useSearchedProducts:",
            SearchedProducts
          );
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error("Error en la solicitud:", error.message);
      }
    };
    fetchData();
  }, [searchParams]);

  return searchedData;
};
