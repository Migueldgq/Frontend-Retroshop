import { useContext, useEffect, useState } from 'react';
import { authContext } from '../providers/AuthProvider';

const useGetStatusReserva = (productId) => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token] = useContext(authContext);


  useEffect(() => {

  const getStatus = async (productId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://${import.meta.env.VITE_BASE_URL}:3001/reservaStatus/${productId}`,
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error('Error al obtener el estado de la reserva');
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
        setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  getStatus( productId);
}, [token]);

  return {products, loading, error };
};

export default useGetStatusReserva;
