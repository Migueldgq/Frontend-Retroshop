/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ReserFinished } from "../ReserFinished";
import Reservation from "../Reservation";
import { Reserpending } from "../Reserpending";
import { ProductsBlank } from "../ProductsBlank";

const ReservationListSeller = ({ reservations, currentTab }) => {
  return reservations.length ? (
    <ul className="w-full flex flex-col gap-1">
      {reservations.map((reservation) => (
        // <Link to={`/products/product/?id=${reservation.id}`} key={reservation.id}>
        <Link
          to={`/products/productSeller/?id=${reservation.id}`}
          key={reservation.id}
        >
          <li className="flex bg-[#D9D9D9] h-24 w-full justify-between items-center border-y-[0.5px] border-[#7C7C7C] ">
            <Reservation reservation={reservation} />
          </li>
        </Link>
      ))}
    </ul>
  ) : currentTab === "sin reserva" ? (
    <ProductsBlank />
  ) : currentTab === "pendiente" ? (
    <Reserpending />
  ) : (
    <ReserFinished />
  );
};

export default ReservationListSeller;
