import { ProductCard } from "../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import useProducts from "../Hook/useProducts";
import VideoMain from "../components/VideoMainPage";

export const MainPage = () => {
  const { products, loading, error } = useProducts(20);
  //console.log(products);
  return (
    <>
      <header className="flex h-fit w-full justify-center items-center lg:h-[400px] md:h-[400px] lg:overflow-hidden md:overflow-hidden">
        <VideoMain></VideoMain>
      </header>
      <main className="pb-28 overflow-x-hidden">
        <div className="flex items-center justify-center border-y-2 border-[#7C7C7C] h-[56px] mt-0 lg:w-screen md:w-screen sm:w-screen bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 screen-fit">
          <h2 className="font-bold text-[#080C89] ">PRODUCTOS DESTACADOS</h2>
        </div>
        <ul className="productsTable grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 auto-cols-max gap-4 justify-items-center  w-full pt-[15px]">
          {products.map((product) => (
            <li key={product.id} className="max-w-[154px] lg:max-w-[154px]">
              <Link to={`/products/product/?id=${product.id}`} key={product.id}>
                <ProductCard
                  productCategory={product.category}
                  productImg1={product.imageURL}
                  productImg2={product.imageURL2}
                  productName={product.name}
                  productPrice={product.price}
                  productId={product.id}
                  // {...console.log(product.id)}
                />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
