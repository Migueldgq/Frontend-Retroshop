import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";
import PopUp from "../components/PopUp";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import { Footer } from "../components/Footer";

const LoginPage = () => {
  const [, setToken] = useContext(authContext);

  const navigate = useNavigate();

  function autolink() {
    navigate("/");
  }

  const [userData, setUserData] = useState({
    email: "",
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
        autolink();
      })
      .catch((error) => {
        console.error("Error en inicio de sesión:", error.message);
        setStatusMessage("Nombre de usuario o contraseña incorrectos");
        setShowPopup(true);
      });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5 md:flex-nowrap sm:h-screen sm:overflow-hidden  sm:pb-[100px]   lg:flex-row  md:pb-[100px] lg:pb-0">
      <Link
        to={"/"}
        className=" hidden sm:flex  sm:h-full  sm:overflow-hidden lg:w-[70%] lg:h-full  
       "
      >
        <video
          autoPlay
          playsInline
          loop
          muted
          className=" hidden  sm:flex sm:w-full sm:h-full sm:object-fill sm:aspect-video lg:object-fill aspect-auto"
        >
          <source src="/video3.mp4" type="video/mp4" />
        </video>
      </Link>
      <div className="flex flex-col h-screen items-center justify-center md:flex md:flex-col md:h-[100vh]  lg:w-[30%] md:mr-3% lg:relative ">
        <img src="/retroshop.svg" alt="" className="h-[100px] p-4" />
        <form
          className="flex justify-center items-center flex-col gap-1"
          onSubmit={enviar}
        >
          <label
            htmlFor="email"
            className="block text-base font-medium text-[#3337a3] w-[281px] p-2"
          >
            Correo:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Nombre"
            className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
            value={userData.email}
            onChange={handleInputChange}
          />
          <label
            htmlFor="password"
            className="block text-base font-medium text-[#3337a3] w-[281px] p-2"
          >
            Contraseña:
          </label>
          <input
            type="password"
            placeholder="Contraseña"
            className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
            id="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-[278px] h-[33px] bg-[#3337a3] text-white rounded-sm mt-2 hover:bg-[#0f17e7]"
          >
            Iniciar Sesión
          </button>

          <div className="flex justify-start w-[278px] items-start mt-0">
            <NavLink
              className="mr-0 underline text-blue-600 hover:text-blue-800 visited:[#3337a3]"
              to="/profile/register"
            >
              Crear Cuenta
            </NavLink>
            <Link to="/">
              <ForwardRoundedIcon className=" hidden lg:flex lg:absolute top-0 left-0 rotate-180 z-5000 text-[40px] text-blue-900" />
            </Link>
          </div>
        </form>
      </div>

      {showPopup && (
        <PopUp link={""} message={statusMessage} onClose={closePopup} />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;
