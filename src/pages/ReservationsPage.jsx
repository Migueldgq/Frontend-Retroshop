import { Link } from "react-router-dom";
import useReservations from "../Hook/useReservations";
import ReservationList from "../components/ReservationList";
import { ErrorMessage } from "../components/ErrorMessage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { Aside } from "../components/Aside";
import { Navbar } from "../components/Navbar";

//El componente de la pagina a imprimir
export const ReservationsPage = () => {
  // nos traemos los estados
  const { reservations, loading, error } = useReservations();
  const [currentTab, setCurrentTab] = useState("pendiente");
  //el estado por defecto es en proceso
  console.log(reservations);
  // console.log(currentTab);
  const filteredReservations = reservations.filter((reservation) => {
    return reservation.status === currentTab;
  });
  console.log(filteredReservations);

  // handlers para cambiar los estados segun cliques
  const handlerInProcess = () => {
    setCurrentTab("pendiente");
  };
  const handlerFinished = () => {
    setCurrentTab("finalizada");
  };

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
    <div className="pb-20 lg:flex lg:pb-0 flex-wrap lg:max-w-screen">
      <Navbar/>
      <Aside />
      {/* aqui se imprime el boton de volver atras que te manda al perfil del usuario */}
      <div className="flex flex-col flex-1 lg:sticky lg:h-screen lg:overflow-y-auto  ">
        <div className="sticky top-0 border-b-[0.5px] border-[#7C7C7C] ">
          <div className="flex justify-evenly items-center min-h-[80px] bg-white">
            <Link to={"/profile/menu"} className="absolute left-7">
              <ArrowBackIcon className="size-10 fill-[#000000] lg:hidden" />
            </Link>
            <h1 className="text-2xl font-bold text-[#000000]">Reservas</h1>
          </div>
          {/* aqui se imprime los botones que cambian los estados al clicar */}
          <nav className="flex justify-evenly bg-white overflow-y-hidden">
            <button
              onClick={handlerInProcess}
              className="bg-[#D9D9D9] px-10 py-1 font-bold rounded-full focus:bg-[#FE7193] text-[#000000]"
            >
              Pendiente
            </button>
            <button
              onClick={handlerFinished}
              className="bg-[#D9D9D9] px-10 py-1 font-bold rounded-full focus:bg-[#FE7193] text-[#000000]"
            >
              Finalizada
            </button>
          </nav>
        </div>

        {/* aqui se imprime el componente que trae la lista de reservas */}
        <article className="flex flex-col flex-nowrap items-center content-end w-full pt-2">
          <ReservationList
            reservations={filteredReservations}
            currentTab={currentTab}
          />
        </article>
      </div>
    </div>
  );
};

// {/* aqui se imprime los botones que cambian los estados al clicar */}
// <nav className="flex justify-evenly py-4">
// <button
//   onClick={handlerInProcess}
//   className={`bg-${
//     currentTab === "en proceso" ? "[#FE7193]" : "[#D9D9D9]"
//   } px-10 py-2 font-bold rounded-full`}
// >
//   En Proceso
// </button>
// <button
//   onClick={handlerFinished}
//   className={`bg-${
//     currentTab === "finalizada" ? "[#FE7193]" : "[#D9D9D9]"
//   } px-10 py-2 font-bold rounded-full`}
// >
//   Finalizada
// </button>
// </nav>
