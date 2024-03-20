import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useEffect, useState } from "react";
import { useAddFavorites } from "../Hook/Favorites/useAddFavorites";
import { authContext } from "../providers/AuthProvider";
import { useFavoritesProducts } from "../Hook/Favorites/useFavoritesProducts";
import { useDeleteFavorites } from "../Hook/Favorites/useDeleteFavorites";
import { useLocation } from "react-router-dom";

export const FavButton = ({ productId }) => {
  const [buttonColor, setButtonColor] = useState("#7C7C7C");
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const [token] = useContext(authContext);
  const { addFavorite } = useAddFavorites();
  const { deleteFavorite } = useDeleteFavorites();
  const { data: favoriteProducts } = useFavoritesProducts(token);
  const location = useLocation();
  const CurrentRoute = (route) => {
    // pa sacar la ruta a un estado de ruta actual
    return location.pathname === route;
  };

  useEffect(() => {
    // Comprobar si el producto está en la lista de favoritos
    if (
      favoriteProducts &&
      favoriteProducts.some((product) => product.id === productId)
    ) {
      setIsAddedToFavorites(true);
      setButtonColor("#FD2A5C");
    }
  }, [favoriteProducts, productId]);

  const handleButtonClick = async (e) => {
    e.preventDefault();

    if (!isAddedToFavorites) {
      try {
        await addFavorite(productId, token); // Llamar a la función addFavorite del hook
        setIsAddedToFavorites(true);
        setButtonColor("#FD2A5C");
      } catch (error) {
        console.error("Error al añadir a favoritos:", error);
      }
    } else {
      // si ya está en favoritos, se elimina
      try {
        await deleteFavorite(productId, token);
        setIsAddedToFavorites(false);
        setButtonColor("#7C7C7C");
      } catch (error) {
        console.error("Error al eliminar de favoritos:", error);
      }
    }
  };

  return (
    <div className="">
      <button onClick={handleButtonClick} className="flex">
        <FavoriteIcon
          className={
            buttonColor === "#7C7C7C" ? "fill-[#7C7C7C]" : "fill-[#FD2A5C]"
          }
          sx={
            CurrentRoute("/") || CurrentRoute("/products")
              ? { fontSize: 15 }
              : { fontSize: 25 }
          }
        />
      </button>
    </div>
  );
};
