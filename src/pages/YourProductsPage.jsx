import useReservationsSeller from "../Hook/useReservationSeller.jsx";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { useState } from "react";
import ReservationListSeller from "../components/sellerProducts/ReservationListSeller.jsx";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Aside } from "../components/Aside.jsx";
import { Navbar } from "../components/Navbar.jsx";
//El componente de la pagina a imprimir
export const YourProductsPage = () => {
  // nos traemos los estados
  const { reservations, loading, error } = useReservationsSeller();
  const [currentTab, setCurrentTab] = useState("sin reserva");
  //el estado por defecto es en proceso
  const filteredReservations = reservations.filter((reservation) => {
    return reservation.status === currentTab;
  });

  //intermedio de la carga
  if (loading)
    return (
      <p className="flex justify-center font-bold">
        Cargando, por favor espere...
      </p>
    );
  if (error)
    return <ErrorMessage message={error} className="flex justify-center" />;

  return (
    <div className="pb-20 lg:flex flex-wrap lg:pb-0 ">
      {/* aqui se imprime el boton de volver atras que te manda al perfil del usuario */}
      <Navbar/>
      <Aside />
      <div className="flex flex-col flex-1 lg:sticky lg:h-screen lg:overflow-y-auto ">
        <div className="flex justify-evenly items-center min-h-[80px] bg-white sticky top-0">
          <Link to={"/profile/menu"} className="absolute left-7">
            <ArrowBackIcon className="size-10 fill-[#000000] lg:hidden" />
          </Link>
          <h1 className="text-2xl font-bold text-[#000000]">Tus Productos</h1>
        </div>
        {/* aqui se imprime los botones que cambian los estados al clicar */}

        <article className="flex flex-col flex-nowrap items-center lg:h-screen ">
          <ReservationListSeller
            reservations={filteredReservations}
            currentTab={currentTab}
          />
        </article>
      </div>
    </div>
  );
};
