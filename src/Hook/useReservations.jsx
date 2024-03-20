import { useContext, useEffect, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const useReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token] = useContext(authContext);
  const navigate = useNavigate();
  // aqui nos traemos todos los estados que usaremos para mostrar en pantalla
  // console.log(reservations);

  useEffect(() => {
    //si no hay token o no estas logeado la pagina te mandara al login por defecto aunque intentes forzar el enlace
    if (!token) {
      return navigate("/profile/login");
    }
    //por el contrario cargar la pagina con las reservas
    const loadReservations = async () => {
      try {
        //estado cargando...
        setLoading(true);
        //aqui traemos toda la info del back por el controllergetReservations
        const fetchReservations = async () => {
          const res = await fetch(
            `http://${import.meta.env.VITE_BASE_URL}:3001/reservations`,
            {
              method: "GET",
              headers: { authorization: `Bearer ${token}` },
            }
          );
          const body = await res.json();
          if (!res.ok) {
            throw new Error(body.message);
          }
          //sacamos los datos
          setReservations(body.data);
        };

        fetchReservations();
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadReservations();
  }, [token, navigate]);

  return { reservations, loading, error };
};

export default useReservations;

// const useReservations = () => {
//   const [reservations, setReservations] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [token] = useContext(authContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadReservations = async () => {
//       try {
//         if (!token) {
//           throw new Error("Token not available");
//         }

//         const res = await fetch("http://localhost:3001/reservations", {
//           method: 'GET',
//           headers: {
//             Authorization: Bearer ${token},
//           },
//         });

//         if (!res.ok) {
//           throw new Error(res.statusText);
//         }

//         const body = await res.json();
//         setReservations(body.data);
//         console.log(body.data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadReservations();
//   }, [token, navigate]);

//   return { reservations, loading, error };
// };

// export default useReservations;
