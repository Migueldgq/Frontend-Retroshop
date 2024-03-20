import { useContext, useState } from "react";

import PopUp from "./PopUp";
import { authContext } from "../providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const CreateReservation = (props) => {
  const navigate = useNavigate();
  const { productId } = props;

  const [token] = useContext(authContext);
  const [link, setLink] = useState("");
  const [reservation, setReservation] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    setStatusMessage("");
  };
  
  const enviar = async () => {
    if (!token) {
      navigate("/profile/login")
    }
    try {
      const response = await fetch(
        `http://${import.meta.env.VITE_BASE_URL}:3001/reservation/${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Éxito");
        setStatusMessage("Reserva solicitada");
        setStatusMessage(data.message);

        setShowPopup(true);
        setReservation(data.id);
        setReservation(...reservation, data.reservationToken);
        setLink("/");
      } else {
        setStatusMessage(data.error);
        setShowPopup(true);
        setReservation(data.id);
        setLink("/");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);

      if (error.response && error.response.status === 400) {
        setStatusMessage(error.response.data.message);
        setLink("/");
      } else {
        setStatusMessage("Error al enviar los datos");
        setLink("/");
      }

      setShowPopup(true);
    }
  };

  return (
    <>
      <button
        className="bg-[#D9D9D9] px-10 py-2 font-bold rounded-full hover:bg-[#FE7193]"
        onClick={enviar}
      >
        Reservar
      </button>
      {showPopup && (
        <PopUp message={statusMessage} onClose={closePopup} link={link} />
      )}
    </>
  );
};

export default CreateReservation;
