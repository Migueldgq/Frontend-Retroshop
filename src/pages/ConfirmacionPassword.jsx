import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";
import PopUp from "../components/PopUp";
import { useParams } from "react-router-dom";
const ConfirmacionPassword = () => {
  const { reservationId, email,ruta } = useParams();

  const [, setToken] = useContext(authContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: email,
    password: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    setStatusMessage("");
  };

  const enviar = (e) => {
    e.preventDefault();

    fetch(`http://${import.meta.env.VITE_BASE_URL}:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to login");
        }
      })
      .then((data) => {
        const token = data.token;
        setToken(token);
        console.log("Token recibido:", token);
        setStatusMessage("Logueado");
        setShowPopup(true);
        navigate(`${ruta}`);
        console.log(ruta);
      })
      .catch((error) => {
        console.error("Error en inicio de sesión:", error.message);
        setStatusMessage("Error al iniciar sesión.");
        setShowPopup(true);
      });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  return (
    <div className="flex justify-center items-center flex-col gap-[20px] h-screen">
      <div className="flex">
        <img src="/retroshop.svg" alt="" className="w-[300px] h-[100px]" />
      </div>
      <form
        className="flex justify-center items-center flex-col gap-5"
        onSubmit={enviar}
      >
        <input
          type="password"
          placeholder="Contraseña"
          className="w-[278px] h-[33px] bg-white  p-[20px] border border-black"
          id="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-[278px] h-[33px] bg-[#3337a3]  p-[20px] text-white py-2 px-4 "
        >
          confirma tu contraseña
        </button>
      </form>

      {showPopup && <PopUp message={statusMessage} onClose={closePopup} />}
    </div>
  );
};

export default ConfirmacionPassword;