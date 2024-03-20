
import { ErrorMessage } from "../components/ErrorMessage";

import useProductById from "../Hook/useProductById"
import SellerProductDetail from '../components/sellerProducts/SellerProductDetail';

export const DetailedProductSellerPage = () => {
   
    
      const { data, loading, error } = useProductById();
       console.log(data);
    
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
        <>
          {/* aqui se imprime el componente que muestra el producto */}
          <SellerProductDetail data={data} />
        </>
      );
    };
    

