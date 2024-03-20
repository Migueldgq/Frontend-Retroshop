/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ReservBlank } from "./ReservBlank";
import { ReservBlankFinished } from "./ReservBlankFinished";
import Reservation from "./Reservation";

//componente que imprime la lista de reservas
const ReservationList = ({ reservations, currentTab }) => {
  return reservations.length ? (
    <ul className="w-full flex flex-col gap-1 ">
      {reservations.map((reservation) => (
        <Link
          to={`/products/product/?id=${reservation.productId}`}
          key={reservation.id}
        >
          <li className="flex bg-[#D9D9D9] h-24 w-full justify-between items-center border-y-[0.5px] border-[#7C7C7C] ">
            <Reservation reservation={reservation} />
          </li>
        </Link>
      ))}
    </ul>
  ) : // en caso de que no haya reservas en proceso o finalizadas se imprimen uno de estos componente segun el elemento onClick seleccionado
  currentTab === "pendiente" ? (
    <ReservBlank />
  ) : (
    <ReservBlankFinished />
  );
};

export default ReservationList;
