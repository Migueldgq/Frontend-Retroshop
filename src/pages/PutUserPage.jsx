import { useContext, useEffect, useState } from "react";
import usePutUser from "../Hook/usePutUser";
import { authContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Aside } from "../components/Aside";
import { Navbar } from "../components/Navbar";

export const PutUserPage = () => {
  const [token] = useContext(authContext);
  const { data, error, loading, putUser } = usePutUser();
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    biography: "",
    avatar: null,
  });

  useEffect(() => {
    if (data) {
      // Si hay datos disponibles, actualiza el estado userData
      setUserData({
        name: data.name,
        password: data.password,
        biography: data.biography,
        avatar: data.avatar,
      });
    }
  }, [data]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    // Recojo cuerpo
    const updateBody = {
      name: userData.name,
      password: userData.password,
      biography: userData.biography,
      avatar: userData.avatar,
    };
    // Llama a la función putUser del hook
    await putUser(updateBody, token);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserData({ ...userData, avatar: file });
  };

  return (
    <div className="pb-20 lg:flex lg:pb-0 flex-wrap">
      {/* Crear componente de loading */}
      {loading && <p>Loading... </p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Data updated successfully</p>}
      <Navbar />
      <Aside />
      <div className="flex flex-col flex-1 h-screen lg:sticky lg:h-screen lg:overflow-y-auto ">
        <div className="sticky top-0">
          <div className="flex justify-evenly items-center min-h-[80px] bg-white border-b-[0.5px] border-[#7C7C7C]">
            <Link to={"/profile/menu"} className="absolute left-7 lg:hidden">
              <ArrowBackIcon className="size-10 fill-[#000000]" />
            </Link>
            <h1 className="text-2xl font-bold text-[#000000]">
              Modificar Perfil
            </h1>
          </div>
        </div>
        <form
          className="flex justify-center items-center flex-col gap-1 mt-10"
          onSubmit={handleUpdateProduct}
        >
          <label
            htmlFor="name"
            className="block text-base  text-[#3337a3] w-[281px] p-2"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
            placeholder="Nombre Nuevo"
            value={userData.name}
            onChange={handleInputChange}
          />
          <label
            htmlFor="password"
            className="block text-base  text-[#3337a3] w-[281px] p-2"
          >
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            className="w-[278px] h-[33px] bg-white p-[20px] border border-[#db2777] rounded-md"
            placeholder="Contraseña Nueva"
            value={userData.password}
            onChange={handleInputChange}
          />
          <label
            htmlFor="avatar"
            className="block text-base  text-[#3337a3] w-[281px] p-2"
          >
            Foto de Perfil:
          </label>
          <input
            type="file"
            id="avatar"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none max-w-[281px]"
            onChange={handleFileChange}
          />
          {/* Mostrar la foto del usuario si existe */}
          {userData.avatar && (
            <img
              src={URL.createObjectURL(userData.avatar)}
              alt="Avatar del usuario"
              className="w-[150px] h-[150px]"
            />
          )}
          <button
            type="submit"
            className="w-[278px] h-[33px] bg-[#3337a3] text-white rounded-sm mt-2 hover:bg-[#0f17e7]"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
