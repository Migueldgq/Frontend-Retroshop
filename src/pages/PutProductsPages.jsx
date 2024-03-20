import { useContext, useState } from "react";
import usePutProducts from "../Hook/usePutProducts";
import { authContext } from "../providers/AuthProvider";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const PutProductsPages = () => {
  const [token] = useContext(authContext);
  const { data, error, loading, putProduct } = usePutProducts();
  const { productId } = useParams();
  console.log(productId);
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    location: "",
    description: "",
    avatar: null,
    avatar2: null,
  });

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    // Agrega la lógica para construir el cuerpo del producto aquí
    const updateBody = {
      name: productData.name,
      category: productData.category,
      price: productData.price,
      location: productData.location,
      description: productData.description,
      avatar: productData.avatar,
      avatar2: productData.avatar2,
    };

    // Llama a la función putProduct del hook
    await putProduct(productId, updateBody, token);
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
    <div className=" create flex justify-center items-center flex-col py-3 mb-[100px] md:mb-0 md:bg-red-50  w-screen h-full">
      {/* Crear componente de loading */}
      {loading && <p>Loading... </p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Data updated successfully</p>}

      <div className="md:bg-white md:shadow-[0_0_30px_rgba(0,0,0,0.3)] rounded-[10px] p-3 md:px-14 md:pb-[100px]">
        <div className="flex justify-evenly py-10">
          <Link
            to={`/products/productSeller/?id=${productId}`}
            className="absolute left-7"
          >
            <ArrowBackIcon className="size-10 fill-[#000000]" />
          </Link>
          <h1 className="text-2xl text-[#000000]">
            Modificar Producto
          </h1>
        </div>
        <form
          className="flex justify-center items-center flex-col gap-1 text-[#3337a3]"
          onSubmit={handleUpdateProduct}
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
            placeholder="nombre del articulo"
            value={productData.name}
            onChange={handleInputChange}
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
            <option value="radio">Radio</option>
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
            placeholder="price"
            value={productData.price}
            onChange={handleInputChange}
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
            placeholder="Descripción"
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
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            onChange={handleFileChange}
          />
          <input
            type="file"
            id="avatar2"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"
            onChange={handleFileChange2}
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
  );
};
