import { useState } from "react";
import { useNavigate } from "react-router-dom";

const usePutUser = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const putUser = async (userData, token) => {
    try {
      setLoading(true);
      const formData = new FormData();
      if (userData.name) formData.append("name", userData.name);
      if (userData.password) formData.append("password", userData.password);
      if (userData.biography) formData.append("biography", userData.biography);
      if (userData.avatar) formData.append("avatar", userData.avatar);

      const response = await fetch(
        `http://${import.meta.env.VITE_BASE_URL}:3001/profile`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const responseData = await response.json();
      if (responseData.ok) setData(responseData);
      navigate("/profile/perfil");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, putUser };
};

export default usePutUser;
