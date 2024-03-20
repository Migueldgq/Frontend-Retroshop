import { useContext, useState, useEffect } from "react"; 
import useCreateReview from "../Hook/useCreateReview"; 
import { authContext } from "../providers/AuthProvider"; 
import PopUp from '../components/PopUp';

const Star = ({ selected, onClick }) => ( 
  <span 
    onClick={onClick} 
    className={`text-2xl ${selected ? 'text-yellow-500' : 'text-gray-500'}`} 
  > 
    {selected ? "★" : "☆"} 
  </span> 
); 

const CreateReview = ({ productId, reservationDate }) => { 
  
  const [token] = useContext(authContext); 
  const { insertReview } = useCreateReview(); 
  const [selectedStars, setSelectedStars] = useState(0);  
  const [statusMessage, setStatusMessage] = useState(""); 
  const [showPopup, setShowPopup] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const reservationTime = new Date(reservationDate).getTime();
    const currentTime = new Date().getTime();
    const oneHourInMilliseconds = 60 * 60 * 1000;

    if (currentTime - reservationTime >= oneHourInMilliseconds) {
      setIsEnabled(true);
    }
  }, [reservationDate]);

  const handleRate = (rating) => { 
    setSelectedStars(rating); 
  }; 
 
  const handleUpdateReview = async (e) => { 
    e.preventDefault(); 

    if (!isEnabled) {
      setStatusMessage("El formulario estará disponible una hora después de la reserva.");
      setShowPopup(true);
      return;
    }
 
    try { 
      await insertReview(productId, selectedStars, token);  
      setStatusMessage("Review enviada exitosamente."); 
      console.log("Votos: " + selectedStars); 
    } catch (error) { 
      console.error("Error al enviar la review:", error); 
      setStatusMessage("Error al enviar la review."); 
    } finally {
      setShowPopup(true);
    }
  }; 
  
  const handleClosePopup = () => {
    setShowPopup(false);
  };
 
  return ( 
    <div className="flex flex-col justify-center"> 
      <form onSubmit={handleUpdateReview}> 
        <div className="flex  justify-center">  
          {/*  estrellas Clase Array */} 
          {[...Array(5)].map((_, index) => ( 
            <Star 
              key={index} 
              selected={index < selectedStars} 
              onClick={() => handleRate(index + 1)} 
            /> 
          ))} 
        </div> 
        <div className="flex flex-col justify-center">
          <button type="submit" className={`bg-[#D9D9D9] px-10 py-2 font-bold rounded-full  text-${isEnabled ? '[gray-200] hover:bg-[#FE7193]' : 'gray-500 '}`} disabled={!isEnabled}>
            Votar
          </button>
      
          {isEnabled || <p className="text-center text-gray-500">Voto disponible una hora después de la entrega.</p>}
        </div>
      </form> 
      {showPopup && <PopUp message={statusMessage} onClose={handleClosePopup} link="/profile/menu" />}
    </div> 
  ); 
}; 
 
export default CreateReview;
