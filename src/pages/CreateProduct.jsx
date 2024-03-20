import { useState, useContext } from "react";
import BackButton from "../components/BackButton.jsx";
import { Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";
import { Navbar } from "../components/Navbar.jsx";
import { Aside } from "../components/Aside.jsx";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [token] = useContext(authContext);

  if (!token) {
    return <Navigate to="/profile/login" />;
  }

  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    location: "",
    description: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const enviar = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("category", productData.category);
    formData.append("price", productData.price);
    formData.append("location", productData.location);
    formData.append("description", productData.description);
    formData.append("avatar", productData.avatar);
    formData.append("avatar2", productData.avatar2);

    try {
      const response = await fetch(
        `http://${import.meta.env.VITE_BASE_URL}:3001/products/create`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      console.log(formData);
      if (response.ok) {
        setStatusMessage("Registro exitoso");
        navigate("/profile/yourproducts");
      } else {
        const data = await response.json();
        if (data) {
          setStatusMessage(data.message);
        }
      }
    } catch (error) {
      setStatusMessage("Error al enviar los datos");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProductData({ ...productData, [id]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, avatar: file });
  };
  const handleFileChange2 = (e) => {
    const file2 = e.target.files[0];
    setProductData({ ...productData, avatar2: file2 });
  };

  return (
    <div className=" pb-20 lg:flex lg:pb-0 flex-wrap">
      <Navbar />
      <Aside />
      <div className="flex flex-col flex-1 h-screen lg:sticky lg:h-screen lg:overflow-y-auto">
        <div className="sticky top-0">
          <div className="flex justify-evenly items-center min-h-[80px] bg-white border-b-[0.5px] border-[#7C7C7C]">
            <div className="absolute left-7 ">
              <BackButton />
            </div>
            <h1 className="text-2xl font-bold text-center">
              Nuevo Producto
            </h1>
          </div>
        </div>
        <div className=" rounded-[10px] p-3 md:pb-[100px]">
          <form
            className="flex justify-center items-center flex-col gap-1 text-[#3337a3]"
            onSubmit={enviar}
          >
            <label
              htmlFor="name"
              className="block text-base  text-[#3337a3] w-[281px] p-2"
            >
              Nombre del Producto:
            </label>
            <input
              type="text"
              id="name"
              className="w-[278px] h-[33px]  bg-white  p-[20px] border border-[#db2777] rounded-md"
              placeholder="Nombre del articulo"
              value={productData.name}
              onChange={handleInputChange}
              required
            />

            <label
              htmlFor="category"
              className="block text-base  text-[#3337a3] w-[281px] p-2"
            >
              Categoria:
            </label>
            <select
              id="category"
              className="w-[278px] bg-white p-[20px] border border-[#db2777] rounded-md"
              value={productData.category}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>
              <option value="consola">Consola</option>
              <option value="movil">Móvil</option>
              <option value="videojuegos">Videojuegos</option>
              <option value="radio">radio</option>
              <option value="ordenador">Ordenador</option>
              <option value="otros">Otros</option>
            </select>

            <label
              htmlFor="price"
              className="block text-base  text-[#3337a3] w-[281px] p-2"
            >
              Precio:
            </label>
            <input
              type="text"
              id="price"
              className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
              placeholder="Precio"
              value={productData.price}
              onChange={handleInputChange}
              required
            />

            <label
              htmlFor="location"
              className="block text-base  text-[#3337a3] w-[281px] p-2"
            >
              Ubicacion:
            </label>
            <input
              type="text"
              id="location"
              className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
              placeholder="Localidad"
              value={productData.location}
              onChange={handleInputChange}
            />

            <label
              htmlFor="description"
              className="block text-base  text-[#3337a3] w-[281px] p-2"
            >
              Descripcion:
            </label>
            <textarea
              id="description"
              value={productData.description}
              onChange={handleInputChange}
              className="w-[278px] h-[73px] bg-white p-[20px] border border-[#db2777] rounded-md"
              placeholder="Description"
              required
            ></textarea>
            <label
              htmlFor="avatar"
              className="block text-base  text-[#3337a3] w-[281px] p-2"
            >
              Imagenes del Producto:
            </label>

            <input
              type="file"
              id="avatar"
              className="max-w-[281px] block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              onChange={handleFileChange}
              required
            />
            {/* <label htmlFor="avatar2">imagen 2</label>  */}
            <input
              type="file"
              id="avatar2"
              className="max-w-[281px] block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"
              onChange={handleFileChange2}
              required
            />

            <button
              type="submit"
              className="w-[278px] h-[33px] bg-[#3337a3] text-white rounded-sm mt-2 hover:bg-[#0f17e7]"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
