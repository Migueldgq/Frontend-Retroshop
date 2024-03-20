import { useContext } from "react";
import useProductsByUser from "../Hook/useProductsByUser";
import { authContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

import { ProductCard } from "../components/ProductCard/ProductCard";
//import VerStatus from "../components/verStatus";
import DeletedProducts from "../components/DeletedProducts";

export const ProductsUserPage = () => {
  const [token] = useContext(authContext);
  const { products, error, loading } = useProductsByUser(token);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="pb-28">
      <h1>Products User Page</h1>
      <ul className="productsTable grid grid-cols-2 gap-4 justify-items-center w-full pt-[15px]">
        {products.map((product) => (
          <li key={product.id} className="max-w-[154px]">
            <ProductCard
              productCategory={product.category}
              productImg1={product.imageURL}
              productImg2={product.imageURL2}
              productName={product.name}
              productPrice={product.price}
            />
            <Link to={`/profile/modify/${product.id}`}>
              <button className="w-[150px] h-[33px] bg-[#3337a3]  p-[20px] text-white py-2 px-4 ">
                Modificar
              </button>
            </Link>

            <DeletedProducts productId={product.id} />
            {/* <VerStatus productId={product.id} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
