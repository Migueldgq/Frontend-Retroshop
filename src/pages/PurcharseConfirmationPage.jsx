import  { useContext, useState } from 'react'
import { authContext } from '../providers/AuthProvider';
import PopUp from '../components/PopUp';

export const PurcharseConfirmationPage = ({reservationId}) => {
 
    const [reservationLocation, setReservationLocation] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [token] = useContext(authContext);
    const [error, setError] = useState(null);
    const [statusMessage, setStatusMessage] = useState("");

  const [showPopup, setShowPopup] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch( `http://${import.meta.env.VITE_BASE_URL}:3001/products/purchaseConfirmation/${reservationId}`,{
        method: 'PATCH',
        headers: {
         authorization: `Bearer ${token}` ,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reservationLocation,
          reservationDate,
     
        })
      })
      .then((response) => {
        if (response.ok) {
          console.log("Reserva finalizada correctamente ");
          setStatusMessage("Reserva finalizada correctamente ");
          setShowPopup(true);
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          console.log(data);
          setStatusMessage(data.error);
          setShowPopup(true);
        }
       
      })
    }
      const handleClosePopup = () => {
        setShowPopup(false);
      };
  
    return (
      <>
        <p className="font-semibold">¡Te falta poco para finalizar el proceso!</p>
        {error && <div>Error: {error}</div>}
        <form className='flex flex-col items-center justify-center'onSubmit={handleSubmit}>
          
    
            <input
              type="text"
              placeholder='Introduce la Ubicacion'
              value={reservationLocation}
              onChange={(e) => setReservationLocation(e.target.value)}
              className='mb-4 w-[278px] h-[33px]  bg-white  p-[20px] border border-gray-600 rounded-md'
              required
            />
          
          
          
            <input
              type="datetime-local"
              placeholder='Fecha y hora de entrega'
              value={reservationDate}
              onChange={(e) => setReservationDate(e.target.value)}
              className='mb-4 w-[278px] h-[33px]  bg-white  p-[20px] border border-gray-600 rounded-md'
              required
            />
  
          <button className="hover:bg-[#FE7193] px-10 py-2 font-bold rounded-full bg-[#D9D9D9]" type="submit">Confirmar la Reserva</button>
        </form>
        {showPopup && (
        <PopUp message={statusMessage} onClose={handleClosePopup} link="/profile/seller" />
      )}
      </>
    );
  };
 

