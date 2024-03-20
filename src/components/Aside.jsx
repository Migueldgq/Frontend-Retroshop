import PersonIcon from "@mui/icons-material/Person";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StoreIcon from "@mui/icons-material/Store";
import SettingsIcon from "@mui/icons-material/Settings";
import InventoryIcon from "@mui/icons-material/Inventory";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { LogOutButton } from "../components/LogOutButton";
import useGetUser from "../Hook/useGetUser";
import { Link, useLocation } from "react-router-dom";

export const Aside = () => {
  const { data } = useGetUser();
  const location = useLocation();
  const CurrentRoute = (route) => {
    // pa sacar la ruta a un estado de ruta actual
    return location.pathname === route;
  };

  return (
    <aside className="hidden lg:flex lg:flex-shrink-0 lg:w-80 lg:h-screen lg:border-r  lg:top-0 ">
      <div className="bg-slate-100 h-screen flex flex-col lg:w-80 lg:border-r-2 lg:h-screen">
        <div className="flex items-center pt-10 bg-white border-b-[0.5px] border-[#db2777]">
          {data.avatarURL ? (
            <img
              src={`http://${import.meta.env.VITE_BASE_URL}:3001/${
                data.avatarURL
              }`}
              alt="Foto de perfil del usuario"
              className="m-2 max-w-20 max-h-20 min-w-20 min-h-20 rounded-full object-cover border-[#7C7C7C] border-[0.5px]"
            />
          ) : (
            <PersonIcon className="m-2 max-h-20 min-w-20 min-h-20 rounded-full fill-slate-200 bg-slate-400" />
          )}
          <h1 className="text-ssm font-bold text-[#3337a3]">{data.name}</h1>
          {/* <p className="text-base text-[#3337a3]">{data.description}</p> */}
        </div>
        <div className="border-b-[0.5px] border-[#db2777] bg-white relative lg:h-screen">
          <Link to="/profile/reservations">
            <div
              className={
                CurrentRoute("/profile/reservations")
                  ? "flex items-center pl-3 pt-3  bg-slate-200"
                  : "flex items-center pl-3 pt-3 "
              }
            >
              <HandshakeIcon sx={{ fontSize: 50 }} className="fill-[#000000]" />
              <article className="pl-4 text-[#000000] bg-"> Reservas</article>
              <ArrowForwardIosIcon className="absolute right-9 top-[25px] fill-[#000000]" />
            </div>
          </Link>
          <Link to="/profile/seller">
            <div
              className={
                CurrentRoute("/profile/seller")
                  ? "flex items-center pl-3   bg-slate-200"
                  : "flex items-center pl-3  "
              }
            >
              <StoreIcon sx={{ fontSize: 50 }} className="fill-[#000000]" />
              <article className="ml-4 text-[#000000]">Ventas</article>

              <ArrowForwardIosIcon className="absolute right-9 top-[75px] fill-[#000000]" />
            </div>
          </Link>
          <Link to="/profile/yourproducts">
            <div
              className={
                CurrentRoute("/profile/yourproducts")
                  ? "flex items-center pl-3  bg-slate-200"
                  : "flex items-center pl-3 "
              }
            >
              <InventoryIcon sx={{ fontSize: 50 }} className="fill-[#000000]" />
              <article className="pl-4 text-[#000000]">Tus Productos</article>

              <ArrowForwardIosIcon className="absolute right-9  fill-[#000000]" />
            </div>
          </Link>
          <Link to="/profile/perfil">
            <div
              className={
                CurrentRoute("/profile/perfil")
                  ? "flex items-center pl-3    bg-slate-200"
                  : "flex items-center pl-3  "
              }
            >
              <SettingsIcon sx={{ fontSize: 50 }} className="fill-[#000000]" />
              <article className="pl-4 text-[#000000]">Configuracion</article>

              <ArrowForwardIosIcon className="absolute right-9  fill-[#000000]" />
            </div>
          </Link>
          <Link to="/profile/favorites">
            <div
              className={
                CurrentRoute("/profile/favorites")
                  ? "flex items-center pl-3 pb-3   bg-slate-200"
                  : "flex items-center pl-3 pb-3  "
              }
            >
              <FavoriteBorderIcon
                sx={{ fontSize: 50 }}
                className="fill-[#000000]"
              />
              <ArrowForwardIosIcon className="absolute right-9  fill-[#000000]" />
              <article className="pl-4 text-[#000000]">Favoritos</article>
            </div>
          </Link>
          <div className="flex justify-center">
            <LogOutButton />
          </div>
        </div>
      </div>
    </aside>
  );
};
