/* eslint-disable react/prop-types */
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { StarsReview } from "./StarsReview";
//componente que imprime la reserva individual a ser listada
const Reservation = ({ reservation }) => {
  return (
    <>
      <img
        src={`http://${import.meta.env.VITE_BASE_URL}:3001/${
          reservation.imageURL
        }`}
        alt=""
        className="h-full max-w-28 object-cover min-w-28"
      />
      <h2 className="capitalize font-bold text-[#3337a3]">
        {reservation.name}
      </h2>
      {reservation.status === "finalizada" ? <StarsReview review={reservation.review} /> : null}
      <ArrowRightIcon className="fill-[#3337a3]" />
    </>
  );
};

export default Reservation;
