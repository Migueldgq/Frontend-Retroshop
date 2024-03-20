import { useContext, useEffect, useState } from 'react';
import { authContext } from '../providers/AuthProvider';

const useAverage = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const [token] = useContext(authContext);

  useEffect(() => {
    const fetchAverage = async () => {
      try {
        const response = await fetch(
          `http://${import.meta.env.VITE_BASE_URL}:3001/getAverage/${id}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch average");
        }

        const dataAverage = await response.json();
        console.log(dataAverage);
        // Sacamos los datos
        setData(dataAverage);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAverage();

  }, [id]); 

  return { data, loading, error };
};

export default useAverage;
