import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSearchedProducts } from "../Hook/useSearchedProducts";
import LoginPage from "../pages/LoginPage";
import { useSearch } from "../providers/SearchContext";
import { Button } from "@mui/material";
import { Tu } from "./Tu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Navbar = () => {
  //const { searchedProducts, setSearchedProducts } = useSearch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  //const [searchedProducts, setSearchedProducts] = useState([]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`/products?name=${searchValue}`);
    navigate(`/products?name=${searchValue}`);
  };

  //const searchedData = useSearchedProducts(searchValue);

  //console.log("Esto es el array de lo buscado", searchedData);

  // useEffect(() => {
  //   setSearchedProducts(searchedData);
  // }, [searchedData]);

  //console.log("Productos buscados actualizados", searchedProducts);

  <></>;

  return (
    <nav className="Navbar flex flex-wrap justify-center items-center pt-4 gap-[20px] sticky top-0 z-10 lg:w-full bg-white">
      <div className=" flex  items-center lg:flex lg:items-center lg:pr-2 lg:w-screen lg:justify-around ">
        <Link to="/">
          <img src="/iconretroshop.svg" alt="" className="h-[53px] lg:hidden" />
          <img
            src="/retroshop.svg"
            alt=""
            className="min-h-[70px]  hidden lg:flex lg:items-end "
          />
        </Link>
        <div className="flex items-center gap-5">
          <div className="SearchBar relative flex items-center ">
            <form id="buscar-productos" onSubmit={handleSubmit}>
              <input
                className="w-[278px] h-[33px] bg-[#efefef] rounded-full p-[20px] lg:w-[500px]  "
                type="search"
                placeholder="Busca un producto..."
                value={searchValue}
                onChange={handleInputChange}
              />
              <button className="flex absolute justify-center items-center right-[5px] top-[5px] w-[28px] h-[28px] bg-white rounded-full">
                <SearchIcon className=" fill-[#FD2A5C] " />
              </button>
            </form>
          </div>
          <Tu />
          <div className=" hidden lg:flex gap-1 items-center">
            <Link to="/profile/favorites" className="flex items-center">
              <FavoriteBorderIcon />
              <p>Favoritos</p>
            </Link>
          </div>
          <div className=" hidden lg:flex gap-1 items-center w-max">
            <Link to="/profile/product/create" className="flex items-center">
              <AddCircleOutlineIcon />
              <p>Subir producto</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="overflow-x-scroll overflow-hidden no-scrollbar border-y-2 border-[#7C7C7C] mt-0 w-full">
        <div className="flex w-max lg:w-screen md:w-screen sm:w-screen justify-center  bg-gradient-to-r from-blue-700 via-pink-500 to-purple-500 ">
          <Link to="/products?category=Consola">
            <p className="mx-3 text-white font-semibold">Consolas</p>
          </Link>

          <Link to="/products?category=videojuegos">
            <p className="mx-3 text-white font-semibold">Videojuegos</p>
          </Link>
          <Link to="/products?category=radio">
            <p className="mx-3 text-white font-semibold">Radios</p>
          </Link>

          <Link to="/products?category=ordenador">
            <p className="mx-3 text-white font-semibold">Ordenadores</p>
          </Link>
          <Link to="/products?category=movil">
            <p className="mx-3 text-white font-semibold"> Móviles </p>
          </Link>
          <Link to="/products?category=otros">
            <p className="mx-3 text-white font-semibold">Otros</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};
