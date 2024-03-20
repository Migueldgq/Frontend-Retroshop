import {  useContext, useEffect, useState } from "react";
import { authContext } from "../providers/AuthProvider";

const useGetUser = () => {

    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [token] = useContext(authContext);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch(`http://${import.meta.env.VITE_BASE_URL}:3001/getUser`,{
                method: "GET",
                headers: {Authorization:`Bearer ${token}`},
            })


            const userData = await response.json();
            if (!response.ok) {
                throw new Error("Failed to fetch products");
              } else {setData(userData)}

          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };

        fetchProducts();
      }, []);

      return { data, loading, error };

};

export default useGetUser;