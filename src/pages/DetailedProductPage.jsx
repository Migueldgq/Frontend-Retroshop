import { ErrorMessage } from "../components/ErrorMessage";
import DetailedProduct from "../components/DetailedProduct/DetailedProduct";
import useProductById from "../Hook/useProductById";
// import BackButton from "../components/BackButton";
//El componente de la pagina a imprimir
export const DetailedProductPage = () => {
  // nos traemos los estados
  const { data, loading, error } = useProductById();
   //console.log(product);

  //intermedio de la carga
  if (loading)
    return (
      <p className="flex justify-center font-bold">
        Cargando, por favor espere...
      </p>
    );
  if (error)
    return <ErrorMessage message={error} className="flex justify-center" />;

  return (
    <div className="lg:flex lg:justify-center lg:py-8 ">
      {/* aqui se imprime el componente que muestra el producto */}
      <DetailedProduct data={data} />
    </div>
  );
};
